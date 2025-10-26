import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const ErrorPage = () => {
  return (
  
   <div>
     <Navbar/>
     <div className="text-center mt-20">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link to="/" className="btn bg-blue-600 hover:bg-blue-700">Go Home</Link>
    </div>
    <Footer/>
   </div>
  );
};

export default ErrorPage;
