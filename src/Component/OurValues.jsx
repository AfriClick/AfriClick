import React from "react";
import { motion } from "framer-motion";
import { Eye, Lightbulb, Target, TrendingUp } from "lucide-react";

const OurValues = () => {
  const values = [
    {
      icon: <Eye className="w-6 h-6 text-white" />,
      title: "Transparency",
      desc: "Clients always know what’s being done and why. Every strategy and step is shared clearly, ensuring complete trust and collaboration.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Innovation",
      desc: "We use modern tools and emerging trends to stay ahead — delivering creative, up-to-date solutions that truly stand out.",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Results",
      desc: "We focus on real impact and measurable outcomes, not vanity numbers. Every campaign is optimized to achieve tangible success.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Growth",
      desc: "Our goal is to help African businesses compete globally by scaling visibility, engagement, and digital performance.",
    },
  ];

  const iconVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-full bg-blue-100 py-20 px-6 overflow-hidden dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-extrabold dark:text-white text-2xl sm:text-3xl tracking-tighter bg-black text-transparent bg-clip-text mb-16">
          Our <span className="text-indigo-600 dark:text-white">Values</span>
        </h1>

        {/* Process-style Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative">
          {values.map((value, index) => (
            <React.Fragment key={index}>
              {/* Each Step */}
              <motion.div
                className="flex flex-col items-center text-center w-full sm:w-[240px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={iconVariants}
                custom={index}
              >
                {/* Icon with number */}
                <div className="relative flex items-center justify-center mb-6">
                  <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div className="absolute -right-2 -top-2 bg-blue-900 text-white text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full">
                    0{index + 1}
                  </div>

                   {/* Horizontal line between icons (desktop only) */}
                   {index < values.length - 1 && (
                    <div className="hidden lg:block absolute right-[-210px] top-1/2 transform -translate-y-1/2 w-[180px] h-[2px] bg-indigo-600 z-0"></div>
                  )}
                </div>

                  

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 dark:text-white">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-black/60 tracking-tight max-w-[220px] dark:text-gray-200">
                  {value.desc}
                </p>
              </motion.div>

              {/* Connecting line between icons (only on large screens) */}
              {index < values.length - 1 && (
                <div className="hidden lg:block flex-1 h-[2px] bg-gray-300 -mt-16"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
