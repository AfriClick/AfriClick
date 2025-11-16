import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faSearch, faChartBar } from '@fortawesome/free-solid-svg-icons';


const OurPromise = () => {
  const items = [
    { text: "Transparent Reporting", icon: faSearch },
    { text: "Measurable ROI", icon: faChartLine },
    { text: "Data-Driven Growth", icon: faChartBar },
  ];

  return (
    <div className="py-4 mb-20 bg-indigo-600 text-white text-xl font-extrabold overflow-hidden">
      <div className="flex gap-12 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-12 flex-none pr-14"
          animate={{ translateX: "-50%" }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {[...items, ...items].map((item, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center gap-2 flex-none"
            >
              <FontAwesomeIcon icon={item.icon} className="text-2xl" />
              <p>{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurPromise;
