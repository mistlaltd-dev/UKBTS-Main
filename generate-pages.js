import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://ukbts.co.uk';
const OG_IMAGE = `${BASE_URL}/ogimage.png`;

const pageMetadata = {
  '/': {
    title: 'UKBTS Telecommunications | VoIP, PBX & Broadband – Somerset & Dorset',
    description: 'UKBTS provides business phone systems, SIP trunks, broadband, leased lines and WiFi installation across Somerset and Dorset. Get a free quote today.',
    ogTitle: 'UKBTS Telecommunications | Somerset & Dorset',
    ogDescription: 'Expert telecoms for Somerset & Dorset businesses. VoIP, PBX, broadband, leased lines & WiFi. Call 0333 358 3976.',
    keywords: 'VoIP provider Somerset, business broadband Dorset, PBX systems, SIP trunks, telecommunications Somerset, 3CX partner, Yeastar dealer, leased lines',
  },
  '/phone-systems': {
    title: 'Business Phone Systems Somerset & Dorset | 3CX & Yeastar PBX | UKBTS',
    description: 'Modern VoIP business phone systems for Somerset and Dorset. UKBTS supply and install 3CX and Yeastar PBX systems with full support. Request a free consultation.',
    ogTitle: 'Business Phone Systems – Somerset & Dorset | UKBTS',
    ogDescription: 'Feature-rich VoIP phone systems for businesses across Taunton, Yeovil, Bournemouth and the South West. Free consultation available.',
    keywords: 'business phone systems Somerset, VoIP phone system Dorset, IP PBX, cloud phone system, 3CX Taunton, Yeastar Yeovil, phone system Bournemouth, PBX Weymouth',
  },
  '/sip-trunks': {
    title: 'SIP Trunks Somerset & Dorset | Replace ISDN – Save Up to 60% | UKBTS',
    description: 'Cost-effective SIP trunks for Somerset and Dorset businesses. Replace expensive ISDN lines with flexible VoIP. Instant deployment, keep your existing numbers. Get a quote.',
    ogTitle: 'SIP Trunks – Somerset & Dorset | UKBTS',
    ogDescription: 'Save up to 60% on calls. Flexible UK SIP trunks with 99.9% uptime. Serving Taunton, Yeovil, Bournemouth and across the South West.',
    keywords: 'SIP trunks Somerset, VoIP trunks Dorset, business VoIP, SIP providers UK, cost-effective telephony, cloud telephony',
  },
  '/broadband': {
    title: 'Business Broadband Somerset & Dorset | FTTC, FTTP & Leased Lines | UKBTS',
    description: 'Business broadband for Somerset and Dorset. FTTC up to 80Mbps, FTTP up to 1Gbps, and dedicated leased lines. Static IP included, 99.9% uptime SLA. Check availability.',
    ogTitle: 'Business Broadband – Somerset & Dorset | UKBTS',
    ogDescription: 'High-speed business internet from FTTC to 10Gbps leased lines. Serving Taunton, Yeovil, Bournemouth and all of Somerset & Dorset.',
    keywords: 'business broadband Somerset, FTTC Dorset, FTTP Somerset, fibre broadband, dedicated internet, business internet',
  },
  '/3cx': {
    title: '3CX PBX Somerset & Dorset | Certified 3CX Partner | Installation & Support | UKBTS',
    description: 'Certified 3CX partner supplying, installing and supporting 3CX phone systems across Somerset and Dorset. Cloud, on-premise and hybrid deployment. Book a free demo.',
    ogTitle: '3CX PBX Systems – Somerset & Dorset | UKBTS',
    ogDescription: 'Award-winning 3CX unified communications for Somerset & Dorset businesses. Save up to 80% vs traditional PBX. Certified installation & support.',
    keywords: '3CX Somerset, 3CX Dorset, PBX systems, IP phone system, 3CX certified partner, business phone system',
  },
  '/yeastar': {
    title: 'Yeastar PBX Somerset & Dorset | Authorised Partner | S-Series & P-Series | UKBTS',
    description: 'Authorised Yeastar partner supplying S-Series, P-Series and Cloud PBX systems across Somerset and Dorset. Industry solutions for hospitality, healthcare and manufacturing. Get a quote.',
    ogTitle: 'Yeastar PBX – Somerset & Dorset | UKBTS',
    ogDescription: 'Authorised Yeastar partner. Scalable IP PBX from 5 to 2,000+ users. Serving Taunton, Yeovil, Bournemouth and across the South West.',
    keywords: 'Yeastar Somerset, Yeastar PBX, IP PBX systems, Yeastar dealer, business phone system Dorset',
  },
  '/leased-lines': {
    title: 'Leased Lines Somerset & Dorset | 100Mbps–10Gbps Dedicated Connectivity | UKBTS',
    description: 'Dedicated leased lines for Somerset and Dorset businesses. 100Mbps from £299/month, 1Gbps from £599/month. Guaranteed symmetric speeds, 99.9%+ uptime SLA. Request a survey.',
    ogTitle: 'Leased Lines – Somerset & Dorset | UKBTS',
    ogDescription: 'Uncontended dedicated internet connections. 100Mbps to 10Gbps. 99.9%+ uptime. Serving Somerset, Dorset & the South West.',
    keywords: 'leased lines Somerset, dedicated connectivity Dorset, ethernet circuits, point to point, guaranteed bandwidth',
  },
  '/wifi-installation': {
    title: 'Business WiFi Installation Somerset & Dorset | WiFi 6 Experts | UKBTS',
    description: 'Professional business WiFi installation across Somerset and Dorset. WiFi 6 access points, full site surveys, enterprise security and guest networks. Request a free survey.',
    ogTitle: 'WiFi Installation – Somerset & Dorset | UKBTS',
    ogDescription: 'Expert wireless network design and installation. WiFi 6, full coverage, enterprise security. Taunton, Yeovil, Bournemouth and beyond.',
    keywords: 'WiFi installation Somerset, wireless network Dorset, WiFi 6, business WiFi, site survey, access points, enterprise WiFi',
  },
  '/management': {
    title: 'Managed Telecoms Services Somerset & Dorset | 24/7 Monitoring & Support | UKBTS',
    description: 'Managed telecoms services for Somerset and Dorset businesses. 24/7 monitoring, proactive support and maintenance from £150/month. Schedule a consultation today.',
    ogTitle: 'Managed Telecoms Services – Somerset & Dorset | UKBTS',
    ogDescription: 'Let UKBTS manage your telecoms infrastructure. 24/7 monitoring, rapid response, fixed monthly pricing. Serving Somerset & Dorset.',
    keywords: 'managed telecoms, IT support Somerset, 24/7 support, telecoms management, proactive monitoring Dorset',
  },
  '/contact': {
    title: 'Contact UKBTS | Free Quote – Telecoms Somerset & Dorset | 0333 358 3976',
    description: 'Contact UKBTS for a free telecoms consultation. Serving businesses across Somerset and Dorset with VoIP, PBX, broadband and leased lines. Call 0333 358 3976.',
    ogTitle: 'Contact UKBTS | Somerset & Dorset Telecommunications',
    ogDescription: 'Get in touch with UKBTS Telecommunications. Expert telecoms solutions for businesses across Somerset & Dorset.',
    keywords: 'contact UKBTS, Somerset telecoms, Dorset communications, get quote, telecoms consultation',
  },
  '/404': {
    title: 'Page Not Found | UKBTS Telecommunications',
    description: 'The page you are looking for could not be found. Browse our telecoms services or contact UKBTS for help.',
    ogTitle: 'Page Not Found | UKBTS Telecommunications',
    ogDescription: 'The page you are looking for could not be found. Browse our telecoms services or contact UKBTS for help.',
    keywords: '404, page not found, UKBTS',
    noIndex: true,
  },
};

const routes = Object.keys(pageMetadata);
const distDir = path.join(__dirname, 'dist');

// Import the SSR bundle
const { render } = await import('./dist/server/entry-server.js');

const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

function buildPageHtml(route, appHtml) {
  const meta = pageMetadata[route];
  const fullUrl = route === '/' ? BASE_URL : `${BASE_URL}${route}`;
  const robotsContent = meta.noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const metaTags = `<title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta name="keywords" content="${meta.keywords}" />
    <meta name="robots" content="${robotsContent}" />
    <link rel="canonical" href="${fullUrl}" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="UKBTS Telecommunications" />
    <meta property="og:title" content="${meta.ogTitle}" />
    <meta property="og:description" content="${meta.ogDescription}" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1000" />
    <meta property="og:image:height" content="544" />
    <meta property="og:image:alt" content="${meta.ogTitle}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.ogTitle}" />
    <meta name="twitter:description" content="${meta.ogDescription}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />`;

  let html = templateHtml;

  // Remove everything between the SEO comments in the template
  html = html.replace(
    /<!-- SEO meta tags are injected per-page by the build script -->[\s\S]*?<!-- Sitemap -->/,
    '<!-- SEO meta tags are injected per-page by the build script -->\n    <!-- Sitemap -->'
  );

  const cleanAppHtml = appHtml;

  // Inject all meta tags before </head>
  html = html.replace('</head>', `    ${metaTags}\n  </head>`);
  // Inject rendered app HTML into root div
  html = html.replace('<div id="root"></div>', `<div id="root">${cleanAppHtml}</div>`);

  // Final strip of any remaining data-rh tags from the complete HTML
  html = html
    .replace(/<script[^>]+data-rh="true"[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<link[^>]+data-rh="true"[^>]*\/?>/gi, '')
    .replace(/<meta[^>]+data-rh="true"[^>]*\/?>/gi, '');

  return html;
}

// Generate each page
for (const route of routes) {
  const appHtml = render(route);
  const pageHtml = buildPageHtml(route, appHtml);

  if (route === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), pageHtml);
    console.log(`Generated: index.html`);
  } else if (route === '/404') {
    fs.writeFileSync(path.join(distDir, '404.html'), pageHtml);
    console.log(`Generated: 404.html`);
  } else {
    const routeDir = path.join(distDir, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), pageHtml);
    console.log(`Generated: ${route}/index.html`);
  }
}

// Generate sitemap.xml (exclude noindex pages)
const lastmod = '2026-05-04';
const sitemapEntries = routes
  .filter(route => !pageMetadata[route].noIndex)
  .map(route => {
  const fullUrl = route === '/' ? BASE_URL : `${BASE_URL}${route}`;
  const priority = route === '/' ? '1.0' : '0.8';
  const changefreq = route === '/' ? 'weekly' : 'monthly';
  return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('Generated: sitemap.xml');

console.log('Static page generation complete!');
