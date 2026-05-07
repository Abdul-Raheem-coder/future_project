import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">TechHub</h4>
            <p className="text-gray-300 text-sm">
              Your trusted partner for the latest electronics and appliances. Shop smart, live better.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-secondary transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-secondary transition">Products</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-secondary transition">Mobiles</a></li>
              <li><a href="#" className="hover:text-secondary transition">Laptops</a></li>
              <li><a href="#" className="hover:text-secondary transition">TVs</a></li>
              <li><a href="#" className="hover:text-secondary transition">Appliances</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">Connect With Us</h4>
            <div className="flex gap-3 mb-4 text-2xl">
              <a href="#" className="hover:text-secondary transition">📘</a>
              <a href="#" className="hover:text-secondary transition">𝕏</a>
              <a href="#" className="hover:text-secondary transition">📷</a>
              <a href="#" className="hover:text-secondary transition">▶️</a>
            </div>
            <p className="text-sm text-gray-300">
              <strong>Email:</strong> support@techhub.com<br />
              <strong>Phone:</strong> +91 9876 543 210
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 TechHub. All rights reserved. | <a href="#" className="hover:text-secondary">Privacy Policy</a> | <a href="#" className="hover:text-secondary">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
}
