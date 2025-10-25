// import React, { useState } from "react";
// import MyLink from "../Components/MyLink/MyLink";
// import { auth } from "../firebase/firebase.config";
// import { ToastContainer, toast } from 'react-toastify';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { FaEye, FaGoogle } from "react-icons/fa";
// import { IoEyeOff } from "react-icons/io5";


// const SignUp = () => {

//     const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setshow] = useState(false);
//     const handleSignUp = (e) =>{
//         e.preventDefault();
//         const email = e.target.email?.value;
//         const password = e.target.password?.value;

//         console.log("signup function entered" , {email, password})
//         // console.log(password.length);
//         // if(password.length < 6){
//         //     toast.error("Password should be at least 6 digit");
//         //     return;
//         // }
//         const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
//         if (!regExp.test(password)){
//             // ❌ If password invalid, show error
//       toast.error(
//         "❌ Invalid password! It must be at least 6 characters long, include one uppercase letter, one lowercase letter, one number, and one special symbol."
//       );
//       return;
//         }



//         createUserWithEmailAndPassword(auth, email, password)
//         .then((res) =>{
//             console.log(res);
//             toast.success("SignUp Successful")
//         })
//         .catch((err) => {
//         console.error( err);
//         console.log(err.code)
//         if(e.code == "auth/email-already-in-use"){
//            toast.error("User already exist in database"); 
//         }
//         //toast.error(err.message);
//       });
//     };


// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// // //   const handleSignUp = (e) => {
// // //     e.preventDefault();
// // //     const email = e.target.email?.value;
// // //     const password = e.target.password?.value;
// // //     console.log("User signed up with:", {email, password});
// // //     // Add your signup logic here (e.g., Firebase, API call)

// // //    const user = createUserWithEmailAndPassword(auth, email, password)
// // //     .then((res) =>{
// // //         console.log(res);
// // //         toast.success("SignUp Successful");
// // //     })
// // //     .catch((e) =>{
// // //         toast.error(e.massage);
// // //     });
        
// // //   };

// // const handleSignUp = (e) => {
// //   e.preventDefault();

// //   const email = e.target.email.value;
// //   const password = e.target.password.value;

// //   console.log("User signed up with:", { email, password });

// //   createUserWithEmailAndPassword(auth, email, password)
// //     .then((res) => {
// //       console.log("Firebase user:", res.user);
// //       toast.success("SignUp Successful!");
// //     })
// //     .catch((err) => {
// //       toast.error(err.message);
// //       console.error(err);
// //     });
// // };





// //   const handleGoogleSignUp = () => {
// //     console.log("Google signup clicked");
// //     // Add your Google signup logic here
// //   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
//       <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h2>

//         <form onSubmit={handleSignUp} className="space-y-4">
//              {/* <input
//           type="text"
//           name="name"
//           placeholder="Enter Your Name"
//           onChange={handleChange}
//           value={formData.name}
//           className="w-full mb-4 p-2 rounded bg-gray-700 border border-gray-600"
//           required
//         />

//         <input
//           type="text"
//           name="photoURL"
//           placeholder="Enter your Photo"
//           onChange={handleChange}
//           value={formData.photoURL}
//           className="w-full mb-4 p-2 rounded bg-gray-700 border border-gray-600"
//         /> */}

//           <input
//         name="email"      
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//       <div className="relative">
//           <input
//         name="password"          
//         type={show ? "text": "password"}
//         placeholder="Enter your password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <span onClick={()=> setshow(!show)} className="absolute right-[8px] top-[15px] cursor-pointer z-50">
//            {show ? <FaEye/> : <IoEyeOff/>}
//         </span>
//       </div>


//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         <div className="my-4 flex items-center">
//           <div className="flex-grow border-t border-gray-600"></div>
//           <span className="mx-2 text-gray-400">or</span>
//           <div className="flex-grow border-t border-gray-600"></div>
//         </div>

//         <button
//           //onClick={handleGoogleSignUp}
//           className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
        
//         >
//           {/* <FaGoogle/> */}
//           Continue with Google
//         </button>

//         <p className="text-gray-400 mt-6 text-center">
//           Already have an account?{" "}
//           <MyLink
//             to="/signin"
//             className="text-blue-400 hover:underline font-medium"
//           >
//             Sign In here
//           </MyLink>
//         </p>
//         <ToastContainer/>
//       </div>
//     </section>
//   );
// };

// export default SignUp;



import React, { useState } from "react";
import MyLink from "../Components/MyLink/MyLink";
import { auth } from "../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaEye, FaGoogle } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    // Password validation
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    if (!regExp.test(password)) {
      toast.error(
        "❌ Invalid password! Must be 6+ chars, include uppercase, lowercase, number & special symbol."
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        toast.success("✅ SignUp Successful!");
      })
      .catch((err) => {
        console.error(err);
        if (err.code === "auth/email-already-in-use") {
          toast.error("⚠️ This email is already registered!");
        } else if(e.code == "auth/weak-password"){
            toast.error("Bhai Tomake at least 6 ta digit pass dite hobe")

        } else {
          toast.error(err.message);
        }
      });
  };

  // ✅ Google SignUp handler
  const handleGoogleSignUp = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        toast.success("✅ Google Sign-In Successful!");
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
          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-2 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
        >
          <FaGoogle className="text-lg" /> Continue with Google
        </button>

        {/* Already Have Account */}
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
