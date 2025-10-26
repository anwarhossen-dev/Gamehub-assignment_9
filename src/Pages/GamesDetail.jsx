



// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import gameData from "../Game.json";

// const GameDetail = () => {
//   const { id } = useParams();
//   const game = gameData.find((g) => g.id === parseInt(id));

//   if (!game) {
//     return (
//       <div className="text-center text-white mt-16 text-xl">
//         ❌ Game not found!
//         <div className="mt-4">
//           <Link
//             to="/"
//             className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
//           >
//             Back to Home
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-gray-900 text-white min-h-screen">
//       <img
//         src={game.image || game.coverPhoto}
//         alt={game.title}
//         className="w-full h-96 object-cover rounded-xl shadow-lg"
//       />
//       <h2 className="text-4xl font-bold mt-6 text-indigo-400">{game.title}</h2>
//       <p className="text-gray-300 mt-3 text-lg">
//         <span className="font-semibold text-white">Genre:</span> {game.category}
//       </p>
//       <p className="text-gray-400 mt-2 text-base">{game.description}</p>
//       <Link
//         to="/"
//         className="inline-block bg-indigo-600 mt-6 px-5 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
//       >
//         Back to Home
//       </Link>
//     </div>
//   );
// };

// export default GameDetail;

import React from "react";
import { useParams, Link } from "react-router-dom";
import gameData from "../Game.json";

const GameDetail = () => {
  const { id } = useParams();
  const game = gameData.find(g => g.id === parseInt(id));

  if (!game) {
    return (
      <div className="text-center text-white mt-16 text-xl">
        ❌ Game not found!
        <div className="mt-4">
          <Link
            to="/"
            className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-900 text-white min-h-screen">
      <img
        src={game.image || game.coverPhoto}
        alt={game.title}
        className="w-full h-96 object-cover rounded-xl shadow-lg"
      />
      <h2 className="text-4xl font-bold mt-6 text-indigo-400">{game.title}</h2>
      <p className="text-gray-300 mt-3 text-lg">
        <span className="font-semibold text-white">Genre:</span> {game.category}
      </p>
      <p className="text-gray-300 mt-1 text-lg">
        <span className="font-semibold text-white">Developer:</span> {game.dev}
      </p>
      <p className="text-gray-400 mt-2 text-base">{game.description}</p>
      <p className="text-gray-300 mt-2 text-lg">
        <span className="font-semibold text-white">Rating:</span> ⭐ {game.ratings}
      </p>

      <Link
        to="/"
        className="inline-block bg-indigo-600 mt-6 px-5 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default GameDetail;
