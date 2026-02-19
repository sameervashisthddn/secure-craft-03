/**
 * Post-build prerender script.
 * Launches Puppeteer, visits each route on a local static server,
 * and writes the fully-rendered HTML back into dist/.
 */
import { launch } from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import handler from 'serve-handler';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 4173;

const ROUTES = ['/', '/startup', '/privacy-policy', '/industries/healthcare', '/industries/legal', '/industries/staffing', '/industries/smb'];

async function startServer() {
  const server = createServer((req, res) => {
    return handler(req, res, {
      public: DIST,
      rewrites: [{ source: '**', destination: '/index.html' }],
    });
  });
  await new Promise((resolve) => server.listen(PORT, resolve));
  return server;
}

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

    // Wait a bit for any animations/lazy content
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
