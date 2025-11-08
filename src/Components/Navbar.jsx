/* eslint-disable no-undef */
import React from "react";
import { NavLink, useParams } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <div className="">
      <div className="navbar bg-base-100 w-11/12 mx-auto m-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="font-semibold text-sm menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to={`/detail/${id}`}>Details</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            className="flex items-center text-xl px-2  mr-8 cursor-pointer font-semibold text-[#ff9c07d7]"
            to="/"
          >
            <img className="h-10 w-10 mx-1" src={logo} alt="logo-image" />
            {/* <a className="text-xl ml-2 cursor-pointer font-semibold  text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
              HERO.OI
            </a> */}
            <p className="hidden sm:block whitespace-nowrap">GAME.LaB</p>
          </NavLink>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 text-md font-semibold">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="">Details</NavLink>
            </li>
            <li>
              <NavLink to="">Profile</NavLink>
            </li>
          </ul>
        </div> */}
        <div className="navbar-end flex gap-6 mr-4 ">
          <div className="ul">
            <ul className="gap-3 text-md font-semibold text-white  hidden lg:flex">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to={`/detail/${id}`}>Details</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
          </div>
          <NavLink to='/login'>
            <button className="cursor-pointer py-1 px-2 rounded-md text-[#ff9c07d7] font-semibold border border-[#ff9c07d7]">
              Log In
            </button>
          </NavLink>
            
          
        </div>
      </div>
    </div>
    // <div className="div">
    //     <h1>navbar</h1>
    // </div>
  );
};

export default Navbar;
