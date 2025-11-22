import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
 


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ['hero', 'about', 'services', 'testimonials', 'contact'];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id) => {
    // 1. Close menu immediately
    setMenuOpen(false);

    // 2. EXPLICIT FIX: Set the URL hash without triggering a jump
    window.history.pushState(null, null, `#${id}`);
    
    const section = document.getElementById(id);
    
    // 3. Scroll with a small delay for smooth effect and to ensure hash change processes
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 50); // Small, consistent delay
    }
  };
  
  // Custom button styles (for consistency and better accessibily)
  const navButtonClasses = "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500";

  

  return (
    <header 
    className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300  backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 
   dark:supports-[backdrop-filter]:bg-gray-900/60 dark:border-gray-800 ${ 
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900' }`}
     > 
    
    <div className="w-[90%] mx-auto flex items-center justify-between py-4"> 
    {/* Logo */} 
    <div className="text-2xl font-bold tracking-tight cursor-pointer text-indigo-600 dark:text-indigo-400"> AfriClick </div>

    <nav className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <button
              key={link}
              // Use the new centralized function
              onClick={() => scrollToSection(link)}
              className="relative cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 group capitalize bg-transparent border-none py-1 focus:outline-none"
            >
              {link}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>
        
        {/* Actions & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          
          <button onClick={toggleDarkMode} className={navButtonClasses}>
            <AnimatePresence mode="wait">
              <motion.div
                key={isDarkMode ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Hamburger/Close Button (using Lucide icons for consistency) */}
          <button
            className={`md:hidden ${navButtonClasses}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t dark:border-gray-800"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {links.map((link) => (
                <button
                  key={link}
                  // Use the new centralized function
                  onClick={() => scrollToSection(link)}
                  className="py-3 text-xl font-medium text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 capitalize w-full bg-transparent border-none"
                >
                  {link}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;