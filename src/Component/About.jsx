import React from "react";
import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import about1 from "../Component/Assets/AboutAfriclick (2).webp";
import about2 from "../Component/Assets/AboutAfriclick.webp";

const About = () => {
  return (
    <div id='About'  
    className="dark:bg-gray-900" >
      <motion.section
        className="w-[90%] mx-auto py-6 flex flex-col md:flex-row items-center gap-14 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors duration-500 mb-20"
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}  
      >
        {/* Left Side (Images) */}
       {/* Left Side (Images) */}
<div className="relative flex-1 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
  <img
    src={about1}
    alt="Team working"
    className="w-56 h-56 md:w-60 md:h-60 object-cover rounded-xl"
  />
  <img
    src={about2}
    alt="African entrepreneurs"
    className="w-56 h-56 md:w-60 md:h-60 object-cover rounded-xl shadow-lg md:absolute md:top-20 md:left-40 dark:border-gray-900"
  />
</div>


        {/* Right Side */}
        <div className="flex-1 space-y-8">
          <h2 className="text-xs sm:text-sm inline-flex border border-[#222]/30 dark:border-gray-200 px-2 sm:px-3 py-1 rounded-lg tracking-tight">
            # About Us
          </h2>

          <div>
            <h1 className="font-extrabold text-2xl sm:text-3xl tracking-tighter bg-black text-transparent bg-clip-text mt-4 dark:text-white">
              Who We Are –{" "}
              <span className="text-indigo-600 dark:text-white">
                The Digital Growth Partner for Africa’s Entrepreneurs
              </span>
            </h1>

            <p className="text-sm sm:text-base text-black/60 tracking-tight mt-4 sm:mt-6 dark:text-white">
              AfriClick Digital was founded to close the digital visibility gap
              for African businesses. We help local entrepreneurs, startups, and
              brands build an online presence that attracts, converts, and grows
              consistently.
            </p>
          </div>

          {/*mission and vision*/}
          <div
            className=" flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center md:justify-start mt-6 sm:mt-[30px]
              [@media(min-width:768px)and(max-width:1024px)]:flex-wrap
              [@media(min-width:768px)and(max-width:1024px)]:gap-4"
          >
            <div className="text-start">
              <h2 className="text-indigo-600 text-xl sm:text-2xl font-extrabold  ">
                Our Mission
              </h2>
              <p className="text-xs sm:text-sm text-black/80 dark:text-white">
                To empower 10,000 African businesses to grow and rank online by
                2030.
              </p>
            </div>

            <hr className="hidden sm:block w-px h-16 bg-gray-400 border-0 [@media(min-width:768px)and(max-width:1024px)]:hidden" />

            <div className="text-start">
              <h2 className="text-indigo-600 text-xl sm:text-2xl font-extrabold  ">
                Our Vision
              </h2>
              <p className="text-xs sm:text-sm text-black/80 dark:text-white">
                To be Africa’s most trusted digital marketing and SEO
                consultancy.
              </p>
            </div>
          </div>

          {/* Founder’s Note */}
          
        <div className="mt-10 space-y-4">
          <h3 className=" dark:text-white  text-xl sm:text-2xl font-extrabold">Founder's Note</h3>
          <p className="dark:text-white text-sm sm:text-base text-black/60 tracking-tight mt-4 sm:mt-6">
            AfriClick Digital was born out of a passion to help African entrepreneurs harness
            the power of search engines and technology. We’ve seen how visibility changes
            everything — and we’re here to make that happen for you.
          </p>

          <div className="mt-6">
            <p className=" dark:text-white font-medium font-pacifico text-base sm:text-lg">
              AfriClick
            </p>
            
            <p className="dark:text-white font-medium font-pacifico text-base sm:text-lg">
              Founder & SEO Consultant
            </p>
          </div>
        </div> 

          {/* Location */}
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-6">
            Location: Based in Dar es Salaam, Tanzania — with remote experts
            across Africa.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
