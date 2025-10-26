// src/Pages/AboutUs.jsx
import React from "react";
import MyContainer from "../Components/MyContainer/MyContainer";

const AboutUs = () => {
  return (
   <div className="min-h-screen bg-gray-900 text-white py-16 px-6 flex flex-col items-center">
      <MyContainer>
        <h1 className="text-4xl font-bold mb-6 text-indigo-400">About GameHub</h1>
        
        <p className="text-gray-300 text-center mb-8">
          Welcome to <span className="text-indigo-400 font-semibold">GameHub</span> — 
          your ultimate destination for discovering, exploring, and enjoying the world of video games.  
          We’re passionate about connecting gamers with the latest titles, classic favorites, and 
          hidden gems from developers around the globe.
        </p>

        <p className="text-gray-400 text-center mb-8">
          Whether you're a casual player or a competitive pro, 
          GameHub provides everything you need — from detailed game reviews and trailers 
          to curated recommendations and community discussions.  
          Our mission is to make gaming more accessible, social, and fun for everyone.
        </p>

        <p className="text-gray-400 text-center">
          Founded by a team of passionate gamers and developers,  
          GameHub continues to evolve with new features, faster updates, 
          and a growing community.  
          Thank you for being part of our journey — and happy gaming! 🎮
        </p>
      </MyContainer>
    </div>
  );
};

export default AboutUs;


// import React, { useEffect } from "react";
// import MyContainer from "../components/MyContainer";

// const AboutUs = () => {
//   useEffect(() => {
//     document.title = "GameHub - About Us";
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white py-16 px-6 flex flex-col items-center">
//       <MyContainer>
//         <h1 className="text-4xl font-bold mb-6 text-indigo-400">About GameHub</h1>
        
//         <p className="text-gray-300 text-center mb-8">
//           Welcome to <span className="text-indigo-400 font-semibold">GameHub</span> — 
//           your ultimate destination for discovering, exploring, and enjoying the world of video games.  
//           We’re passionate about connecting gamers with the latest titles, classic favorites, and 
//           hidden gems from developers around the globe.
//         </p>

//         <p className="text-gray-400 text-center mb-8">
//           Whether you're a casual player or a competitive pro, 
//           GameHub provides everything you need — from detailed game reviews and trailers 
//           to curated recommendations and community discussions.  
//           Our mission is to make gaming more accessible, social, and fun for everyone.
//         </p>

//         <p className="text-gray-400 text-center">
//           Founded by a team of passionate gamers and developers,  
//           GameHub continues to evolve with new features, faster updates, 
//           and a growing community.  
//           Thank you for being part of our journey — and happy gaming! 🎮
//         </p>
//       </MyContainer>
//     </div>
//   );
// };

// export default AboutUs;