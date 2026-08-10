import { Helmet } from "react-helmet-async";

const SITE = "https://www.crabtreesolutions.us";

interface SeoProps {
  title: string;
  description: string;
  /** Canonical path including leading and trailing slash, e.g. "/startup/" */
  path: string;
  /** When true, emit robots noindex, nofollow for this route only. */
  noindex?: boolean;
}

/**
 * Single source of truth for per-route head metadata.
 * Emits exactly one title, description, canonical, OG title/description/url
 * and Twitter title/description per route.
 */
const Seo = ({ title, description, path, noindex = false }: SeoProps) => {
  const url = `${SITE}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
