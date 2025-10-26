

import React, { useState } from "react";
import MyLink from "../Components/MyLink/MyLink";
import { auth } from "../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FaEye, FaGoogle } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    // Password validation: at least 6 chars, uppercase, lowercase, number, special
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    if (!regExp.test(password)) {
      toast.error(
        "Invalid password! Must be 6+ chars, include uppercase, lowercase, number & special symbol."
      );
      return;
    }

    // Create user with Firebase Auth
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;

        // Update profile with name and photo
        updateProfile(user, { displayName, photoURL })
          .then(() => {
            // Send email verification
            sendEmailVerification(user)
              .then(() => {
                toast.success(
                  " Sign Up Successful! Check your email to verify your account."
                );
              })
              .catch((err) => {
                console.error(err);
                toast.error(err.message);
              });
          })
          .catch((err) => {
            console.error(err);
            toast.error("Profile update failed!");
          });
      })
      .catch((err) => {
        console.error(err);
        if (err.code === "auth/email-already-in-use") {
          toast.error("⚠️ This email is already registered!");
        } else if (err.code === "auth/weak-password") {
          toast.error("Password must be at least 6 characters!");
        } else {
          toast.error(err.message);
        }
      });
  };

  // Google SignUp handler
  const handleGoogleSignUp = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        toast.success(" Google Sign-In Successful!");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h2>

        {/* SignUp Form */}
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Enter your full name"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="photo"
            type="text"
            placeholder="Enter your photo URL"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="relative">
            <input
              name="password"
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-3 top-3.5 cursor-pointer text-gray-300"
            >
              {show ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 flex items-center">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-2 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
        >
          <FaGoogle className="text-lg" /> Continue with Google
        </button>

        <p className="text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <MyLink to="/signin" className="text-blue-400 hover:underline font-medium">
            Sign In here
          </MyLink>
        </p>

        <ToastContainer />
      </div>
    </section>
  );
};

export default SignUp;

