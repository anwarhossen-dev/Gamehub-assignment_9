// src/Pages/GameDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import gameData from "../Game.json";

const GameDetail = () => {
  const { id } = useParams();
  const game = gameData.find((g) => g.id === parseInt(id));

  if (!game) {
    return (
      <motion.div
        className="text-center text-white mt-16 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Game not found!
        <div className="mt-4">
          <Link
            to="/"
            className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto bg-gray-900 text-white min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Game Cover */}
      <motion.img
        src={game.image || game.coverPhoto}
        alt={game.title}
        className="w-full h-96 object-cover rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mt-6 text-indigo-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {game.title}
      </motion.h2>

      {/* Info */}
      <motion.div
        className="mt-4 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p className="text-gray-300 text-lg">
          <span className="font-semibold text-white">Genre:</span> {game.category}
        </p>
        <p className="text-gray-300 text-lg">
          <span className="font-semibold text-white">Developer:</span> {game.dev}
        </p>
        <p className="text-gray-400 text-base mt-2 leading-relaxed">
          {game.description}
        </p>
        <p className="text-gray-300 text-lg">
          <span className="font-semibold text-white">Rating:</span> ⭐ {game.ratings}
        </p>
      </motion.div>

      {/* Back Button */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          to="/"
          className="inline-block bg-indigo-600 mt-4 px-5 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
        >
          ⬅ Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default GameDetail;
