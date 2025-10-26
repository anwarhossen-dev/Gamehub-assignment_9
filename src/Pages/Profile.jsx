import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const [name, setName] = useState("");
  const [preview, setPreview] = useState(null);

  // ✅ Handle photo upload and show preview
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  // ✅ Cleanup memory when component unmounts or preview changes
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  // ✅ Handle form submission
  const handleSave = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name 😅");
      return;
    }
    toast.success("Profile updated successfully ✅");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-indigo-400">👤 My Profile</h1>

        {/* Profile Photo */}
        <div className="mb-6 flex flex-col items-center">
          <img
            src={
              preview ||
              "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 mb-3"
          />
          <label className="cursor-pointer bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200 hover:scale-105">
            Upload Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </label>
        </div>

        {/* Name Input */}
        <form onSubmit={handleSave} className="flex flex-col items-center">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 px-4 py-2 w-full rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
          />
          <button
            type="submit"
            className="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold hover:scale-105"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
