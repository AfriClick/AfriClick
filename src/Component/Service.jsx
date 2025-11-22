import React, { useRef } from "react";
import {
  Search,
  MapPin,
  PenTool,
  Link as LinkIcon,
  Monitor,
  Palette,
  Megaphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO Consulting & Audit",
    desc: "We analyze your website, fix technical issues, and build a keyword-driven strategy that helps you rank higher on Google.",
    deliverables:
      "Technical SEO audit, Keyword research, Competitor analysis, 90-day action plan.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Local SEO & Google Business Optimization",
    desc: "We optimize your local SEO and Google Business Profile to help nearby customers easily find and trust your services.",
    deliverables:
      "Google Business Profile setup, Local keyword targeting, Citation building, Review management.",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Content Marketing & Blogging",
    desc: "We attract and retain your ideal customers with valuable, search-optimized blog content that drives traffic and engagement.",
    deliverables: "Blog strategy, SEO copywriting, Article publishing.",
  },
  {
    icon: <LinkIcon className="w-6 h-6" />,
    title: "Link Building & Digital PR",
    desc: "We strengthen your domain authority through high-quality backlinks, guest posts, and digital PR that boost your online reputation.",
    deliverables: "Guest posting, Press releases, Directory submissions.",
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Web Design & Hosting",
    desc: "We design fast, responsive websites that showcase your brand, perform flawlessly, and deliver a seamless browsing experience.",
    deliverables:
      "WordPress development, Fast .tz hosting, Analytics tracking.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Branding & Social Media",
    desc: "We craft a consistent brand identity and engaging social content that connects with your audience and builds recognition.",
    deliverables: "Logo & identity, Social content plan, Management.",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Paid Marketing (Google/Facebook Ads)",
    desc: "We amplify your reach through strategic ad campaigns that target the right audience and deliver measurable conversions.",
    deliverables:
      "Google Ads setup, Facebook/Instagram campaigns, ROI tracking.",
  },
];

const Service = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
 
    <section id='Services' 
    className="w-full bg-blue-50 py-20 mb-10 dark:bg-gray-900 relative overflow-x-hidden">
    <div className="max-w-[90%] mx-auto relative">
 
  <h2 className="text-xs sm:text-sm inline-flex border border-[#222]/30 px-3 py-1 rounded-lg tracking-tight mb-12 dark:text-white dark:border-white">
    # Our Services
  </h2>

  <div className="relative">
    {/* Left side button */}
    <button
      onClick={() => scroll("left")}
      className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-white/80 rounded-full p-2 hover:scale-110 transition"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4 overflow-hidden">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="snap-start shrink-0 flex-[0_0_100%] md:flex-[0_0_48%] lg:flex-[0_0_calc(100%/3-1rem)] 
          bg-white dark:bg-gray-900 dark:border-gray/20 rounded-2xl p-8 border border-blue-100 
          hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-white text-indigo-600">
                {service.icon}
              </div>
              <div className="h-[1.5px] w-48 bg-blue-200"></div>
            </div>
            <span className="text-indigo-600 dark:text-white text-sm font-semibold">
              0{index + 1}
            </span>
          </div>

          <h4 className="text-lg font-semibold text-gray-900 mb-3 dark:text-white">
            {service.title}
          </h4>
          <p className="text-sm sm:text-base text-black/60 tracking-tight mt-4 sm:mt-6 dark:text-gray-200">
            {service.desc}
          </p>
          <p className="text-sm sm:text-base tracking-tight mt-4 sm:mt-6 text-indigo-600 font-medium dark:text-gray-200">
            {service.deliverables}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Right side button */}
    <button
      onClick={() => scroll("right")}
      className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-white/80 rounded-full shadow-md p-2 hover:scale-110 transition"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  </div>
</div>

    </section>
     
  );
};

export default Service;
