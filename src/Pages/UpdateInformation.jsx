import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import { AuthContext } from "../Context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const UpdateInformation = () => {
  const { userProfile, updateProfile } = useContext(UserContext);
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(userProfile.name || user?.displayName || "");
  const [photo, setPhoto] = useState(userProfile.photo || user?.photoURL || "");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    setName(userProfile.name || user?.displayName || "");
    setPhoto(userProfile.photo || user?.photoURL || "");
  }, [userProfile, user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty 😅");
      return;
    }

    try {
      setUpdating(true);

      // Update context
      updateProfile({ name, photo });

      // Update Firebase profile
      if (user) await updateUserProfile(name, photo);

      localStorage.setItem("profileName", name);
      toast.success("Information updated successfully ✅");

      // Go back to profile page
      setTimeout(() => navigate("/profile"), 1000);
    } catch (err) {
      toast.error("Failed to update information 😢");
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <ToastContainer position="top-right" />
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-indigo-400">Update Information</h1>
        <form onSubmit={handleUpdate} className="flex flex-col items-center w-full">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 px-4 py-2 w-full rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
          />
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="mb-4 px-4 py-2 w-full rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter photo URL"
          />
          <button
            type="submit"
            disabled={updating}
            className={`bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold ${
              updating ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {updating ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateInformation;
