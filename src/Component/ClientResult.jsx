import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Award } from "lucide-react";

const ClientResult = () => {
  // Animation variants for left and right side slide-in
  const slideVariants = {
    hiddenLeft: { opacity: 0, x: -120 },
    hiddenRight: { opacity: 0, x: 120 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-20 dark:bg-gray-900">
      <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT SIDE - Circles */}
        <motion.div
          className="relative flex justify-center items-center w-full lg:w-1/2"
          initial="hiddenLeft"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideVariants}
        >
          {/* Back Circle (Blue) */}
          <div className="w-48 h-48 bg-indigo-600 rounded-full absolute -top-2 left-32 z-0"></div>

          {/* Front Circle (Light Blue) */}
          <div className="w-48 h-48 bg-blue-200 top-4 rounded-full flex items-center justify-center text-center font-extrabold text-2xl sm:text-4xl tracking-tighter relative z-10">
            Client’s Result
          </div>
        </motion.div>

        {/* RIGHT SIDE - Text + Icons */}
        <motion.div
          className="w-full lg:w-1/2 relative space-y-6"
          initial="hiddenRight"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideVariants}
        >
          {/* Decorative Small Circles */}
          <div className="absolute -left-40 top-2 flex flex-col items-center gap-3">
            <div className="w-10 h-10 bg-blue-400 rounded-full"></div>
            <div className="w-5 h-5 bg-indigo-600 rounded-full"></div>
          </div>

          {/* Heading */}
          <h1 className="dark:text-white font-extrabold text-2xl sm:text-3xl tracking-tighter bg-black text-transparent bg-clip-text">
            Real Results <span className="text-indigo-600 dark:text-white">That Speaks</span>
          </h1>

          {/* Result List */}
          <div className="space-y-6">
            {/* Result 1 */}
            <motion.div
              className="flex flex-col items-start text-center sm:text-left"
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={slideVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-blue-100 dark:bg-white text-indigo-600 p-3 rounded-full mb-3">
                <TrendingUp size={22} />
              </div>
              <p className="text-sm sm:text-base w-[350px] text-black/60 tracking-tight leading-relaxed dark:text-white">
                +200% organic traffic in 6 months for a Dar es Salaam dental clinic.
              </p>
            </motion.div>

            {/* Result 2 */}
            <motion.div
              className="flex flex-col items-start text-center sm:text-left"
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={slideVariants}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-100 dark:bg-white text-indigo-600 p-3 rounded-full mb-3">
                <Award size={22} />
              </div>
              <p className="text-sm sm:text-base w-[350px] text-black/60 tracking-tight leading-relaxed dark:text-white">
                Ranked top 3 for 12 local keywords for a tourism company in Tanzania.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ClientResult;
