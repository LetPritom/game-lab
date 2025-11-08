import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
       <div className="hero bg-white min-h-screen ">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now</h1>
        </div>
        <div className="card bg-white/10 backdrop-blur-md border border-white w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="">
              <fieldset className="fieldset">
                {/* name */}

                
                <label className="label text-white">Name</label>
                <input type="text"
                  className="input border border-white text-white placeholder-white"
                  placeholder="Pritom Roy" />

                         {/* photo  url*/}


                <label className="label text-white">PhotoURL</label>
                <input
                 type="email" className="input border border-white text-white placeholder-white"
                 placeholder="PhotoURL" />

                    {/* email  url*/}

                <label className="label text-white">Email</label>
                <input type="email" className="input border border-white text-white placeholder-white" placeholder="Email" />

                {/* password */}

                <label className="label text-white">Password</label>
                <input
                  type="password"
                  className="input border border-white text-white placeholder-white"
                  placeholder="Password"
                />

                {/* forgate password */}

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral  border-white mt-4">Register</button>
                <button
                  type="button"
                  onClick={'handleGoogleSignin'}
                  className="flex items-center justify-center gap-3 text-white bg-white px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5 "
                  />
                  Continue with Google
                </button>
               <p className="text-center text-sm text-white/80 mt-3">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-[#ff9c07d7] hover:text-white underline"
                  >
                    Login
                  </Link>
                </p>

              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;