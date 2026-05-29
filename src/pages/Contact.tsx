import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import HaloTicketForm from '../components/HaloTicketForm';

export default function Contact() {
  return (
    <div>
      <SEO
        title="Contact UKBTS | Free Quote – Telecoms Somerset & Dorset | 0333 358 3976"
        description="Contact UKBTS for a free telecoms consultation. Serving businesses across Somerset and Dorset with VoIP, PBX, broadband and leased lines. Call 0333 358 3976."
        keywords="contact UKBTS, Somerset telecoms, Dorset communications, get quote, telecoms consultation"
        canonicalUrl="/contact"
      />
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business communications? Contact our team today for a free
              consultation and custom quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                Serving businesses throughout Somerset and Dorset with expert telecommunications solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Phone className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <a href="tel:03333583976" className="text-cyan-600 hover:text-cyan-700 text-lg">
                      0333 358 3976
                    </a>
                    <div className="text-sm text-gray-600 mt-1">Sales & General Enquiries</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Mail className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:contact@ukbts.co.uk" className="text-cyan-600 hover:text-cyan-700">
                      contact@ukbts.co.uk
                    </a>
                    <div className="text-sm text-gray-600 mt-1">We'll respond within 4 hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <MapPin className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Office Address</div>
                    <div className="text-gray-700">
                      First Floor, Swan Buildings<br />
                      20 Swan Street<br />
                      Manchester<br />
                      M4 5JW
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      Serving Somerset, Dorset & UK
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Clock className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Business Hours</div>
                    <div className="text-gray-700">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </div>
                    <div className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</div>
                    <div className="text-sm text-gray-600 mt-1">24/7 support for managed service customers</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">Main Coverage Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>• Taunton</div>
                  <div>• Bournemouth</div>
                  <div>• Yeovil</div>
                  <div>• Poole</div>
                  <div>• Bridgwater</div>
                  <div>• Weymouth</div>
                  <div>• Frome</div>
                  <div>• Dorchester</div>
                  <div>• Glastonbury</div>
                  <div>• Sherborne</div>
                  <div>• Street</div>
                  <div>• Shaftesbury</div>
                  <div>• Wells</div>
                  <div>• Blandford Forum</div>
                  <div>• Chard</div>
                  <div>• Wimborne</div>
                </div>
                <div className="text-xs text-gray-600 mt-3">And all surrounding areas in Somerset and Dorset</div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <HaloTicketForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
                <p className="text-gray-300 mb-6">
                  Our team is ready to help. Call us now for urgent support or to discuss your requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:03333583976"
                    className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold inline-flex items-center justify-center gap-2"
                  >
                    <Phone size={20} /> Call Now
                  </a>
                  <a
                    href="mailto:contact@ukbts.co.uk"
                    className="bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors font-semibold inline-flex items-center justify-center gap-2 border border-white/20"
                  >
                    <Mail size={20} /> Email Us
                  </a>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-cyan-400 font-bold text-5xl mb-2">15+</div>
                  <div className="text-gray-300 mb-4">Years Serving Somerset & Dorset</div>
                  <div className="text-cyan-400 font-bold text-5xl mb-2">500+</div>
                  <div className="text-gray-300">Happy Business Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
