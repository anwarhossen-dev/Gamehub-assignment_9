// import React, { useEffect, useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import AuthContext from "../Context/AuthContext";
// // import { AuthContext } from "../Context/AuthProvider";

// const HomePage = () => {
//   const [games, setGames] = useState([]);
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("/Game.json")
//       .then((res) => res.json())
//       .then((data) => setGames(data))
//       .catch((err) => console.error("Error loading games:", err));
//   }, []);

//   const handleViewDetails = (id) => {
//     if (user) {
//       navigate(`/game/${id}`);
//     } else {
//       navigate("/signin");
//     }
//   };

//   const handleSeeAllGames = () => {
//     if (user) {
//       navigate("/gamescard");
//     } else {
//       navigate("/signin");
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-gray-900 text-white">
//       <section className="py-16 px-6 bg-gray-800">
//         <h2 className="text-3xl font-bold text-center mb-10 text-indigo-400">
//           Popular Games
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//           {games.length > 0 ? (
//             games.slice(0, 10).map((game, index) => (
//               <div
//                 key={game.id}
//                 className="bg-gray-700 rounded-2xl p-4 hover:scale-105 transition transform"
//               >
//                 <img
//                   src={game.image || `https://picsum.photos/400/250?random=${index}`}
//                   alt={game.title}
//                   className="rounded-xl mb-4"
//                 />
//                 <h3 className="text-xl font-semibold">{game.title}</h3>
//                 <p className="text-sm text-gray-300 mb-3">{game.dev}</p>
//                 <button
//                   onClick={() => handleViewDetails(game.id)}
//                   className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md text-sm font-medium inline-block"
//                 >
//                   View Details
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-400">Loading games...</p>
//           )}
//         </div>

//         {/* See All Games Button */}
//         {games.length > 10 && (
//           <div className="text-center mt-12">
//             <button
//               onClick={handleSeeAllGames}
//               className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition"
//             >
//               See All Games
//             </button>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default HomePage;


// src/Pages/HomePage.jsx
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
    if (user) {
      navigate(`/game/${id}`);
    } else {
      navigate("/signin");
    }
  };

  const handleSeeAllGames = () => {
    if (user) {
      navigate("/gamescard");
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <section className="py-16 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-400">
          Popular Games
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {games.length > 0 ? (
            games.slice(0, 10).map((game, index) => (
              <div key={game.id} className="bg-gray-700 rounded-2xl p-4 hover:scale-105 transition transform">
                <img
                  src={game.image || `https://picsum.photos/400/250?random=${index}`}
                  alt={game.title}
                  className="rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold">{game.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{game.dev}</p>
                <button
                  onClick={() => handleViewDetails(game.id)}
                  className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md text-sm font-medium inline-block"
                >
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">Loading games...</p>
          )}
        </div>

        {games.length > 10 && (
          <div className="text-center mt-12">
            <button
              onClick={handleSeeAllGames}
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              See All Games
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
