import React from "react";
import { useParams } from "react-router";
import useGameHooks from "../Hooks/useGameHooks";

const GameDetails = () => {
  const { id } = useParams();
  const { games } = useGameHooks();
  // console.log(games);
  if (!games) return <div className="text-white">Loading..</div>;
  const matchGame = games.find((game) => String(game.id) === id);
  if (!matchGame) return <div>Loading...</div>;
  console.log(matchGame);
  return (
    <div className="w-11/12 mx-auto my-5 py-5 px-2 h-[90vh]">
      <div
        className="card card-side  bg-yellow-400 
                 hover:bg-yellow-500 hover:scale-105 transition-all duration-300 
                  shadow-[0_0_15px_rgba(255,255,0,0.6)] border-2 border-yellow-500 
                  active:scale-95 cursor-pointer flex flex-col md:flex-row lg:flex-row "
      >
        <figure className="h-auto shadow-xl rounded-xl">
          <img
            className="rounded-3xl object-cover p-3 "
            src={matchGame?.coverPhoto}
            alt="Movie"
          />
        </figure>
        <div className="card-body rounded-lg">
          <h2 className="card-title font-bold text-2xl">
            {matchGame?.title} : {matchGame?.description}
          </h2>
          <h2 className="card-category font-bold text-xl">
            Category : {matchGame?.category}
          </h2>

          <p className="font-semibold">
            Developed By{" "}
            <span className="text-[#ff9c07d7]">{matchGame?.developer}</span>
          </p>
          <p className="font-semibold">
            Rating{" "}
            <span className="text-[#ff9c07d7]">{matchGame?.ratings}</span>
          </p>
          <a rel="noopener noreferrer" href={matchGame?.downloadLink}>
            <button
              className=" mt-2 px-6 py-3 rounded-lg font-bold text-yellow-500 bg-yellow-400 
                 hover:bg-yellow-500 hover:scale-105 transition-all duration-300 
                  shadow-[0_0_15px_rgba(255,255,0,0.6)] border-2 border-yellow-500 
                  active:scale-95 cursor-pointer"
            >
              Buy Now
            </button>
          </a>
        </div>
      </div>

      <div className="detail my-10 py-2">
        <h1 className="text-2xl text-white font-bold">Details</h1>
        <p className="text-gray-300 text-sm py-2 my-1">
          {matchGame?.description}
        </p>
        <p className="text-gray-300 text-sm">
          Step into the world of limitless action and immersive gameplay. Every
          mission, every race, every battle brings a new level of thrill and
          challenge. Experience cinematic graphics, powerful sound design, and
          smooth performance crafted to make you feel inside the game itself.
          Unlock new weapons, conquer difficult levels, and prove your skills as
          a true gamer. Whether you fight, drive, explore, or survive — every
          moment is adrenaline-fueled. Welcome to the next generation of gaming
          — where legends are made
        </p>
      </div>
      
    </div>
    
  );
};

export default GameDetails;
