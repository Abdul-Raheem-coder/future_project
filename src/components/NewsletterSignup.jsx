import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-gradient-to-r from-secondary to-blue-700 text-white py-12 px-4 rounded-lg my-12">
      <div className="container-wrapper max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">📧 Stay Updated</h2>
        <p className="mb-6 text-lg">Subscribe to our newsletter for exclusive deals and updates</p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded text-gray-900 outline-none"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-accent hover:bg-orange-500 rounded font-bold transition"
          >
            Subscribe
          </button>
        </form>

        {subscribed && (
          <p className="mt-4 text-green-200">✅ Successfully subscribed! Check your email.</p>
        )}
      </div>
    </section>
  );
}
