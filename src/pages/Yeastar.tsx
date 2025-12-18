import { Network, CheckCircle, ArrowRight, Building, Factory, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Yeastar() {
  const models = [
    {
      name: 'S-Series',
      users: 'Up to 500',
      features: ['Ideal for SMBs', 'Built-in VoIP gateway', 'Expandable modules', 'Cloud management'],
      use: 'Small to medium businesses',
    },
    {
      name: 'P-Series',
      users: 'Up to 2,000',
      features: ['Enterprise-grade', 'High availability', 'Advanced routing', 'Multi-tenant support'],
      use: 'Large enterprises',
      popular: true,
    },
    {
      name: 'Cloud PBX',
      users: 'Unlimited',
      features: ['Fully cloud-hosted', 'Global deployment', 'Auto-scaling', 'Zero maintenance'],
      use: 'Multi-site organizations',
    },
  ];

  const industries = [
    {
      icon: Building,
      name: 'Hospitality',
      description: 'PMS integration, wake-up calls, room status management',
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      description: 'Paging systems, emergency broadcasts, loud environments',
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'HIPAA compliance, secure communications, patient privacy',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <span className="text-cyan-400 text-sm font-medium">Authorized Yeastar Partner</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Yeastar PBX Solutions for Somerset & Dorset
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Powerful, flexible PBX systems designed for businesses across Taunton, Yeovil, Bournemouth,
                and throughout the region. Industry-specific solutions that meet your unique requirements.
              </p>
              <Link
  to="/contact"
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 inline-flex items-center gap-2"
              >
                Get a Quote <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Yeastar?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Industry-Specific Features</div>
                    <div className="text-gray-300 text-sm">Tailored solutions for hospitality, healthcare, retail</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Easy Integration</div>
                    <div className="text-gray-300 text-sm">Works with your existing systems and hardware</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Scalable & Reliable</div>
                    <div className="text-gray-300 text-sm">Grow from 5 to 2,000+ users seamlessly</div>
                  </div>
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
              Choose the Right Model
            </h2>
            <p className="text-xl text-gray-600">
              Yeastar offers solutions for every business size and requirement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  model.popular
                    ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-xl scale-105'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                {model.popular && (
                  <div className="inline-block mb-4 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${model.popular ? 'text-white' : 'text-gray-900'}`}>
                  {model.name}
                </h3>
                <div className={`text-lg font-semibold mb-6 ${model.popular ? 'text-white' : 'text-cyan-600'}`}>
                  {model.users} users
                </div>
                <div className="space-y-3 mb-8">
                  {model.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2">
                      <CheckCircle
                        className={`flex-shrink-0 mt-0.5 ${model.popular ? 'text-white' : 'text-cyan-600'}`}
                        size={18}
                      />
                      <span className={`text-sm ${model.popular ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div className={`text-sm mb-6 ${model.popular ? 'text-white/90' : 'text-gray-600'}`}>
                  {model.use}
                </div>
                <Link
    to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    model.popular
                      ? 'bg-white text-cyan-600 hover:bg-gray-100'
                      : 'bg-cyan-500 text-white hover:bg-cyan-600'
                  }`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Yeastar PBX systems with features tailored to your industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Network className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Deploy Yeastar?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us for a consultation and find out which Yeastar solution is right for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50"
          >
            Get Your Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
