// src/Pages/Profile.jsx
import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthProvider";
import { UserContext } from "../Context/UserContext";
import { storage } from "../firebase/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const { userProfile, updateProfile } = useContext(UserContext);

  const [name, setName] = useState(userProfile.name || user?.displayName || "");
  const [photo, setPhoto] = useState(userProfile.photo || user?.photoURL || null);
  const [file, setFile] = useState(null);

  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPhoto(URL.createObjectURL(selectedFile));
    }
  };

  useEffect(() => {
    return () => {
      if (photo && file) URL.revokeObjectURL(photo);
    };
  }, [photo, file]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name 😅");
      return;
    }

    try {
      let photoURL = photo;
      if (file) {
        const storageRef = ref(storage, `profileImages/${user.uid}-${Date.now()}`);
        await uploadBytes(storageRef, file);
        photoURL = await getDownloadURL(storageRef);
      }

      updateProfile({ name, photo: photoURL });
      if (user) await updateUserProfile(name, photoURL);
      toast.success("Profile updated successfully ✅");
    } catch (err) {
      toast.error("Failed to update profile 😢");
      console.error(err);
    }
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl font-bold mb-6 text-indigo-400"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          👤 My Profile
        </motion.h1>

        <motion.div
          className="mb-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.img
            src={photo || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 mb-3 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <label className="cursor-pointer bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Upload Photo
            <input type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
          </label>
        </motion.div>

        <motion.form
          onSubmit={handleSave}
          className="flex flex-col items-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 px-4 py-2 w-full rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Save
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Profile;
