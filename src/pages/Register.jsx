/* eslint-disable no-unused-vars */

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import { Link, useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useTitle from '../Hooks/useDynamicTitle';

const Register = () => {

   const loadingData = useLoaderData() ;

  useTitle('Register')

  const {createUserWithEmailAndPassFunc,
          updateProfileFunc,
          emailVerification,
          signinWithGoogle,
          setLoading,
          logOutFunction,
          setUser,


  } = useContext(AuthContext);

  const navigate = useNavigate()
  // console.log(createUserWithEmailAndPassFunc);
  // toast

  const handleRegister =(e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const photoURL = e.target.photo?.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).+$/ ;

    if(password.length < 6) {
      return toast.error('Password Should be At least 6 Digit')
    } else if (!passwordRegex.test(password)) {
      return  toast.warning("Password must contain at least one uppercase and one lowercase letter!");
    }

    // console.log('button was clicked',displayName,email, password,photUrl);

    createUserWithEmailAndPassFunc(email,password)
    .then((result) => {

         updateProfileFunc( displayName , photoURL)
         .then(() => {toast.success('Profile update')
              emailVerification().then(() => {
                setLoading(false)
                
                // signOut kora hocche naile user theke jacche
                
                logOutFunction()
                .then(() => {
                  toast.info('sign Up Successfully Please Check Your Email For verification!')});
                  setUser(null);
                  navigate('/login')
                })
                
                // setUser(result.user)
               })

          .catch((err) => {toast.error(err.message)})
           console.log(result);
    })
    .catch((err) => {
      toast.error(err.message);
    })


  }

  const handleGoogleSignin = () => {

  signinWithGoogle()
  .then((result) => {
    console.log(result.user.photoURL)
    navigate('/')
    toast.success('successful your sign in by google')
  })
  .catch((err) => {
    toast.error(err.message , 'google')
  })

 }

  return (
    <div className="hero bg-white min-h-screen ">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-[#ff9c07d7] font-bold">Register Now</h1>
        </div>
        <div className="card bg-white/10 backdrop-blur-md border-2 border-[#ff9c07d7] w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form
               onSubmit={handleRegister}
              className=""
            >
              <fieldset className="fieldset">
                {/* name */}

                <label className="label text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input border border-white text-white placeholder-gray-500"
                  placeholder="Pritom Roy"
                />

                {/* photo  url*/}

                <label className="label text-white">PhotoURL</label>
                <input
                  name="photo"
                  type="text"
                  className="input border border-white text-white placeholder-gray-500"
                  placeholder="PhotoURL"
                />

                {/* email  url*/}

                <label className="label text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input border border-white text-white placeholder-gray-500"
                  placeholder="Email"
                />

                {/* password */}

                <label className="label text-white">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input border border-white text-white placeholder-gray-500"
                  placeholder="Password"
                />

                {/* forgate password */}

                <button className="btn btn-neutral text-[#ff9c07d7] hover:bg-[#ff9c07d7] border-white mt-4">
                  Register
                </button>

                {/* google signin */}

                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="btn flex items-center justify-center gap-3 border border-[#ff9c07d7] text-[white] px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
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
      {/* {
        user? 'ache' : "nei"
      } */}
    </div>
  );
};

export default Register;
