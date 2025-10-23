// src/components/BannerSlider.jsx

import React from "react";
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
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10 max-w-2xl px-4">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg text-gray-200 mb-6">{slide.desc}</p>
                <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition">
                  Browse Games
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
