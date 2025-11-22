import React from "react";
import BackgroundImage from "../Component/Assets/FinalCTAImage.jpg"

const FinalCTA = () => {
  return (
    <section className="relative w-full text-white py-20 px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      ></div>

      <div className="absolute inset-0 bg-blue-900/70"></div>

   
      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to Grow Your Business Online?
        </h1>
        <p className="text-lg md:text-xl text-white/90">
          Book a Free Consultation Today
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button 
            onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: "smooth" })}
          className="dark:bg-indigo-600 dark:text-white px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
            Book a Free 30-Minute Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;




