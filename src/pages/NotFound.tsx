import { Link } from 'react-router-dom';
import { Home, Phone, ArrowRight, Search, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  const popularPages = [
    { name: 'Business Phone Systems', path: '/phone-systems', description: 'Modern VoIP PBX solutions' },
    { name: 'SIP Trunks', path: '/sip-trunks', description: 'Flexible VoIP trunking' },
    { name: 'Business Broadband', path: '/broadband', description: 'High-speed FTTC and FTTP' },
    { name: 'Leased Lines', path: '/leased-lines', description: 'Dedicated connectivity' },
    { name: 'WiFi Installation', path: '/wifi-installation', description: 'Enterprise wireless networks' },
    { name: 'Contact Us', path: '/contact', description: 'Get in touch for a quote' },
  ];

  return (
    <>
      <SEO
        title="Page Not Found | UKBTS Telecommunications"
        description="The page you are looking for could not be found. Browse our telecoms services or contact UKBTS for help."
        keywords="404, page not found, UKBTS"
        canonicalUrl="/404"
        noIndex
      />

      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-8">
              <Search size={16} className="text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">Error 404</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent leading-none">
              404
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
              Page not found
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              We couldn't find the page you were looking for. It may have been moved, renamed, or no longer exists. Try one of the links below or get in touch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3.5 rounded-md font-medium transition-colors"
              >
                <Home size={18} />
                Back to Homepage
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-md font-medium transition-colors backdrop-blur-sm"
              >
                <Phone size={18} />
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Popular pages
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Or perhaps you were looking for one of these
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="group bg-white border border-gray-200 hover:border-cyan-500 rounded-xl p-6 transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors mb-1">
                      {page.name}
                    </h4>
                    <p className="text-sm text-gray-600">{page.description}</p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-gray-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-white border border-gray-200 rounded-2xl p-8 md:p-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-50 rounded-full mb-5">
              <MapPin size={26} className="text-cyan-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Still need help?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Our team supports businesses across Somerset, Dorset and the wider UK. Give us a call and we'll point you in the right direction.
            </p>
            <a
              href="tel:03333583976"
              className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold text-lg transition-colors"
            >
              <Phone size={20} />
              0333 358 3976
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
