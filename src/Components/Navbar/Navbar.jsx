import React from 'react';
import logoImage from '../../assets/logo.png';
import MyLink from '../MyLink/MyLink';

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Games", path: "/games" },
    { name: "Contact", path: "/contact" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <div className="navbar bg-gray-900 text-white shadow-sm sticky top-0 z-50 px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links.map((link, i) => (
              <li key={i}>
                <MyLink to={link.path}>{link.name}</MyLink>
              </li>
            ))}
          </ul>
        </div>
        <img src={logoImage} alt="GameHub Logo" className="w-12" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link, i) => (
            <li key={i}>
              <MyLink to={link.path}>{link.name}</MyLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        {/* Use MyLink instead of <a> */}
        <MyLink to="/signup" className="btn bg-indigo-600 hover:bg-indigo-700 transition">
          SignUp
        </MyLink>
      </div>
    </div>
  );
};

export default Navbar;
