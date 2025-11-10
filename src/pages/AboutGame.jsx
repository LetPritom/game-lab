import React from "react";
import useTitle from "../Hooks/useDynamicTitle";
import { useLoaderData } from "react-router";

const AboutGame = () => {
      // eslint-disable-next-line no-unused-vars
      const loadingData = useLoaderData() ;
  useTitle("About");
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-300 flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
        About <span className="text-yellow-400">GameZone</span>
      </h1>

      {/* Description */}
      <p className="max-w-3xl text-center text-lg text-gray-400 leading-relaxed mb-12">
        Welcome to{" "}
        <span className="text-yellow-400 font-semibold">GameZone</span> — the
        ultimate destination for gamers around the globe! Here you can explore
        top-rated Game, discover hidden games, and experience the future of
        online gaming with lightning-fast performance and sleek design.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full ">
        <div className="bg-[#141414] hover:bg-[#1a1a1a] border border-yellow-400/20 hover:border-yellow-400/40 rounded-2xl p-6 text-center transition-all">
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">
            ⚡ Fast Performance
          </h3>
          <p className="text-gray-400 text-sm">
            Built with React & Firebase to ensure blazing speed and reliability.
          </p>
        </div>

        <div className="bg-[#141414] hover:bg-[#1a1a1a] border border-yellow-400/20 hover:border-yellow-400/40 rounded-2xl p-6 text-center transition-all">
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">
            🛡️ Secure Login
          </h3>
          <p className="text-gray-400 text-sm">
            Your account is protected using modern Firebase Authentication.
          </p>
        </div>

        <div className="bg-[#141414] hover:bg-[#1a1a1a] border border-yellow-400/20 hover:border-yellow-400/40 rounded-2xl p-6 text-center transition-all">
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">
            🎮 Modern Interface
          </h3>
          <p className="text-gray-400 text-sm">
            A futuristic game-themed design optimized for all devices.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">Designed & Developed by</p>
        <h2 className="text-xl font-semibold text-yellow-400 mt-1">
          🚀 GAme LAB — Web Developer & Gamer
        </h2>
      </div>
    </div>
  );
};

export default AboutGame;
