// // src/Pages/GamesCard.jsx
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const GamesCard = () => {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     fetch("/Game.json")
//       .then((res) => res.json())
//       .then((data) => setGames(data))
//       .catch((err) => console.error("Error loading games:", err));
//   }, []);

//   // 🔹 Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
//   };

//   return (
//     <div className="py-16 px-6 bg-gray-900 text-white min-h-screen">
//       {/* Heading */}
//       <motion.h2
//         className="text-4xl font-bold mb-6 text-center text-indigo-400"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         🎮 All Games
//       </motion.h2>

//       {/* Back to Home */}
//       <motion.div
//         className="text-center mb-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4 }}
//       >
//         <Link
//           to="/"
//           className="inline-block bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-medium transition"
//         >
//           ⬅ Back to Home
//         </Link>
//       </motion.div>

//       {/* Games Grid */}
//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {games.length > 0 ? (
//           games.map((game) => (
//             <motion.div
//               key={game.id}
//               className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
//               variants={cardVariants}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.5)",
//               }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <img
//                 src={game.coverPhoto || game.image}
//                 alt={game.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-5">
//                 <h3 className="text-2xl font-bold text-indigo-400">{game.title}</h3>
//                 <p className="mt-2 text-gray-300">
//                   <span className="font-semibold">Category:</span> {game.category}
//                 </p>
//                 <p className="text-gray-300 mt-1">
//                   <span className="font-semibold">Developer:</span> {game.dev}
//                 </p>
//                 <p className="text-gray-400 mt-2">{game.description}</p>
//                 <p className="text-gray-300 mt-1">
//                   <span className="font-semibold">Rating:</span> ⭐ {game.ratings}
//                 </p>
//                 <Link
//                   to={`/game/${game.id}`}
//                   className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </motion.div>
//           ))
//         ) : (
//           <motion.p
//             className="text-center text-gray-400"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             Loading games...
//           </motion.p>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default GamesCard;



// src/Pages/GamesCard.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GamesCard = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    fetch("/Game.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error loading games:", err));
  }, []);

  // Animation variants for card grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Modal background + content animation
  const modalBg = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalContent = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { y: 40, opacity: 0, scale: 0.9 },
  };

  return (
    <div className="py-16 px-6 bg-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-10 text-center text-indigo-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎮 Explore All Games
      </motion.h2>

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
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(99,102,241,0.4)",
              }}
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
                <p className="text-gray-400 mt-2 line-clamp-2">{game.description}</p>
                <p className="text-gray-300 mt-1">
                  <span className="font-semibold">Rating:</span> ⭐ {game.ratings}
                </p>

                <button
                  onClick={() => setSelectedGame(game)}
                  className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-center text-gray-400 col-span-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Loading games...
          </motion.p>
        )}
      </motion.div>

      {/* Game Detail Modal */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            variants={modalBg}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedGame(null)}
          >
            <motion.div
              className="bg-gray-800 rounded-2xl max-w-2xl w-full p-6 relative"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // prevent modal close on content click
            >
              <button
                onClick={() => setSelectedGame(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              >
                ✖
              </button>

              <img
                src={selectedGame.image || selectedGame.coverPhoto}
                alt={selectedGame.title}
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <h2 className="text-3xl font-bold text-indigo-400 mb-2">
                {selectedGame.title}
              </h2>
              <p className="text-gray-300">
                <span className="font-semibold text-white">Genre:</span>{" "}
                {selectedGame.category}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-white">Developer:</span>{" "}
                {selectedGame.dev}
              </p>
              <p className="text-gray-400 mt-3 leading-relaxed">
                {selectedGame.description}
              </p>
              <p className="text-gray-300 mt-2">
                <span className="font-semibold text-white">Rating:</span> ⭐{" "}
                {selectedGame.ratings}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GamesCard;

