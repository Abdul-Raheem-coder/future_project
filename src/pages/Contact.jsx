import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-blue-700 text-white py-16">
        <div className="container-wrapper">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We'd love to hear from you. Get in touch with us today!</p>
        </div>
      </section>

      <div className="container-wrapper py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="card p-8 text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Phone</h3>
            <p className="text-gray-700 mb-2">+91 9876 543 210</p>
            <p className="text-gray-600 text-sm">Available 24/7</p>
          </div>

          <div className="card p-8 text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Email</h3>
            <p className="text-gray-700 mb-2">support@techhub.com</p>
            <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
          </div>

          <div className="card p-8 text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Address</h3>
            <p className="text-gray-700 mb-2">TechHub HQ, Mumbai</p>
            <p className="text-gray-600 text-sm">India</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>

            {submitted && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                ✅ Thank you! We've received your message and will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:border-secondary transition"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:border-secondary transition"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:border-secondary transition"
                  placeholder="Subject of your message"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:border-secondary transition h-32 resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary hover:bg-blue-700 py-3 font-bold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map & Additional Info */}
          <div>
            {/* Map Placeholder */}
            <div className="card p-8 mb-6 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🗺️</div>
                <p className="text-gray-600">Google Maps Placeholder</p>
                <p className="text-sm text-gray-500">Map integration coming soon</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card p-8">
              <h3 className="font-bold text-xl mb-4 text-gray-900">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-bold text-gray-900">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-bold text-gray-900">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-bold text-gray-900">11:00 AM - 7:00 PM</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Follow Us</h4>
                <div className="flex gap-4 text-3xl">
                  <a href="#" className="hover:text-secondary transition">📘</a>
                  <a href="#" className="hover:text-secondary transition">𝕏</a>
                  <a href="#" className="hover:text-secondary transition">📷</a>
                  <a href="#" className="hover:text-secondary transition">▶️</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container-wrapper">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">What is your return policy?</h3>
              <p className="text-gray-700">We offer a 30-day return policy on all products. Items must be in original condition with packaging.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Do you offer warranty?</h3>
              <p className="text-gray-700">Yes, all products come with manufacturer's warranty ranging from 1-5 years depending on the item.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">How long does delivery take?</h3>
              <p className="text-gray-700">Standard delivery takes 5-7 business days. Express delivery is available in major cities.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Do you ship internationally?</h3>
              <p className="text-gray-700">Currently, we deliver only within India. International shipping coming soon!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
