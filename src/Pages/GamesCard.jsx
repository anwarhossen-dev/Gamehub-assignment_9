import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GamesCard = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/Game.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error loading games:", err));
  }, []);

  return (
    <div className="py-16 px-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-center text-indigo-400">
        🎮 All Games
      </h2>

      <div className="text-center mb-10">
        <Link
          to="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-medium transition"
        >
          ⬅ Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {games.length > 0 ? (
          games.map((game) => (
            <div
              key={game.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
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
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">Loading games...</p>
        )}
      </div>
    </div>
  );
};

export default GamesCard;
