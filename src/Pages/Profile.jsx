import React, { useState, useEffect, useContext } from "react";
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
    return () => { if (photo && file) URL.revokeObjectURL(photo); };
  }, [photo, file]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name 😅");
      return;
    }

    try {
      let photoURL = photo;

      // Upload image to Firebase Storage if new file selected
      if (file) {
        const storageRef = ref(storage, `profileImages/${user.uid}-${Date.now()}`);
        await uploadBytes(storageRef, file);
        photoURL = await getDownloadURL(storageRef);
      }

      // Update contexts
      updateProfile({ name, photo: photoURL });
      if (user) await updateUserProfile(name, photoURL);

      toast.success("Profile updated successfully ✅");
    } catch (err) {
      toast.error("Failed to update profile 😢");
      console.error(err);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-indigo-400">👤 My Profile</h1>

        <div className="mb-6 flex flex-col items-center">
          <img
            src={photo || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 mb-3"
          />
          <label className="cursor-pointer bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Upload Photo
            <input type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
          </label>
        </div>

        <form onSubmit={handleSave} className="flex flex-col items-center w-full">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 px-4 py-2 w-full rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
          />
          <button type="submit" className="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold">
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
