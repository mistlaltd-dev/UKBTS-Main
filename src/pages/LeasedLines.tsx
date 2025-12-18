import { TrendingUp, CheckCircle, ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LeasedLines() {
  const speeds = [
    { speed: '100Mbps', monthly: '£299', setup: '£500', sla: '99.9%' },
    { speed: '1Gbps', monthly: '£599', setup: '£750', sla: '99.95%', popular: true },
    { speed: '10Gbps', monthly: 'Custom', setup: 'Custom', sla: '99.99%' },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Guaranteed Speeds',
      description: 'Symmetric upload and download speeds, dedicated to your business only.',
    },
    {
      icon: Shield,
      title: 'Ultimate Reliability',
      description: 'Industry-leading SLAs with rapid fix times and proactive monitoring.',
    },
    {
      icon: Clock,
      title: 'Low Latency',
      description: 'Perfect for VoIP, video conferencing, and cloud applications.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <span className="text-cyan-400 text-sm font-medium">Enterprise Connectivity</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Leased Lines for Somerset & Dorset Businesses
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Dedicated, uncontended internet connections with guaranteed bandwidth and industry-leading SLAs.
                Perfect for businesses across Taunton, Yeovil, Bournemouth, and throughout the region.
              </p>
              <Link
  to="/contact"
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 inline-flex items-center gap-2"
              >
                Get a Quote <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Leased Lines?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">100% Dedicated</div>
                    <div className="text-gray-300 text-sm">No sharing, no contention, guaranteed speeds 24/7</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Symmetric Speeds</div>
                    <div className="text-gray-300 text-sm">Equal upload and download - perfect for cloud services</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Premium SLA</div>
                    <div className="text-gray-300 text-sm">4-6 hour fix time with 99.9%+ uptime guarantee</div>
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
              Flexible Speed Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From 100Mbps to 10Gbps, we offer leased line solutions for every business requirement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {speeds.map((tier, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  tier.popular
                    ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-xl scale-105'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="inline-block mb-4 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`text-4xl font-bold mb-6 ${tier.popular ? 'text-white' : 'text-cyan-600'}`}>
                  {tier.speed}
                </div>
                <div className="mb-6">
                  <div className={`text-sm mb-1 ${tier.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    Monthly from
                  </div>
                  <div className={`text-3xl font-bold ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                    {tier.monthly}
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between">
                    <span className={tier.popular ? 'text-white/90' : 'text-gray-600'}>Setup:</span>
                    <span className={`font-semibold ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                      {tier.setup}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={tier.popular ? 'text-white/90' : 'text-gray-600'}>Uptime SLA:</span>
                    <span className={`font-semibold ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                      {tier.sla}
                    </span>
                  </div>
                </div>
                <Link
    to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-white text-cyan-600 hover:bg-gray-100'
                      : 'bg-cyan-500 text-white hover:bg-cyan-600'
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Cloud-First Businesses</div>
                    <div className="text-gray-600 text-sm">Reliable access to Microsoft 365, AWS, Azure</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Multi-Site Organizations</div>
                    <div className="text-gray-600 text-sm">Connect offices with private MPLS networks</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">VoIP & Video Users</div>
                    <div className="text-gray-600 text-sm">Low latency for excellent call quality</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Data-Heavy Operations</div>
                    <div className="text-gray-600 text-sm">Large file transfers, backups, replication</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Service Level Agreement
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our leased lines come with comprehensive SLAs that guarantee performance and rapid resolution.
              </p>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Target Availability</span>
                  <span className="text-cyan-400 font-bold text-xl">99.9%+</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Fix Time (Standard)</span>
                  <span className="text-cyan-400 font-bold text-xl">6 hours</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Fix Time (Premium)</span>
                  <span className="text-cyan-400 font-bold text-xl">4 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Proactive Monitoring</span>
                  <span className="text-cyan-400 font-bold text-xl">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Enterprise-Grade Connectivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a custom quote for leased line services. We'll survey your site and design the perfect solution.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50"
          >
            Request Site Survey & Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
