// src/components/Newsletter.jsx

import { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    e.target.reset();

    // Optional: remove success message after 5 sec
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <section className="py-20 px-6 text-center bg-gray-900 border-t border-gray-800">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-4 text-indigo-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Join Our Newsletter 🎮
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="mb-10 text-gray-300 text-lg max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Get exclusive updates, early access, and the latest news from indie developers.
      </motion.p>

      {/* Form / Success Message */}
      {!subscribed ? (
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="flex-1 w-full px-4 py-3 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <motion.button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </motion.form>
      ) : (
        <motion.p
          className="text-green-400 font-semibold mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ✅ Thank you for subscribing! Check your inbox for updates.
        </motion.p>
      )}
    </section>
  );
};

export default Newsletter;
