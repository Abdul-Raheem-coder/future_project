import { testimonials } from '../data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-12">
      <h2 className="section-title text-center mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="card p-6">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-yellow-500">{'⭐'.repeat(testimonial.rating)}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
