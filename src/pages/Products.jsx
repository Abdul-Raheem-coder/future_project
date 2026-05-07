import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { productsData, categories } from '../data/products';

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    let products = productsData;

    // Filter by category
    if (selectedCategory !== 'All') {
      products = products.filter(p => p.category === selectedCategory);
    }

    // Filter by price range
    products = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    if (sortBy === 'priceLow') {
      products = [...products].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHigh') {
      products = [...products].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      products = [...products].sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(products);
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-wrapper">
        {/* Header */}
        <h1 className="section-title mb-8">Our Products</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value="All"
                      checked={selectedCategory === 'All'}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="cursor-pointer"
                    />
                    <span className="text-gray-700">All</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat.name}
                        checked={selectedCategory === cat.name}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="cursor-pointer"
                      />
                      <span className="text-gray-700">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="my-4" />

              {/* Price Filter */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[1] === 50000}
                      onChange={() => setPriceRange([0, 50000])}
                      className="cursor-pointer"
                    />
                    <span className="text-gray-700">Under ₹50,000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 50000 && priceRange[1] === 100000}
                      onChange={() => setPriceRange([50000, 100000])}
                      className="cursor-pointer"
                    />
                    <span className="text-gray-700">₹50K - ₹1L</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 100000 && priceRange[1] === 200000}
                      onChange={() => setPriceRange([100000, 200000])}
                      className="cursor-pointer"
                    />
                    <span className="text-gray-700">₹1L - ₹2L+</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[1] === 200000}
                      onChange={() => setPriceRange([0, 200000])}
                      className="cursor-pointer"
                    />
                    <span className="text-gray-700">All Prices</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort Bar */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing <strong>{filteredProducts.length}</strong> products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded outline-none bg-white"
              >
                <option value="popular">Most Popular</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
