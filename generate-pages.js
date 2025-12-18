import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.ukbts.co.uk';
const OG_IMAGE = `${BASE_URL}/Copy%20of%20UKBTS%20LOGO%20NEW%20(1).png`;

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

const distDir = './dist';
let indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

function generateMetaTags(route) {
  const meta = pageMetadata[route];
  const fullUrl = route === '/' ? BASE_URL : `${BASE_URL}${route}`;

  return `<!-- SEO Meta Tags -->
    <meta name="description" content="${meta.description}" />
    <meta name="keywords" content="${meta.keywords}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>${meta.title}</title>

    <!-- Open Graph / Social Media -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:width" content="436" />
    <meta property="og:image:height" content="97" />
    <meta property="og:site_name" content="UKBTS Telecommunications" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />

    <!-- Canonical URL -->
    <link rel="canonical" href="${fullUrl}" />`;
}

function replaceMetaTags(html, route) {
  const metaTagsRegex = /<!-- SEO Meta Tags -->[\s\S]*?<!-- Twitter Card -->[\s\S]*?<meta name="twitter:image"[^>]*>/;
  const newMetaTags = generateMetaTags(route);

  let modifiedHtml = html.replace(metaTagsRegex, newMetaTags);

  return modifiedHtml;
}

routes.forEach(route => {
  if (route === '/') return;

  const routeDir = path.join(distDir, route);

  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const pageHtml = replaceMetaTags(indexHtml, route);
  fs.writeFileSync(path.join(routeDir, 'index.html'), pageHtml);
  console.log(`Generated: ${route}/index.html`);
});

fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '200.html'));
console.log('Generated: 200.html (fallback)');

console.log('Static page generation complete!');
