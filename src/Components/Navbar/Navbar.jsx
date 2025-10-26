import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import logoImage from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthProvider";
import { UserContext } from "../../Context/UserContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { userProfile, resetProfile } = useContext(UserContext);

  const [photoURL, setPhotoURL] = useState(userProfile.photo || user?.photoURL || "");
  const [displayName, setDisplayName] = useState(userProfile.name || user?.displayName || "");

  useEffect(() => {
    setPhotoURL(userProfile.photo || user?.photoURL || "");
    setDisplayName(userProfile.name || user?.displayName || "");
  }, [userProfile, user]);

  const handleSignOut = async () => {
    try {
      await logout();
      resetProfile();
      toast.success("Signed out successfully ✅");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Games", path: "/gamescard" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <div className="navbar bg-gray-900 text-white sticky top-0 z-50 px-6 shadow">
      <div className="navbar-start"><img src={logoImage} alt="Logo" className="w-12" /></div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink to={user || link.name === "Home" || link.name === "About" ? link.path : "/signin"} className={({ isActive }) =>
                isActive
                  ? "text-indigo-400 font-bold px-3 py-2 rounded"
                  : "text-white px-3 py-2 rounded hover:text-indigo-400 transition"
              }>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3">
            <img src={photoURL || "https://via.placeholder.com/40"} alt="User" className="w-10 h-10 rounded-full border border-gray-500" />
            <span className="text-white font-medium">{displayName || user.displayName}</span>
            <button onClick={handleSignOut} className="btn bg-red-600 hover:bg-red-700 transition">Sign Out</button>
          </div>
        ) : (
          <>
            <NavLink to="/signin" className="btn bg-blue-600 hover:bg-blue-700 mr-2">Sign In</NavLink>
            <NavLink to="/signup" className="btn bg-indigo-600 hover:bg-indigo-700">Sign Up</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
