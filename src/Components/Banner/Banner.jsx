// src/components/BannerSlider.jsx

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GameImage from "../../assets/Game.png";
import Game1Image from "../../assets/Game1.png";
import Game2Image from "../../assets/Game2.png";

const Banner = () => {
  const slides = [
    {
      img: GameImage,
      title: "Explore Epic Adventures",
      desc: "Dive into new worlds created by passionate indie developers.",
    },
    {
      img: Game1Image,
      title: "Play Without Limits",
      desc: "Discover games across every genre — from puzzle to action.",
    },
    {
      img: Game2Image,
      title: "Support Indie Creators",
      desc: "Join the movement — every play helps independent devs grow.",
    },
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-[80vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex flex-col items-center justify-center text-center h-[80vh] bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

              {/* Animated Content */}
              <motion.div
                className="relative z-10 max-w-2xl px-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-4xl sm:text-5xl font-extrabold mb-4 text-indigo-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {slide.desc}
                </motion.p>

                <motion.button
                  className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl font-semibold text-white text-lg shadow-lg transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Games
                </motion.button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
