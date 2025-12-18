import { Phone, Wifi, Server, Network, Settings, TrendingUp, CheckCircle, ArrowRight, Users, Award, Clock, Building, Headset, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  const services = [
    {
      icon: Phone,
      title: 'SIP Trunks',
      description: 'Flexible, cost-effective VoIP solutions that scale with your business needs. Reduce call costs by up to 60% while gaining advanced call routing, number portability, and disaster recovery features.',
      page: 'sip-trunks',
    },
    {
      icon: Wifi,
      title: 'Business Broadband',
      description: 'High-speed, reliable internet connectivity from 40Mbps to 900Mbps with dedicated business support. Fibre to the Cabinet (FTTC) and Fibre to the Premises (FTTP) options available with guaranteed response times.',
      page: 'broadband',
    },
    {
      icon: Server,
      title: '3CX PBX Systems',
      description: 'Advanced phone systems with unified communications for modern businesses. Includes video conferencing, mobile apps, CRM integration, call recording, and advanced call routing. Perfect for businesses with 5-500 employees.',
      page: '3cx',
    },
    {
      icon: Network,
      title: 'Yeastar PBX',
      description: 'Powerful, flexible PBX solutions tailored to your industry requirements. Ideal for hotels, healthcare, education, and retail with industry-specific features and integrations. Cloud and on-premise deployment options.',
      page: 'yeastar',
    },
    {
      icon: TrendingUp,
      title: 'Leased Lines',
      description: 'Dedicated, symmetric internet connections from 10Mbps to 10Gbps with guaranteed bandwidth and SLAs. Uncontended, business-grade connectivity with 99.9% uptime guarantee and 4-hour fix times.',
      page: 'leased-lines',
    },
    {
      icon: Settings,
      title: 'Management Services',
      description: 'Proactive 24/7 monitoring and support for your entire telecommunications infrastructure. Includes automatic failover, performance reporting, security updates, and unlimited remote support.',
      page: 'management',
    },
  ];

  const testimonials = [
    {
      company: 'Somerset Manufacturing Ltd',
      location: 'Taunton',
      quote: 'UKBTS transformed our communications. The 3CX system has improved our efficiency dramatically.',
      name: 'Sarah Thompson',
      role: 'Operations Director',
    },
    {
      company: 'Dorset Retail Group',
      location: 'Bournemouth',
      quote: 'Reliable broadband and excellent support. UKBTS understands the needs of local businesses.',
      name: 'James Mitchell',
      role: 'IT Manager',
    },
    {
      company: 'Yeovil Professional Services',
      location: 'Yeovil',
      quote: 'The leased line has been rock solid. Perfect for our growing team and client demands.',
      name: 'Emma Richards',
      role: 'Managing Partner',
    },
  ];

  const benefits = [
    'Expert local knowledge of Somerset & Dorset',
    'Dedicated account management',
    '24/7 technical support',
    'Competitive pricing with no hidden fees',
    'Proven track record with local businesses',
    'Rapid response times',
  ];

  return (
    <div>
      <SEO
        title="UKBTS Telecommunications - VoIP, Broadband & PBX Provider | Somerset & Dorset"
        description="Leading VoIP, broadband, and PBX provider for Somerset & Dorset businesses. SIP trunks, business broadband, 3CX, Yeastar, leased lines, and managed services."
        keywords="VoIP provider Somerset, business broadband Dorset, PBX systems, SIP trunks, telecommunications Somerset, 3CX partner, Yeastar dealer, leased lines"
        canonicalUrl="/"
      />
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <span className="text-cyan-400 text-sm font-medium">Trusted by Somerset & Dorset Businesses</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Leading VoIP & Broadband Provider for{' '}
                <span className="text-cyan-400">Somerset & Dorset</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Expert telecommunications solutions that empower businesses across Taunton, Yeovil, Bournemouth, and beyond.
                From VoIP and broadband to PBX systems and leased lines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                >
                  Get a Quote <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-semibold text-lg border border-white/20"
                >
                  Call Us Now
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-700">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">15+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">500+</div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime SLA</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-3xl opacity-20"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                  <div className="space-y-4">
                    {[Users, Award, Clock].map((Icon, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                        <div className="bg-cyan-500/20 p-3 rounded-lg">
                          <Icon className="text-cyan-400" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-gray-700 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-gray-800 rounded w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Telecommunications Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From VoIP and broadband to advanced PBX systems, we provide everything your business needs to communicate effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={`/${service.page}`}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer block"
                >
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-cyan-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose UKBTS for Your Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We understand the unique needs of businesses across Somerset and Dorset. Our local expertise
                combined with cutting-edge technology ensures your business stays connected.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-cyan-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-block bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold"
              >
                Get Started Today
              </Link>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-cyan-100 p-3 rounded-lg">
                      <Phone className="text-cyan-600" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">VoIP Solutions</div>
                      <div className="text-sm text-gray-600">Flexible & Scalable</div>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-cyan-100 p-3 rounded-lg">
                      <Wifi className="text-cyan-600" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Business Broadband</div>
                      <div className="text-sm text-gray-600">High-Speed Connectivity</div>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-cyan-100 p-3 rounded-lg">
                      <Settings className="text-cyan-600" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Support & Management</div>
                      <div className="text-sm text-gray-600">24/7 Available</div>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Businesses Across Somerset & Dorset
            </h2>
            <p className="text-xl text-gray-600">
              See what our clients say about our telecommunications services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-cyan-600 font-medium mt-1">
                    {testimonial.company} - {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Business Communications?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch today for a free consultation and discover how UKBTS can power your business
              with reliable, cutting-edge telecommunications solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 inline-block"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:03333583976"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call 0333 358 3976
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve Across Somerset & Dorset
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized telecommunications solutions tailored to your industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
              <Building className="text-cyan-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Services</h3>
              <p className="text-gray-600 text-sm">Law firms, accountants, consultancies, and estate agents across Taunton, Yeovil, and Bournemouth trust our VoIP and broadband solutions for reliable client communications.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
              <Users className="text-cyan-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">Medical practices, care homes, and dental surgeries benefit from our secure, HIPAA-compliant phone systems with call recording and appointment management integration.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
              <Server className="text-cyan-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hospitality</h3>
              <p className="text-gray-600 text-sm">Hotels, B&Bs, restaurants, and holiday parks in Dorset and Somerset rely on our Yeastar PBX systems with hotel-specific features like wake-up calls and room service integration.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
              <TrendingUp className="text-cyan-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Retail & eCommerce</h3>
              <p className="text-gray-600 text-sm">High-speed broadband and leased lines power retail operations, from point-of-sale systems to inventory management and online sales platforms across the region.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Business Solutions for Every Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to established enterprises, we provide scalable telecommunications infrastructure
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0">
                  <Zap className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Growing Businesses</h3>
                  <p className="text-gray-600 mb-4">
                    Need telecommunications that scale with your ambitions? Our cloud-based 3CX PBX systems and flexible SIP trunk packages grow with you. Start with 5 users and expand to 500+ without infrastructure changes. Perfect for Somerset and Dorset businesses experiencing rapid growth.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan-500" />
                      Add users and lines instantly
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan-500" />
                      No upfront hardware investment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan-500" />
                      Pay only for what you use
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0">
                  <Shield className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Site Operations</h3>
                  <p className="text-gray-600 mb-4">
                    Connect offices across Taunton, Yeovil, Bournemouth, and beyond with our leased line network. Internal extension dialing, centralized management, and seamless call routing between locations. Ideal for retail chains, care home groups, and franchises.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan-500" />
                      Free calls between sites
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan-500" />
                      Centralized phone system management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan-500" />
                      Guaranteed bandwidth between locations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0">
                  <Headset className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Remote & Hybrid Teams</h3>
                  <p className="text-gray-600 mb-4">
                    Enable seamless remote working with our cloud PBX solutions. Your team can take and make calls from anywhere using desktop softphones or mobile apps. Perfect for businesses embracing flexible working across Somerset and Dorset.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan-500" />
                      Mobile and desktop apps included
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan-500" />
                      Hot desking and presence management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan-500" />
                      Video conferencing integrated
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0">
                  <Award className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">High Availability Requirements</h3>
                  <p className="text-gray-600 mb-4">
                    For businesses where downtime isn't an option. Our leased lines with SLAs, diverse routing, and automatic failover ensure your communications never stop. Essential for emergency services, healthcare, and financial services.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan-500" />
                      99.9% uptime SLA included
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan-500" />
                      4-hour fix time guarantee
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan-500" />
                      Automatic failover to backup connection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Serving All of Somerset & Dorset
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Local expertise with regional coverage. Our engineers are based across Somerset and Dorset, providing rapid on-site support when you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Somerset Coverage</h3>
              <p className="text-gray-600 text-sm mb-3">
                Comprehensive VoIP, broadband, and PBX services throughout Somerset including:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Taunton & Taunton Deane</li>
                <li>Yeovil & South Somerset</li>
                <li>Bridgwater & Sedgemoor</li>
                <li>Frome & Mendip</li>
                <li>Glastonbury, Street & Wells</li>
                <li>Chard, Ilminster & Crewkerne</li>
                <li>Minehead & West Somerset</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Dorset Coverage</h3>
              <p className="text-gray-600 text-sm mb-3">
                Full telecommunications support across Dorset including:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Bournemouth & Christchurch</li>
                <li>Poole & Purbeck</li>
                <li>Weymouth & Portland</li>
                <li>Dorchester & West Dorset</li>
                <li>Sherborne & North Dorset</li>
                <li>Blandford Forum</li>
                <li>Wimborne Minster & East Dorset</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-100">
              <h3 className="font-bold text-gray-900 mb-3">Why Local Matters</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>Engineers based in Taunton, Yeovil, and Bournemouth for rapid on-site response</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>Deep understanding of local infrastructure and connectivity challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>Face-to-face consultations and site surveys available across the region</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>Supporting Somerset and Dorset businesses for over 15 years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
