import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const starRating = (rating) => {
    return '⭐'.repeat(Math.floor(rating)) + (rating % 1 ? '✨' : '');
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="card overflow-hidden cursor-pointer group">
        <div className="relative overflow-hidden bg-gray-100 h-48">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
          <span className="absolute top-2 right-2 bg-accent text-white px-2 py-1 rounded text-sm font-bold">
            {product.category}
          </span>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2">
            {product.name}
          </h3>

          <p className="text-gray-600 text-sm mb-2">
            {product.brand}
          </p>

          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-secondary">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-sm text-yellow-500">
              {starRating(product.rating)}
            </span>
          </div>

          <button
            className="w-full py-2 rounded font-bold transition bg-secondary text-white hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
