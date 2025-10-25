import React from 'react';

const HomePage = () => {
    return (
        <div>
             <div className="w-full min-h-screen bg-gray-900 text-white">


      {/* 🎮 Popular Games Section */}
      <section className="py-16 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Games
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Game Card Example */}
          {[
            { title: "Shadow Quest", dev: "Nightlight Studios" },
            { title: "Pixel Runner", dev: "RetroByte" },
            { title: "Galaxy Raiders", dev: "StarForge Games" },
            { title: "Mystic Woods", dev: "DreamForge" },
          ].map((game, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-2xl p-4 hover:scale-105 transition transform"
            >
              <img
                // src={`https://picsum.photos/400/250?random=${index}`}
                src={`https://picsum.photos/400/250?random=${index}`}
                alt={game.title}
                className="rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold">{game.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{game.dev}</p>
              <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md text-sm font-medium" to='/login'>
                Install
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
        </div>
    );
};

export default HomePage;