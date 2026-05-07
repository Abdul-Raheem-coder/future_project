import { useState, useEffect } from 'react';
import HeroSlider from '../components/HeroSlider';
import CategoryCards from '../components/CategoryCards';
import PromotionalBanner from '../components/PromotionalBanner';
import ProductCard from '../components/ProductCard';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsletterSignup from '../components/NewsletterSignup';
import { productsData } from '../data/products';

export default function Home() {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    // Simulate fetching best sellers
    setBestSellers(productsData.filter(p => p.rating >= 4.5).slice(0, 6));
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="container-wrapper py-8">
        <HeroSlider />
      </section>

      {/* Category Section */}
      <section className="container-wrapper py-12">
        <h2 className="section-title text-center mb-8">Shop by Category</h2>
        <CategoryCards />
      </section>

      {/* Promotional Banner */}
      <section className="container-wrapper">
        <PromotionalBanner />
      </section>

      {/* Featured Products */}
      <section className="container-wrapper py-12">
        <h2 className="section-title text-center mb-8">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-wrapper">
        <TestimonialsSection />
      </section>

      {/* Newsletter */}
      <section className="container-wrapper">
        <NewsletterSignup />
      </section>

      {/* About Preview */}
      <section className="bg-primary text-white py-12 mb-0">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-secondary mb-2">50+</h3>
              <p>Premium Brands</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-secondary mb-2">100K+</h3>
              <p>Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-secondary mb-2">24/7</h3>
              <p>Customer Support</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-secondary mb-2">10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
