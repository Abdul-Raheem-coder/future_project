import { categories } from '../data/products';

export default function CategoryCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="card p-6 text-center cursor-pointer hover:scale-105 transition"
        >
          <div className="text-5xl mb-3 text-center">{cat.icon}</div>
          <h3 className="font-bold text-gray-900">{cat.name}</h3>
        </div>
      ))}
    </div>
  );
}
