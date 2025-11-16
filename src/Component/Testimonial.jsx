import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const testimonials = [
  {
    name: "John M.",
    role: "Logistics Company Owner, Tanzania",
    comment:
      "AfriClick helped our website appear on Google’s first page within 3 months. We now get daily leads!",
  },
  {
    name: "Sarah K.",
    role: "EcoClean Services",
    comment:
      "The best SEO and marketing partner for any African startup serious about growth.",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const { name, role, comment } = testimonials[index];

  return (
    <section className="w-full bg-white py-20 dark:bg-gray-900">
      <div className="max-w-[65%] mx-auto text-center relative">
      <h1 className="font-extrabold text-2xl sm:text-3xl tracking-tighter bg-black text-transparent bg-clip-text mb-10 dark:text-white">
            What Our<span className="text-indigo-600 dark:text-white"> Clients Says</span>
          </h1>

        {/* Testimonial Card */}
        <div className="bg-white p-10 rounded-2xl border transition-all duration-500 ease-in-out dark:bg-gray-900 dark:border-gray/20">
          <p className="italic text-gray-700 text-lg mb-6 dark:text-white">"{comment}”</p>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-indigo-600 dark:text-gray-100">{role}</p>
        </div>

        {/* Navigation Arrows (Optional but elegant) */}
        {/*
        <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 px-4">
          <button
            onClick={prevSlide}
            className="p-2 bg-white/70 hover:bg-blue-600 hover:text-white rounded-full shadow transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white/70 hover:bg-blue-600 hover:text-white rounded-full shadow transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        */}

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-indigo-600 w-6" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
