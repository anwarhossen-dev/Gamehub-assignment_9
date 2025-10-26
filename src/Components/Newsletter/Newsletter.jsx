// import { useState } from "react";

// const Newsletter = () => {
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubscribed(true);
//     e.target.reset();
//   };

//   return (
//     <section className="py-16 px-6 text-center bg-gray-900 border-t border-gray-700">
//       <h2 className="text-3xl font-bold mb-4 text-white">Join Our Newsletter</h2>
//       <p className="text-gray-300 mb-8">
//         Get updates about new game releases and developer news.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
//       >
//         <input
//           type="email"
//           required
//           placeholder="Enter your email"
//           aria-label="Email"
//           className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
//         />
//         <button
//           type="submit"
//           className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition"
//         >
//           Subscribe
//         </button>
//       </form>

//       {subscribed && (
//         <p className="text-green-400 mt-4 font-medium">
//            Thank you for subscribing!
//         </p>
//       )}
//     </section>
//   );
// };

// export default Newsletter;

import { useState } from "react";

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    e.target.reset();
  };

  return (
    <section className="py-16 px-6 text-center bg-gray-900 border-t border-gray-700">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6 text-gray-300">Get the latest games and updates directly in your inbox.</p>
      {!subscribed ? (
        <form onSubmit={handleSubmit} className="flex justify-center gap-2 flex-wrap">
          <input type="email" placeholder="Your email" required className="p-2 rounded text-black"/>
          <button type="submit" className="btn bg-blue-600 hover:bg-blue-700">Subscribe</button>
        </form>
      ) : (
        <p className="text-green-500 font-semibold">Thank you for subscribing!</p>
      )}
    </section>
  );
};

export default Newsletter;


