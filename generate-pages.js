import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://www.ukbts.co.uk';
const OG_IMAGE = `${BASE_URL}/ogimage.png`;

const pageMetadata = {
  '/': {
    title: 'UKBTS Telecommunications - VoIP, Broadband & PBX Provider | Somerset & Dorset',
    description: 'Leading VoIP, broadband, and PBX provider for Somerset & Dorset businesses. SIP trunks, business broadband, 3CX, Yeastar, leased lines, and managed services.',
    keywords: 'VoIP provider Somerset, business broadband Dorset, PBX systems, SIP trunks, telecommunications Somerset, 3CX partner, Yeastar dealer, leased lines',
  },
  '/sip-trunks': {
    title: 'SIP Trunks Somerset & Dorset | VoIP Solutions | UKBTS',
    description: 'Professional SIP trunk solutions for businesses in Somerset & Dorset. Cost-effective VoIP telephony with reliable call quality and scalability.',
    keywords: 'SIP trunks Somerset, VoIP trunks Dorset, business VoIP, SIP providers UK, cost-effective telephony, cloud telephony',
  },
  '/broadband': {
    title: 'Business Broadband Somerset & Dorset | FTTC & FTTP | UKBTS',
    description: 'High-speed business broadband for Somerset & Dorset. FTTC and FTTP connections with dedicated support and competitive pricing.',
    keywords: 'business broadband Somerset, FTTC Dorset, FTTP Somerset, fibre broadband, dedicated internet, business internet',
  },
  '/3cx': {
    title: '3CX PBX Systems Somerset & Dorset | Certified Partner | UKBTS',
    description: 'Official 3CX certified partner providing advanced PBX phone systems for businesses in Somerset & Dorset. Professional installation and support.',
    keywords: '3CX Somerset, 3CX Dorset, PBX systems, IP phone system, 3CX certified partner, business phone system',
  },
  '/yeastar': {
    title: 'Yeastar PBX Somerset & Dorset | Authorized Partner | UKBTS',
    description: 'Authorized Yeastar PBX partner in Somerset & Dorset. Scalable IP phone systems with advanced features for growing businesses.',
    keywords: 'Yeastar Somerset, Yeastar PBX, IP PBX systems, Yeastar dealer, business phone system Dorset',
  },
  '/leased-lines': {
    title: 'Leased Lines Somerset & Dorset | Dedicated Connectivity | UKBTS',
    description: 'Dedicated leased line connectivity for businesses in Somerset & Dorset. Guaranteed bandwidth with 24/7 monitoring and support.',
    keywords: 'leased lines Somerset, dedicated connectivity Dorset, ethernet circuits, point to point, guaranteed bandwidth',
  },
  '/management': {
    title: 'Managed Telecoms Services Somerset & Dorset | 24/7 Support | UKBTS',
    description: 'Comprehensive managed telecoms services in Somerset & Dorset. 24/7 support, proactive monitoring, and expert consultation.',
    keywords: 'managed telecoms, IT support Somerset, 24/7 support, telecoms management, proactive monitoring Dorset',
  },
  '/wifi-installation': {
    title: 'WiFi Installation Somerset & Dorset | Business Wireless Networks | UKBTS',
    description: 'Professional WiFi installation and wireless network solutions for Somerset & Dorset businesses. Enterprise-grade WiFi 6, site surveys, and expert support.',
    keywords: 'WiFi installation Somerset, wireless network Dorset, WiFi 6, business WiFi, site survey, access points, enterprise WiFi',
  },
  '/phone-systems': {
    title: 'Business Phone Systems Somerset & Dorset | VoIP PBX Solutions | UKBTS',
    description: 'Business phone systems for Somerset & Dorset including 3CX and Yeastar. Cloud and on-premise VoIP PBX solutions with professional installation in Taunton, Yeovil, Bournemouth, and Weymouth.',
    keywords: 'business phone systems Somerset, VoIP phone system Dorset, IP PBX, cloud phone system, 3CX Taunton, Yeastar Yeovil, phone system Bournemouth, PBX Weymouth',
  },
  '/contact': {
    title: 'Contact UKBTS | Somerset & Dorset Telecommunications',
    description: 'Get in touch with UKBTS Telecommunications. Expert telecoms solutions for businesses across Somerset & Dorset.',
    keywords: 'contact UKBTS, Somerset telecoms, Dorset communications, get quote, telecoms consultation',
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

  const metaTags = `<title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta name="keywords" content="${meta.keywords}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href="${fullUrl}" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="UKBTS Telecommunications" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1000" />
    <meta property="og:image:height" content="544" />
    <meta property="og:image:alt" content="${meta.title}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />`;

  let html = templateHtml;

  // Replace <title> tag
  html = html.replace(/<title>[^<]*<\/title>/, '');
  // Inject all meta tags before </head>
  html = html.replace('</head>', `    ${metaTags}\n  </head>`);
  // Inject rendered app HTML into root div
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  return html;
}

// Generate each page
for (const route of routes) {
  const appHtml = render(route);
  const pageHtml = buildPageHtml(route, appHtml);

  if (route === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), pageHtml);
    console.log(`Generated: index.html`);
  } else {
    const routeDir = path.join(distDir, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), pageHtml);
    console.log(`Generated: ${route}/index.html`);
  }
}

// Generate sitemap.xml
const lastmod = '2026-05-04';
const sitemapEntries = routes.map(route => {
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
