import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({ name: "", photo: "" });

  const updateProfile = (profile) => setUserProfile(profile);
  const resetProfile = () => setUserProfile({ name: "", photo: "" });

  return (
    <UserContext.Provider value={{ userProfile, updateProfile, resetProfile }}>
      {children}
    </UserContext.Provider>
  );
};
