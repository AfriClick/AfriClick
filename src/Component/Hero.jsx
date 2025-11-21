import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import AfriClick from "../Component/Assets/AfriClick Hero.webp";

export const Hero = () => {
  return (

 
    <section id='hero'
    className="w-full bg-blue-100 dark:bg-gray-900">
      <div className="min-h-screen flex flex-col mx-auto py-12 md:py-32 lg:py-32 overflow-hidden max-w-[90%] items-center justify-between">
        <div className="container mt-20 px-4 md:px-6 max-w-[1400px]">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center text-center lg:text-left">
            
            {/* Left Side (Text Section) */}
            <motion.div
              className="flex-1 space-y-6 text-center md:text-left lg:max-w-[600px] mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}  
            >
              <h1 className="dark:text-white font-extrabold text-2xl sm:text-3xl md:text-6xl tracking-tighter text-black bg-clip-text leading-[2.7rem] sm:leading-[2.5rem] md:leading-[4.2rem]">
                Empowering African Businesses to Grow Online
              </h1>

              <p className="dark:text-white pb-6 max-w-2xl mx-auto lg:mx-0 text-lg dark:text-muted-foreground text-[#010D3E] leading-relaxed text-center lg:text-left tracking-tight mt-6">
                AfriClick Digital helps Tanzanian and African brands dominate
                search engines, attract the right audience, and convert clicks
                into customers through expert SEO, web design, and digital PR
                strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button   
                onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: "smooth" })} 
                className="px-4 py-2 bg-indigo-600 hover:bg-blue-500 hover:border border-indigo-600 text-blue-600 text-white font-medium rounded-lg shadow-md transition-all duration-300">
                  Get Free SEO Audit
                </button>
                <button  
                 onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: "smooth" })}
                className="border border-indigo-600 text-indigo-600 hover:bg-blue-50 dark:border-indigo-600 dark:text-indigo-600 dark:hover:bg-gray-800 font-medium transition-all duration-300 px-4 py-2 rounded-lg">
                  Book A Strategy Call
                </button>
              </div>
            </motion.div>

            {/* Right Side (Image Section) */}
            <motion.div
              className="flex-1 flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={AfriClick}
                alt="African business growth"
                className="w-[380px] h-[380px] rounded-2xl object-cover"
              />
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center mt-20 space-y-2">
            <ChevronDown className="w-6 h-6 text-indigo-600 dark:text-gray-400 animate-bounce" />
            <p className="text-indigo-600 dark:text-gray-300 text-sm">
              See How We Grow Businesses
            </p>
          </div>
        </div>
      </div>
    </section>
 
  );
};

export default Hero;
