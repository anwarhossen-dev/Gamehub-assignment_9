// src/Pages/AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";
import MyContainer from "../Components/MyContainer/MyContainer";

// 🔹 Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6 flex flex-col text-center items-center">
      <MyContainer>
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold mb-6 text-indigo-400"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          About GameHub
        </motion.h1>

        {/* Paragraph 1 */}
        <motion.p
          className="text-gray-300 text-center mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Welcome to{" "}
          <span className="text-indigo-400 font-semibold ">GameHub</span> — your
          ultimate destination for discovering, exploring, and enjoying the
          world of video games. We’re passionate about connecting gamers with
          the latest titles, classic favorites, and hidden gems from developers
          around the globe.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          className="text-gray-400 text-center mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          Whether you're a casual player or a competitive pro, GameHub provides
          everything you need — from detailed game reviews and trailers to
          curated recommendations and community discussions. Our mission is to
          make gaming more accessible, social, and fun for everyone.
        </motion.p>

        {/* Paragraph 3 */}
        <motion.p
          className="text-gray-400 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          Founded by a team of passionate gamers and developers, GameHub
          continues to evolve with new features, faster updates, and a growing
          community. Thank you for being part of our journey — and happy gaming!{" "}
          🎮
        </motion.p>
      </MyContainer>
    </div>
  );
};

export default AboutUs;
