// import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
// import { toast } from "react-toastify";

const Login = () => {
  // const {
  //   signInWithEmailAndPasswordFunc,
  //   signInWithPopupGoogleFunc,
  //   // signInWithEmailFunc,
  //   // sendPasswordResetEmailFunc,
  //   // signInWithPopupGoogleFunc,
  //   setUser,
  //   setLoading,
  // } = useContext(AuthContext);

  // const handleSignin = (e) => {
  //   console.log("button is clicked");
  //   e.preventDefault();
  //   const email = e.target.email?.value;
  //   const password = e.target.password?.value;
  //   console.log("sign up function entered", { email, password });

  //   signInWithEmailAndPasswordFunc(email, password)
  //     .then((result) => {
  //       const { emailVerified } = result.user;

  //       if (!emailVerified) return toast.error("Please verify Your Email");

  //       console.log(result.user);

  //       toast.success("successful");

  //       setUser(result.user);
  //       // navigate(from);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error(err.message);
  //     });
  // };

  // const handleGoogleSignin = () => {
  //   console.log("google signin");
  //   signInWithPopupGoogleFunc()
  //     .then((res) => {
  //       console.log(res);
  //       setLoading(false);
  //       setUser(res.user);
  //       // navigate(from);
  //       toast.success("Signin successful");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       toast.error(e.message);
  //     });
  // };

  return (
    <div className="hero bg-white min-h-screen ">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-[#ff9c07d7] font-bold">Login now!</h1>
        </div>
        <div className="card bg-white/10 backdrop-blur-md border-2 border-[#ff9c07d7] w-full max-w-sm shrink-0 shadow-2xl">
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

                {/* password */}

                <label className="label text-white">Password</label>
                <input
                  type="password"
                  className="input border border-white text-white placeholder-gray-500"
                  placeholder="Password"
                />

                {/* forget password */}
                <Link to="/forget">
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                </Link>

                {/* button */}

                <button
                  // onClick={handleSignin}
                  className="btn btn-neutral text-[#ff9c07d7] border-white mt-4"
                >
                  Login
                </button>

                {/* google button */}


                <button
                  type="button"
                  // onClick={handleGoogleSignin}
                  className="flex items-center justify-center gap-3 text-white border border-[#ff9c07d7] px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5 "
                  />
                  Continue with Google
                </button>
                <p className="text-center text-sm text-white/80 mt-3">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-[#ff9c07d7] hover:text-white underline"
                  >
                    Register
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

export default Login;
