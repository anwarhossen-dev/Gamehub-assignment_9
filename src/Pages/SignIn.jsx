// import React, { useState } from 'react';
// import MyLink from '../Components/MyLink/MyLink';
// import { IoEyeOff } from 'react-icons/io5';
// import { FaEye } from 'react-icons/fa';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase/firebase.config';
// import { toast } from 'react-toastify';

// const SignIn = () => {
//     const [user, setUser] = useState(null);
    
//     const [show, setshow] = useState(false);
  
//   const handleSignIn = (event) =>{
//     event.preventDefault();
//     const email = e.target.email?.value;
//     const password = e.target.password?.value;
    
//     console.log(email, password);


//     signInWithEmailAndPassword(auth, email, password).then((res) =>{
//         console.log(res.user);
//         toast.success("Signin Successful");
//     }).catch((err) =>{
//         console.log(err.massage);
//         toast.error(err.massage);
//     });

//   };
//   const handleGoogleSignin = () =>{};
//   const handleSignOut = () =>{};

//   console.log(user);
   
//     return (
//         <div>
//            <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
//       <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-white mb-6">Sign In</h2>

//         {
//             user ? (
//                 <div className='text-center space-y-3'>
//                     <img src={user?.photoURL || "https://vio.phaceholder.com"} className='h-20 w-20 rounded-full mx-auto' alt="" />
//                     <h2 className='text-xl font-semibold'>{user?.displayName}</h2>
//                     <h2 className='text-white/80'>{user?.email}</h2>
//                     <button onClick={handleSignOut}>Sign Out</button>
//                 <div/>
//             ) : (
//                 <form onSubmit={handleSignIn} className="space-y-4">
//           {/* Email Field */}
//           <input
//             name="email"
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={() => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
//                        focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Password Field */}
//           <div className="relative">
//             <input
//               name="password"
//               type={show ? "text" : "password"}
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
//                          focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <span
//               onClick={() => setshow(!show)}
//               className="absolute right-3 top-3.5 cursor-pointer text-gray-300"
//             >
//               {show ? <FaEye /> : <IoEyeOff />}
//             </span>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
//           >
//             Sign In
//           </button>
//         </form>
//             )
//         }

//         <div className="my-4 flex items-center">
//           <div className="flex-grow border-t border-gray-600"></div>
//           <span className="mx-2 text-gray-400">or</span>
//           <div className="flex-grow border-t border-gray-600"></div>
//         </div>

//         {/* Google Login */}
//         <button
//           // onClick={handleGoogleSignin}
//           className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
//         >
//           Continue with Google
//         </button>

//         <p className="text-gray-400 mt-6 text-center">
//           Don't have an account?{" "}
//           <MyLink to="/Signup" className="text-blue-400 hover:underline font-medium">
//             Sign Up here
//           </MyLink>
//         </p>
//       </div>
//     </section>
            
//         </div>
//     );
// };

// export default SignIn;

import React, { useState } from 'react';
import MyLink from '../Components/MyLink/MyLink';
import { IoEyeOff } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'; // ✅ Google icon
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast, ToastContainer } from 'react-toastify';

const provider = new GoogleAuthProvider(); // ✅ Correct initialization

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        toast.success('Signin Successful');
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        toast.success('Google Sign-in Successful');
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success('Signed out successfully');
      })
      .catch((err) => toast.error(err.message));
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

          {/* ✅ Google Login Button with Icon */}
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
