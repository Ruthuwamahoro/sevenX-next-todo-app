import * as React from "react";
import { useState, useEffect } from "react";
import { GoDot } from "react-icons/go";
import Image from "next/image";

const testimonials = [
  { name: "John Doe", image: "https://i.pinimg.com/564x/62/98/d3/6298d39b50429bfc626e68fad02d9b12.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ad, amet voluptas praesentium suscipit debitis voluptatibus, iure eveniet cupiditate aperiam!" },
  { name: "Jane Smith", image: "https://i.pinimg.com/564x/62/98/d3/6298d39b50429bfc626e68fad02d9b12.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ad, amet voluptas praesentium suscipit debitis voluptatibus, iure eveniet cupiditate aperiam!" },
  { name: "Alice Brown", image: "https://i.pinimg.com/564x/62/98/d3/6298d39b50429bfc626e68fad02d9b12.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ad, amet voluptas praesentium suscipit debitis voluptatibus, iure eveniet cupiditate aperiam!" },
  { name: "Bob Johnson", image: "https://i.pinimg.com/564x/62/98/d3/6298d39b50429bfc626e68fad02d9b12.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ad, amet voluptas praesentium suscipit debitis voluptatibus, iure eveniet cupiditate aperiam!" },
  { name: "Charlie Lee", image: "https://i.pinimg.com/564x/62/98/d3/6298d39b50429bfc626e68fad02d9b12.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ad, amet voluptas praesentium suscipit debitis voluptatibus, iure eveniet cupiditate aperiam!" },
  { name: "Diana White", image: "https://i.pinimg.com/564x/62/98/d3/6298d39b50429bfc626e68fad02d9b12.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ad, amet voluptas praesentium suscipit debitis voluptatibus, iure eveniet cupiditate aperiam!" }
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Adjust for continuous animation
    }, 5000); // Move to the next set every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const getVisibleTestimonials = () => {
    const start = currentSlide * 2;
    return testimonials.slice(start % testimonials.length, start % testimonials.length + 2); // Cycle back after the last testimonials
  };

  return (
    <div className="text-center space-y-10 py-10 bg-gray-50">
      <h5 className="text-3xl font-bold text-gray-800 mb-8">Testimonials</h5>

      <div className="overflow-hidden">
        <div
          className={`flex transition-transform duration-1000 ease-in-out transform`}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-1/2 flex items-center justify-center px-6"
            >
              <div className="flex items-center space-x-8">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-blue-500"
                />
                <div className="text-left">
                  <h6 className="text-lg font-bold">{testimonial.name}</h6>
                  <hr className="w-20 border-gray-300 my-2" />
                  <blockquote className="text-gray-600 italic max-w-xs leading-relaxed">
                    “{testimonial.quote}”
                  </blockquote>
                  <strong className="block text-gray-800 mt-2">- {testimonial.name}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {[0, 1, 2].map((dotIndex) => (
          <GoDot
            key={dotIndex}
            size={30}
            className={`cursor-pointer ${
              currentSlide === dotIndex ? "text-blue-500" : "text-gray-400"
            }`}
            onClick={() => setCurrentSlide(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
}
