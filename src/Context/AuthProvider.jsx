import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged, signOut, updateProfile as firebaseUpdateProfile } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const updateUserProfile = async (displayName, photoURL) => {
    if (!auth.currentUser) return;
    await firebaseUpdateProfile(auth.currentUser, { displayName, photoURL });
    setUser({ ...auth.currentUser });
  };

  return (
    <AuthContext.Provider value={{ user, logout, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
