import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, } from 'lucide-react';

 
const Navbar = () => {
const [isDarkMode, setIsDarkMode] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

const toggleDarkMode = () => {
setIsDarkMode(!isDarkMode);
document.documentElement.classList.toggle('dark');
   };


return (
    <header 
    className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300  backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 
   dark:supports-[backdrop-filter]:bg-gray-900/60 dark:border-gray-800 ${ 
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900' }`}> 

    <div className="w-[90%] mx-auto flex items-center justify-between py-4"> 
{/* Logo */} 
    <div className="text-2xl font-bold tracking-tight cursor-pointer text-indigo-600 dark:text-indigo-400"> AfriClick </div>

      {/* Desktop*/}
        <nav className="hidden md:flex space-x-8 font-medium">
  {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((link) => (
    <div
    key={link}
    onClick={() => {
      document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
    }}
      className="relative cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 group">
      {link}
      <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
    </div>
  ))}
</nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
</button>

          {/* Hamburger Menu*/}
          <button
    className="md:hidden text-gray-900 dark:text-gray-100 text-2xl focus:outline-none"
    onClick={() => setMenuOpen(!menuOpen)}>
    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
</button>
                    </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
           <motion.div
           initial={{ x: "100%" }}
           animate={{ x: 0 }}
           exit={{ x: "100%" }}
           transition={{ type: "tween", duration: 0.3 }}
           className="md:hidden fixed top-0 right-0 w-full h-screen bg-white dark:bg-gray-900 z-10">

   <button
        className="absolute top-6 right-12 text-xl text-white bg-blue-800 p-2 rounded-full focus:outline-none"
        onClick={() => setMenuOpen(false)}>
        <i className="fas fa-times"></i>
        </button> 

         <div className="flex flex-col py-6 max-w-[80%] mx-auto mt-20 h-full gap-6">
  {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((link) => (
    <div
    onClick={() => {
      setMenuOpen(false);  
      const section = document.getElementById(link);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }}
      className="cursor-pointer text-2xl font-medium hover:text-indigo-600 dark:hover:text-indigo-400">
       {link}
    </div>
  ))}
</div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;