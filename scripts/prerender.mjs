/**
 * Post-build prerender script.
 * Launches Puppeteer, visits each route on a local static server,
 * and writes the fully-rendered HTML back into dist/.
 */

import { launch } from 'puppeteer';
import { createServer } from 'http';
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  statSync,
} from 'fs';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 4173;

const ROUTES = [
  '/',
  '/startup',
  '/privacy-policy',
  '/industries/healthcare',
  '/industries/legal',
  '/industries/staffing',
  '/industries/smb',
];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

/**
 * Simple static server for dist/
 * Safely handles:
 * - directories
 * - missing files
 * - SPA fallback
 */
async function startServer() {
  const server = createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    let filePath = join(DIST, url.pathname);

    try {
      const stat = statSync(filePath);

      // If directory → serve index.html inside it
      if (stat.isDirectory()) {
        filePath = join(filePath, 'index.html');
      }
    } catch {
      // If file doesn't exist → SPA fallback
      filePath = join(DIST, 'index.html');
    }

    try {
      const content = readFileSync(filePath);
      const ext = extname(filePath);

      res.writeHead(200, {
        'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
      });
      res.end(content);
    } catch {
      // Final fallback
      const fallback = readFileSync(join(DIST, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fallback);
    }
  });

  await new Promise((resolve) => server.listen(PORT, resolve));
  return server;
}

/**
 * Puppeteer prerender process
 */
async function prerender() {
  console.log('🚀 Starting prerender...');

  const server = await startServer();

  const browser = await launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of ROUTES) {
    console.log(`  Rendering ${route}...`);

    const page = await browser.newPage();

    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Allow animations/lazy content to finish
    await page.waitForTimeout(1000);

    const html = await page.content();

    const filePath =
      route === '/'
        ? join(DIST, 'index.html')
        : join(DIST, route.slice(1), 'index.html');

    const dir = dirname(filePath);

    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    writeFileSync(filePath, html, 'utf-8');
    console.log(`  ✅ Wrote ${filePath}`);

    await page.close();
  }

  await browser.close();
  server.close();

  console.log('🎉 Prerender complete!');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
