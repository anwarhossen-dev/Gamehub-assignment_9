


import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ use NavLink
import logoImage from '../../assets/logo.png';
import { auth } from '../../firebase/firebase.config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => toast.success('Signed out successfully'))
      .catch((err) => toast.error(err.message));
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Games", path: "/gamescard" },
    // { name: "Contact", path: "/contact" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <div className="navbar bg-gray-900 text-white shadow-sm sticky top-0 z-50 px-6">
      <div className="navbar-start">
        <img src={logoImage} alt="GameHub Logo" className="w-12" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-400 font-bold px-3 py-2 rounded"
                    : "text-white px-3 py-2 rounded hover:text-indigo-400 transition"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL || 'https://via.placeholder.com/40'}
              alt="User"
              className="w-10 h-10 rounded-full border border-gray-500"
            />
            <button
              onClick={handleSignOut}
              className="btn bg-red-600 hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <NavLink
              to="/signin"
              className="btn bg-blue-600 hover:bg-blue-700 transition mr-2"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="btn bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
