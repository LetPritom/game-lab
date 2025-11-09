import React, { useContext, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import useTitle from "../Hooks/useDynamicTitle";

const ForgetPass = () => {
  
  useTitle('Rest-password');

  const {

    resetPasswordFunction ,
  } = useContext(AuthContext);

  const emailRef = useRef(null);


  const handleRestPassword = () => {
      const email = emailRef.current.value;
      console.log(email);

    resetPasswordFunction (email) 
    .then(() => {
      toast.success('success pass reset')
    })
    .catch((err) => {
      toast.error(err.message);
    })

  }



  return (
    <div className="hero bg-white min-h-screen ">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Reset Password!</h1>
        </div>
        <div className="card bg-white/10 backdrop-blur-md border border-[#ff9c07d7] w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="">
              <fieldset className="fieldset">
                {/* email */}
                <label className="label text-white">Email</label>
                <input
                  ref={emailRef}
                  type="email"
                  className="input border border-white text-white placeholder-gray-500"
                  placeholder="Email"
                />

                {/* forget password button*/}

                <button
                onClick={handleRestPassword}
                 type="button"
                 className="btn btn-neutral text-[#ff9c07d7]  border-white mt-4">
                  Reset
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
