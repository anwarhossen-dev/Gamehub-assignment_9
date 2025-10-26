import React from 'react';

const Footer = () => {
    return (
        <div>
           <footer className="bg-gray-900 text-gray-300 py-10 mt-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1 — Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">GameHub</h2>
          <p className="text-sm leading-relaxed">
            GameHub is your ultimate gaming destination — discover, explore, 
            and play the latest and greatest games from around the world.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about-us" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3 — Newsletter / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg w-full sm:w-auto flex-grow bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white font-medium"
            >
              Subscribe
            </button>
          </form>

          <div className="flex gap-5 mt-5">
            <a href="#" className="hover:text-white text-xl"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-white text-xl"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white text-xl"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} GameHub. All rights reserved.
      </div>
    </footer>
        </div>
    );
};

export default Footer;


// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center border-t border-gray-700">
//       <p>&copy; {new Date().getFullYear()} GameHub. All rights reserved.</p>
//       <p className="mt-2">
//         <a href="/about-us" className="hover:text-indigo-400 mr-4">About</a>
//         <a href="/contact" className="hover:text-indigo-400">Contact</a>
//       </p>
//     </footer>
//   );
// };

// export default Footer;