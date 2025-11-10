import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import rating from '../assets/icon-ratings.png'

const GameSection = ({game}) => {
    const {id} = game;
    // console.log(id);
    const loadingData = useLoaderData() ;
    return (
        <div>
      <NavLink to={`/detail/${id}`}>
        {/* <button className="flex justify-self-end px-3 py-2 rounded-md bg-white/30 backdrop-blur-md border border-gray-300 text-gray-800 font-medium shadow-md  hover:bg-white/40 hover:shadow-[0_10px_30px_rgba(99,46,227,0.4)] hover:border-gray-400 transition-all duration-300 cursor-pointer hover:text-black text-semibold">
              Click To Install
            </button> */}

        <div
          className="card bg-white/70 backdrop-blur-md shadow-lg hover:scale-103 hover:shadow-[0_10px_30px_rgba(99,46,227,0.4)] hover:-translate-y-2 transition-all duration-500 rounded-2xl border border-white/40 p-3
      "
        >
          <figure className="h-72 overflow-hidden">
            <img
              className="w-full object-cover rounded-lg"
              src={game.coverPhoto}
              alt="furniture"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{game.title}</h2>
            <div className="title flex justify-between  gap-5">
              <p className="font-semibold flex items-center gap-1 text-[#00D390]">
                {game.category}
              </p>
              <p className="font-semibold flex items-center gap-1 text-[#FF8811] justify-end">
                <span>
                  <img className="h-3" src={rating} alt="rating-icon" />
                </span>
                {game.ratings}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
    );
};
 
export default GameSection;