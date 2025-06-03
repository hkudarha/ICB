import React from 'react';

const NewsletterSignup = () => (
  <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-[#2d133b] to-[#6d28d9] rounded-2xl p-8 mt-10 mb-8 relative overflow-hidden shadow-lg">
    <div className="absolute inset-0 pointer-events-none">
      <img
        src="https://icblabs.com/assets/footerBg-BRVEPj6G.png"
        alt=""
        className="w-full h-full object-cover opacity-40"
        draggable={false}
      />
    </div>
    <div className="relative z-10">
      <p className="text-white/70 text-sm mb-2 tracking-widest">NEWSLETTER SIGNUP</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-200 mb-6">
        Subscribe for<br />the updates
      </h2>
      <form className="flex flex-col md:flex-row gap-4 md:items-center">
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 px-4 py-3 rounded-lg bg-black/40 border border-purple-400 text-white placeholder:text-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow transition"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  </div>
);

export default NewsletterSignup;