import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    setProduct(foundProduct);

    // Get related products (same category)
    if (foundProduct) {
      const related = productsData
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container-wrapper text-center">
          <p className="text-xl text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-wrapper">
        {/* Breadcrumb */}
        <div className="mb-6 text-gray-600">
          <Link to="/" className="hover:text-secondary">Home</Link>
          {' > '}
          <Link to="/products" className="hover:text-secondary">Products</Link>
          {' > '}
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="card p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <div className="flex gap-2">
              {[1, 2, 3].map(i => (
                <img
                  key={i}
                  src={product.image}
                  alt={`View ${i}`}
                  className="w-16 h-16 object-cover rounded cursor-pointer border-2 border-secondary"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="card p-6">
            <div className="mb-4">
              <span className="inline-block bg-secondary text-white px-3 py-1 rounded text-sm font-bold">
                {product.category}
              </span>
              <span className="ml-2 text-gray-600">Brand: {product.brand}</span>
            </div>

            <h1 className="text-3xl font-bold mb-2 text-gray-900">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{'⭐'.repeat(Math.floor(product.rating))}</span>
              <span className="text-gray-600">({product.rating}/5)</span>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Price */}
            <div className="mb-6">
              <p className="text-gray-600 mb-2">Price</p>
              <h2 className="text-4xl font-bold text-secondary">
                ₹{product.price.toLocaleString()}
              </h2>
            </div>

            {/* Specifications */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3 text-gray-900">Specifications</h3>
              <div className="bg-gray-100 rounded p-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700 capitalize">{key}</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <p className="text-green-600 font-bold text-lg">✓ In Stock</p>
              ) : (
                <p className="text-red-600 font-bold text-lg">✗ Out of Stock</p>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  −
                </button>
                <span className="text-xl font-bold px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              className="w-full py-3 rounded font-bold text-lg transition mb-3 btn-primary hover:bg-blue-700"
            >
              🛒 Add to Cart
            </button>

            <button className="w-full py-3 btn-secondary">
              ❤️ Wishlist
            </button>

            {/* Additional Info */}
            <div className="mt-8 border-t pt-6">
              <p className="text-sm text-gray-600 mb-2">✓ Free Delivery</p>
              <p className="text-sm text-gray-600 mb-2">✓ 1 Year Warranty</p>
              <p className="text-sm text-gray-600">✓ 30 Days Return Policy</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="section-title mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
