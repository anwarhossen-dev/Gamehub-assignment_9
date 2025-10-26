


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyLink from '../Components/MyLink/MyLink';
import { IoEyeOff } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail, 
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast, ToastContainer } from 'react-toastify';

const provider = new GoogleAuthProvider();

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  // 🔹 Normal Sign In
  const handleSignIn = (event) => {
    event.preventDefault();


    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if(!res.emailVerified){
            toast.error("Your email is not verified.");
            return;

        }
        setUser(res.user);
        toast.success('Signin Successful');
        setTimeout(() => navigate('/'), 1000);
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message);
      });
  };

  // 🔹 Google Sign In
  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        toast.success('Google Sign-in Successful');
        setTimeout(() => navigate('/'), 1000);
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message);
      });
  };

  // 🔹 Sign Out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success('Signed out successfully');
      })
      .catch((err) => toast.error(err.message));
  };

  // 🔹 Forgot Password
  const handleForgotPassword = () => {
    if (!email) {
      toast.error('⚠️ Please enter your email first.');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('📧 Password reset link sent! Check your email.');
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Sign In</h2>

          {user ? (
            <div className="text-center space-y-3">
              <img
                src={user?.photoURL || 'https://via.placeholder.com/80'}
                className="h-20 w-20 rounded-full mx-auto"
                alt="User"
              />
              <h2 className="text-xl font-semibold text-white">{user?.displayName || 'No Name'}</h2>
              <h2 className="text-white/80">{user?.email}</h2>
              <button
                onClick={handleSignOut}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <form onSubmit={handleSignIn} className="space-y-4">
              {/* Email Field */}
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

              {/* Password Field */}
              <div className="relative">
                <input
                  name="password"
                  type={show ? 'text' : 'password'}
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

              {/* 🔹 Forgot Password Link */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-blue-400 hover:underline text-sm"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Sign In
              </button>
            </form>
          )}

          <div className="my-4 flex items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-2 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleSignin}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 hover:bg-gray-100 py-3 rounded-lg font-semibold transition"
          >
            <FcGoogle size={24} /> Continue with Google
          </button>

          <p className="text-gray-400 mt-6 text-center">
            Don't have an account?{' '}
            <MyLink to="/Signup" className="text-blue-400 hover:underline font-medium">
              Sign Up here
            </MyLink>
          </p>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
