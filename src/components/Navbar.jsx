import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container-wrapper">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <span className="text-secondary">⚡</span>
            <span>TechHub</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-secondary transition">Home</Link>
            <Link to="/products" className="hover:text-secondary transition">Products</Link>
            <Link to="/about" className="hover:text-secondary transition">About</Link>
            <Link to="/contact" className="hover:text-secondary transition">Contact</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-secondary transition text-xl"
              title="Search"
            >
              🔍
            </button>

            {/* Cart */}
            <div className="relative">
              <button className="hover:text-secondary transition text-xl relative" title="Cart">
                🛒
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-2xl hover:text-secondary transition"
              title="Menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded text-gray-900 outline-none"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-gray-700 pt-4">
            <Link to="/" className="hover:text-secondary transition" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="hover:text-secondary transition" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link to="/about" className="hover:text-secondary transition" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="hover:text-secondary transition" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
