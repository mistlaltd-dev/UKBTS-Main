import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Please select...</option>
                      <option value="sip-trunks">SIP Trunks</option>
                      <option value="broadband">Business Broadband</option>
                      <option value="3cx">3CX PBX</option>
                      <option value="yeastar">Yeastar PBX</option>
                      <option value="leased-lines">Leased Lines</option>
                      <option value="management">Management Services</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      Thank you for your enquiry! We will be in touch shortly.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      Sorry, there was an error sending your message. Please try again or call us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-colors font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
                  </button>

                  <p className="text-xs text-gray-600">
                    By submitting this form, you agree to our privacy policy. We will only use your
                    information to respond to your enquiry.
                  </p>
                </form>
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
