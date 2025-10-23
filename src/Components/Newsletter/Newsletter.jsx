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
      <h2 className="text-3xl font-bold mb-4 text-white">Join Our Newsletter</h2>
      <p className="text-gray-300 mb-8">
        Get updates about new game releases and developer news.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          aria-label="Email"
          className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg text-white-900 outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Subscribe
        </button>
      </form>

      {subscribed && (
        <p className="text-green-400 mt-4 font-medium">
          ✅ Thank you for subscribing!
        </p>
      )}
    </section>
  );
};

export default Newsletter;
