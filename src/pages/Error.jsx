import React from "react";
import useTitle from "../Hooks/useDynamicTitle";
import error from "../assets/warning.png";
import { NavLink, useLoaderData } from "react-router";

const Error = () => {
      // eslint-disable-next-line no-unused-vars
      const loadingData = useLoaderData() ;
  useTitle("Error");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-11/12 mx-auto">
      <div className="img h-64 w-64">
        <img className=" object-cover" src={error} alt="error" />
      </div>
      <h1 className="text-2xl font-bold">404 Not Found ! </h1>
      <NavLink to="/">
        <button
          className="relative my-5 px-8 py-3 font-semibold text-yellow-400 border border-yellow-400 rounded-xl uppercase tracking-wide 
              shadow-[0_0_15px_#facc15aa] hover:shadow-[0_0_30px_#facc15] 
              hover:bg-yellow-400 hover:text-white transition-all duration-300"
        >
          Go Back
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
