import { useState } from 'react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Latest Gaming Consoles",
      description: "Experience next-gen gaming with PS5 and Xbox Series X",
      color: "from-blue-600 to-purple-600",
      emoji: "🎮"
    },
    {
      title: "4K Smart TVs",
      description: "Transform your living room with crystal clear display",
      color: "from-purple-600 to-pink-600",
      emoji: "📺"
    },
    {
      title: "Premium Laptops",
      description: "Powerful computing for work and play",
      color: "from-green-600 to-blue-600",
      emoji: "💻"
    },
    {
      title: "Smart Appliances",
      description: "Make your home smarter with IoT devices",
      color: "from-orange-600 to-red-600",
      emoji: "🏠"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-96 md:h-96 rounded-xl overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-r ${slide.color} flex items-center justify-center text-white`}>
            <div className="text-center">
              <div className="text-6xl md:text-8xl mb-4">{slide.emoji}</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg md:text-xl mb-6">{slide.description}</p>
              <button className="btn-primary">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 w-10 h-10 rounded-full flex items-center justify-center text-xl transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 w-10 h-10 rounded-full flex items-center justify-center text-xl transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
