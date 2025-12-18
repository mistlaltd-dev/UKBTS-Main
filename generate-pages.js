import fs from 'fs';
import path from 'path';

const routes = [
  '/',
  '/sip-trunks',
  '/broadband',
  '/3cx',
  '/yeastar',
  '/leased-lines',
  '/management',
  '/wifi-installation',
  '/phone-systems',
  '/contact'
];

const distDir = './dist';
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

routes.forEach(route => {
  if (route === '/') return;

  const routeDir = path.join(distDir, route);

  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
  console.log(`Generated: ${route}/index.html`);
});

fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '200.html'));
console.log('Generated: 200.html (fallback)');

console.log('Static page generation complete!');
