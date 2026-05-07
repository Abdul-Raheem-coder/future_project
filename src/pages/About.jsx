export default function About() {
  const team = [
    { id: 1, name: "Rajesh Kumar", role: "CEO & Founder", image: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Priya Singh", role: "Product Manager", image: "https://i.pravatar.cc/150?img=5" },
    { id: 3, name: "Vikram Patel", role: "Tech Lead", image: "https://i.pravatar.cc/150?img=3" },
    { id: 4, name: "Ananya Desai", role: "Marketing Head", image: "https://i.pravatar.cc/150?img=7" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-blue-700 text-white py-16">
        <div className="container-wrapper">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TechHub</h1>
          <p className="text-xl">Your trusted partner for premium electronics and appliances</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="container-wrapper py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              TechHub was founded in 2014 with a simple mission: to make premium electronics and appliances
              accessible to everyone. What started as a small online store has grown into one of the leading
              e-commerce platforms in India.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that technology should enrich lives, and we're committed to providing the latest
              gadgets and appliances with excellent customer service at competitive prices.
            </p>
            <p className="text-gray-700">
              Today, we serve over 100,000 happy customers and partner with 50+ premium brands to bring
              you the best products.
            </p>
          </div>
          <div className="card p-8 bg-gradient-to-br from-secondary to-blue-700 text-white text-center">
            <div className="text-6xl mb-4">🚀</div>
            <p className="text-lg mb-4">We started with a vision to revolutionize online shopping for tech products</p>
            <p className="text-sm opacity-90">10 Years • 100K+ Customers • 50+ Brands</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-12">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold text-secondary mb-2">10+</h3>
              <p className="text-lg">Years in Business</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-secondary mb-2">100K+</h3>
              <p className="text-lg">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-secondary mb-2">50+</h3>
              <p className="text-lg">Premium Brands</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-secondary mb-2">24/7</h3>
              <p className="text-lg">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-wrapper py-16">
        <h2 className="section-title text-center mb-12">Why Choose TechHub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card p-6">
            <div className="text-4xl mb-4">💯</div>
            <h3 className="font-bold text-xl mb-2">Genuine Products</h3>
            <p className="text-gray-700">100% authentic products with official warranty from authorized dealers</p>
          </div>
          <div className="card p-6">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
            <p className="text-gray-700">Free delivery on orders above ₹999 with express shipping options</p>
          </div>
          <div className="card p-6">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="font-bold text-xl mb-2">Easy Payment</h3>
            <p className="text-gray-700">Secure payments with multiple options including EMI facilities</p>
          </div>
          <div className="card p-6">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-bold text-xl mb-2">Buyer Protection</h3>
            <p className="text-gray-700">30-day return policy and comprehensive product warranty</p>
          </div>
          <div className="card p-6">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-bold text-xl mb-2">Expert Support</h3>
            <p className="text-gray-700">24/7 customer support from knowledgeable tech experts</p>
          </div>
          <div className="card p-6">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-bold text-xl mb-2">Customer Trusted</h3>
            <p className="text-gray-700">4.8/5 rating with thousands of positive customer reviews</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container-wrapper py-16">
        <h2 className="section-title text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map(member => (
            <div key={member.id} className="card p-6 text-center hover:shadow-xl transition">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
              <p className="text-secondary font-semibold">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">🎯 Our Mission</h3>
              <p className="text-gray-700">
                To provide an exceptional online shopping experience by offering genuine, high-quality electronics
                and appliances with outstanding customer service and competitive pricing.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">🌟 Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted and customer-centric e-commerce platform for electronics and home appliances
                in India, making technology accessible to every household.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
