// src/Pages/GamesCard.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GamesCard = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/Game.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error loading games:", err));
  }, []);

  // 🔹 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="py-16 px-6 bg-gray-900 text-white min-h-screen">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-6 text-center text-indigo-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎮 All Games
      </motion.h2>

      {/* Back to Home */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-medium transition"
        >
          ⬅ Back to Home
        </Link>
      </motion.div>

      {/* Games Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {games.length > 0 ? (
          games.map((game) => (
            <motion.div
              key={game.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={game.coverPhoto || game.image}
                alt={game.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold text-indigo-400">{game.title}</h3>
                <p className="mt-2 text-gray-300">
                  <span className="font-semibold">Category:</span> {game.category}
                </p>
                <p className="text-gray-300 mt-1">
                  <span className="font-semibold">Developer:</span> {game.dev}
                </p>
                <p className="text-gray-400 mt-2">{game.description}</p>
                <p className="text-gray-300 mt-1">
                  <span className="font-semibold">Rating:</span> ⭐ {game.ratings}
                </p>
                <Link
                  to={`/game/${game.id}`}
                  className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Loading games...
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default GamesCard;
