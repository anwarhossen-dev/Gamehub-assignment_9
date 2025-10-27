


// import React, { useState, useEffect, useContext } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AuthContext } from "../Context/AuthProvider";
// import { UserContext } from "../Context/UserContext";
// import { storage } from "../firebase/firebase.config";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// const Profile = () => {
//   const { user, updateUserProfile } = useContext(AuthContext);
//   const { userProfile, updateProfile } = useContext(UserContext);

//   const [name, setName] = useState(localStorage.getItem("profileName") || userProfile.name || user?.displayName || "");
//   const [photo, setPhoto] = useState(userProfile.photo || user?.photoURL || null);
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const handlePhotoChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setPhoto(URL.createObjectURL(selectedFile));
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (photo && file) URL.revokeObjectURL(photo);
//     };
//   }, [photo, file]);

//   const saveProfile = async (photoURL) => {
//     try {
//       updateProfile({ name, photo: photoURL });
//       if (user) await updateUserProfile(name, photoURL);
//       localStorage.setItem("profileName", name);
//       toast.success("Profile updated successfully ✅");
//     } catch (err) {
//       toast.error("Failed to update profile 😢");
//       console.error(err);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//     if (!name.trim()) {
//       toast.error("Please enter your name 😅");
//       return;
//     }

//     setUploading(true);
//     let photoURL = photo;

//     if (file) {
//       const storageRef = ref(storage, `profileImages/${user.uid}-${Date.now()}`);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log(`Upload is ${progress}% done`);
//         },
//         (error) => {
//           toast.error("Upload failed 😢");
//           console.error(error);
//           setUploading(false);
//         },
//         async () => {
//           photoURL = await getDownloadURL(uploadTask.snapshot.ref);
//           await saveProfile(photoURL);
//         }
//       );
//     } else {
//       await saveProfile(photoURL);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
//       <ToastContainer position="top-right" />
//       <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
//         <h1 className="text-4xl font-bold mb-6 text-indigo-400">👤 My Profile</h1>
//         <div className="mb-6 flex flex-col items-center">
//           <img
//             src={photo || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
//             alt="Profile"
//             className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 mb-3 shadow-lg"
//           />
//           <label className="cursor-pointer bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
//             Upload Photo
//             <input type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
//           </label>
//         </div>
//         <form onSubmit={handleSave} className="flex flex-col items-center w-full">
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mb-4 px-4 py-2 w-full rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             placeholder="Enter your name"
//           />
//           <button
//             type="submit"
//             disabled={uploading}
//             className={`bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold ${
//               uploading ? "opacity-60 cursor-not-allowed" : ""
//             }`}
//           >
//             {uploading ? "Saving..." : "Save"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import { AuthContext } from "../Context/AuthProvider";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { userProfile } = useContext(UserContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(userProfile.name || user?.displayName || "");
  const [photo, setPhoto] = useState(userProfile.photo || user?.photoURL || null);

  useEffect(() => {
    setName(userProfile.name || user?.displayName || "");
    setPhoto(userProfile.photo || user?.photoURL || null);
  }, [userProfile, user]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <ToastContainer position="top-right" />
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-indigo-400">👤 My Profile</h1>
        <div className="mb-6 flex flex-col items-center">
          <img
            src={photo || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 mb-3 shadow-lg"
          />
          <h2 className="text-xl font-medium">{name}</h2>
        </div>
        <button
          onClick={() => navigate("/update-information")}
          className="mt-4 bg-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-600 transition font-semibold"
        >
          Update Information
        </button>
      </div>
    </div>
  );
};

export default Profile;

