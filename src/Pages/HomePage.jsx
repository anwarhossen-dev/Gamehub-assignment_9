// src/Pages/HomePage.jsx
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../Context/AuthProvider";

const HomePage = () => {
  const [games, setGames] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Game.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error loading games:", err));
  }, []);

  const handleViewDetails = (id) => {
    if (user) navigate(`/game/${id}`);
    else navigate("/signin");
  };

  const handleSeeAllGames = () => {
    if (user) navigate("/gamescard");
    else navigate("/signin");
  };

  // Framer motion variants for stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <section className="py-16 px-6 bg-gray-800">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-indigo-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎮 Popular Games
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {games.length > 0 ? (
            games.slice(0, 10).map((game, index) => (
              <motion.div
                key={game.id}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 rounded-2xl p-4 shadow-lg hover:shadow-indigo-500/30 transition-transform"
              >
                <motion.img
                  src={game.image || `https://picsum.photos/400/250?random=${index}`}
                  alt={game.title}
                  className="rounded-xl mb-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <h3 className="text-xl font-semibold">{game.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{game.dev}</p>
                <motion.button
                  onClick={() => handleViewDetails(game.id)}
                  className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md text-sm font-medium inline-block"
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
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

        {/* See All Games Button */}
        {games.length > 10 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={handleSeeAllGames}
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See All Games
            </motion.button>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
