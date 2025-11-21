import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessWebsite: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/i.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      setStatus({ type: "error", message: "Please use a valid Gmail or Yahoo email." });
      setTimeout(() => setStatus(""), 5000);
      return;
    }

    setStatus({ type: "sending", message: "Sending..." });

    try {
      const res = await fetch("https://africlick-backend.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setForm({
          name: "",
          email: "",
          phone: "",
          businessWebsite: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || data.message || "Failed to send message",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error, please try again.",
      });
    }

    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div id="contact" className="bg-blue-100 dark:bg-gray-900 overflow-x-clip pb-20">
      <div className="max-w-[80%] mx-auto">
        <div className="max-w-2xl bg-blue-100 dark:bg-gray-900 rounded-lg">
          <motion.h2
            animate={{
              backgroundPositionX: "-100%",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="dark:text-white text-3xl pt-20 font-bold mb-2 bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#00008b,#71C2EF,#00008b,#D07DDF,#E1CD86,#BBCB92,#71C2EF,#00008b)] [background-size:200%] text-transparent bg-clip-text"
          >
            Send Us A Message
          </motion.h2>

          <p className="text-black mb-6 text-sm dark:text-gray-200">
            Let’s Start Your Digital Growth Journey.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex-1">
                <label className="block text-sm text-indigo-600 font-semibold mb-1 dark:text-white">
                  Name
                </label>
                <input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded outline-none dark:bg-transparent"
                  required
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm text-indigo-600 font-semibold mb-1 dark:text-white">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded outline-none dark:bg-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex-1">
                <label className="block text-sm text-indigo-600 font-semibold mb-1 dark:text-white">
                  Phone
                </label>
                <input
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border p-2 rounded outline-none dark:bg-transparent"
                  required
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm text-indigo-600 font-semibold mb-1 dark:text-white">
                  Business Website
                </label>
                <input
                  name="businessWebsite"
                  type="text"
                  placeholder="www..."
                  value={form.businessWebsite}
                  onChange={handleChange}
                  className="w-full p-2 border rounded outline-none dark:bg-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-indigo-600 font-semibold mb-1 dark:text-white">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message..."
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border rounded resize-none outline-none dark:bg-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="outline-none bg-indigo-600 hover:bg-blue-500 hover:text-black text-white text-xs sm:text-sm px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight w-full sm:w-auto"
            >
              Send Message
            </button>

            {status && (
              <p
                className={`mt-2 text-xl ${
                  status.type === "success"
                    ? "text-green-600"
                    : status.type === "error"
                    ? "text-red-600"
                    : "text-blue-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
