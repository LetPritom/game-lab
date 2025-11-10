import React from "react";

const Newsslater = () => {
  return (
    <div className="w-11/12 mx-auto my-10 py-10  bg-black rounded-xl border-2 border-yellow-500 shadow-[0_0_20px_rgba(255,255,0,0.6)]">
      <h2 className="text-3xl font-bold text-[#ff9c07d7] text-center mb-4">
        Subscribe to GAME.LaB News
      </h2>
      <p className="text-gray-300 text-center mb-6">
        Get the latest updates, game releases, and exclusive offers straight to
        your inbox.
      </p>
      <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mx-5">
        <input
          type="email"
          placeholder="Enter your email"
          className="input border border-white text-white placeholder-gray-400 bg-black w-full sm:w-2/3"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-lg font-bold text-yellow-500 bg-yellow-400 
        hover:bg-yellow-500 hover:scale-105 transition-all duration-300 
        shadow-[0_0_15px_rgba(255,255,0,0.6)] border-2 border-yellow-500 active:scale-95 cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsslater;
