import { Settings, CheckCircle, ArrowRight, Monitor, HeadphonesIcon, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Management() {
  const services = [
    {
      icon: Monitor,
      title: 'Proactive Monitoring',
      description: 'Round-the-clock monitoring of your infrastructure with immediate alerts and rapid response.',
      features: ['Network monitoring', 'PBX system health', 'Bandwidth utilization', 'Performance metrics'],
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Expert technical support whenever you need it, with dedicated account management.',
      features: ['Priority helpdesk', 'Remote diagnostics', 'On-site support available', 'Escalation procedures'],
    },
    {
      icon: Shield,
      title: 'Maintenance & Updates',
      description: 'Keep your systems current and secure with scheduled maintenance and updates.',
      features: ['Security patches', 'Firmware updates', 'Configuration backups', 'Documentation'],
    },
  ];

  const packages = [
    {
      name: 'Essential',
      price: '£150/mo',
      features: [
        'Business hours support',
        'Email & phone support',
        'Monthly system health reports',
        'Basic monitoring',
        'Firmware updates',
      ],
    },
    {
      name: 'Professional',
      price: '£299/mo',
      features: [
        '24/7 support access',
        'Proactive monitoring',
        'Priority response',
        'Quarterly reviews',
        'Configuration management',
        'Remote troubleshooting',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Dedicated account manager',
        'Custom SLA',
        'On-site support included',
        'Strategic planning sessions',
        'Advanced analytics',
        'White-glove service',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <span className="text-cyan-400 text-sm font-medium">Managed Services</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Telecommunications Management Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Focus on your business while we manage your telecommunications infrastructure. Serving businesses
                across Somerset and Dorset with expert support and proactive management.
              </p>
              <Link
  to="/contact"
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 inline-flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-200">24/7 system monitoring and alerts</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-200">Proactive issue resolution</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-200">Regular maintenance and updates</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-200">Expert technical support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to keep your telecommunications running smoothly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <CheckCircle className="text-cyan-600 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Service Level
            </h2>
            <p className="text-xl text-gray-600">
              Flexible packages designed to meet your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-xl scale-105'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block mb-4 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-3xl font-bold mb-8 ${pkg.popular ? 'text-white' : 'text-cyan-600'}`}>
                  {pkg.price}
                </div>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2">
                      <CheckCircle
                        className={`flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-cyan-600'}`}
                        size={18}
                      />
                      <span className={`text-sm ${pkg.popular ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
    to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-white text-cyan-600 hover:bg-gray-100'
                      : 'bg-cyan-500 text-white hover:bg-cyan-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Managed Services?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Let our experts handle your telecommunications infrastructure so you can focus on growing your business.
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Reduce Downtime</div>
                  <div className="text-sm text-gray-600">
                    Proactive monitoring prevents issues before they impact your business
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Cost Predictability</div>
                  <div className="text-sm text-gray-600">
                    Fixed monthly pricing with no surprise repair bills
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Expert Knowledge</div>
                  <div className="text-sm text-gray-600">
                    Access to certified technicians and industry best practices
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Peace of Mind</div>
                  <div className="text-sm text-gray-600">
                    Know that your systems are monitored and maintained by professionals
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Promise</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-cyan-400 font-bold text-4xl mb-2">4hr</div>
                  <div className="text-gray-300">Average response time for critical issues</div>
                </div>
                <div className="border-t border-gray-700 pt-6">
                  <div className="text-cyan-400 font-bold text-4xl mb-2">99.9%</div>
                  <div className="text-gray-300">Customer satisfaction rating</div>
                </div>
                <div className="border-t border-gray-700 pt-6">
                  <div className="text-cyan-400 font-bold text-4xl mb-2">15+</div>
                  <div className="text-gray-300">Years managing Somerset & Dorset businesses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Settings className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Simplify Your Telecoms Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to discuss which management package is right for your business. We'll create a
            custom plan that fits your needs and budget.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
