// // src/Context/AuthProvider.jsx
// import React, { useEffect, useState } from "react";
// import AuthContext from "./AuthContext";

// import {
//   createUserWithEmailAndPassword,
//   GithubAuthProvider,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   sendEmailVerification,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../firebase/firebase.config";

// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const createUserWithEmailAndPasswordFunc = (email, password) =>
//     createUserWithEmailAndPassword(auth, email, password);

//   const updateProfileFunc = (displayName, photoURL) =>
//     updateProfile(auth.currentUser, { displayName, photoURL });

//   const sendEmailVerificationFunc = () => sendEmailVerification(auth.currentUser);

//   const signInWithEmailAndPasswordFunc = (email, password) =>
//     signInWithEmailAndPassword(auth, email, password);

//   const signInWithGoogleFunc = () => signInWithPopup(auth, googleProvider);
//   const signInWithGithubFunc = () => signInWithPopup(auth, githubProvider);

//   const signOutUserFunc = () => signOut(auth);
//   const sendPassResetEmailFunc = (email) => sendPasswordResetEmail(auth, email);

//   const authInfo = {
//     user,
//     setUser,
//     loading,
//     setLoading,
//     createUserWithEmailAndPasswordFunc,
//     updateProfileFunc,
//     sendEmailVerificationFunc,
//     signInWithEmailAndPasswordFunc,
//     signInWithGoogleFunc,
//     signInWithGithubFunc,
//     signOutUserFunc,
//     sendPassResetEmailFunc,
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider; 

import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
  const logout = () => signOut(auth);
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);
  const updateUserProfile = (name, photoURL) => updateProfile(auth.currentUser, { displayName: name, photoURL });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{
      user, loading, signUp, signIn, signInWithGoogle, logout, resetPassword, updateUserProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;



