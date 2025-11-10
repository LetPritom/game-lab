/* eslint-disable no-undef */
// import React, { useContext } from "react";
import { NavLink, useParams } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const Navbar = () => {
  const { id } = useParams();

  const { user, logOutFunction, setUser, loading,} = useContext(AuthContext);

  // console.log(user);
  console.log(loading);
  const handleLogOut = () => {
    logOutFunction()
      .then(() => {
        toast.success("sign Out");
        setUser(null);
      })
      .catch((err) => {
        toast.error(err);
      });
  };


  
  

  
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
                <NavLink to='/About'>About</NavLink>
              </li>
              <li>
                {user && <NavLink to="/profile">Profile</NavLink>}
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
            <p className="hidden sm:block whitespace-nowrap">GAmE.LaB</p>
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
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                {user && <NavLink to="/profile">Profile</NavLink>}
              </li>
            </ul>
          </div>
          {loading ? (
            <ClipLoader color="#ff9c07d7" />
          ) : user ? (
            <div className="img">
              <button
                className="cursor-pointer"
                popoverTarget="popover-1"
                style={
                  { anchorName: "--anchor-1" } /* as React.CSSProperties */
                }
              >
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.photoURL}
                  alt="user-image"
                />
              </button>

              <ul
                className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto"
                id="popover-1"
                style={
                  { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
                }
              >
                <div className="down flex flex-col justify-center">
                  <NavLink to='/profile'>
                    {" "}
                    <img
                      className=" my-2 w-8 h-8 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </NavLink>
                  <p className="text-sm font-semibold my-2">
                    {user?.displayName}
                  </p>
                </div>

                <div className="button">
                  <button
                    onClick={handleLogOut}
                    className="border btn  border-[#ff9c07d7]"
                  >
                    Log Out
                  </button>
                </div>
              </ul>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="cursor-pointer py-1 px-2 rounded-md text-[#ff9c07d7] font-semibold border border-[#ff9c07d7]">
                Log In
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
    // <div className="div">
    //     <h1>navbar</h1>
    // </div>
  );
};

export default Navbar;
