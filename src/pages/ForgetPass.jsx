import React from "react";

const ForgetPass = () => {
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
                  type="email"
                  className="input border border-white text-white placeholder-gray-500"
                  placeholder="Email"
                />

                {/* forget password button*/}

                <button className="btn btn-neutral text-[#ff9c07d7]  border-white mt-4">
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
