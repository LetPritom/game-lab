import React, { useContext } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {

  const {
    createUserWithEmailAndPasswordFunc,
    sendEmailVerificationFunc,
    setUser,
    updateProfileFunc,
    signOutUserFunc,


  } = useContext(AuthContext)




  const handleSignup = (e) => {
  e.preventDefault()
  console.log('button was clicked');
  const email = e.target.email?.value;
  const displayName = e.target.name?.value;
  const password = e.target.password?.value;
  const  photoURL = e.target.photo?.value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

   if (password.length < 6) {
      return toast.error("pass will should be 6 characters");
    } else if (!passwordRegex.test(password)) {
      return toast.warning(
        "For strong password uses uppercase, lowercase, number, and special symbol"
      );
    }


    // createUserWithEmailAndPasswordFunc(email , password)
    // .then((result) => {
    //   console.log(result)
    // })
    // .catch((err) => {
    //   toast.error(err.message);
    // })

     createUserWithEmailAndPasswordFunc(email, password)
      .then((result) => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            sendEmailVerificationFunc()
              .then(() => {
                toast.success("Go To Your Email and Verify");

                // signout after signIn

                signOutUserFunc().then(() => {
                  setUser(null);
                  // navigate('/Signin')
                });
              })
              .catch((err) => {
                toast.error(err.message);
              });
            toast.success("profile Update");
          })

          .catch((err) => {
            toast.error(err);
          });
        console.log(result);
        toast.success("successful");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  
}





    return (
       <div className="hero bg-white min-h-screen ">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now</h1>
        </div>
        <div className="card bg-white/10 backdrop-blur-md border border-white w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">

            <form onSubmit={handleSignup} className="">
              <fieldset className="fieldset">
                {/* name */}

                
                <label className="label text-white">Name</label>
                <input type="text"
                name='name'
                  className="input border border-white text-white placeholder-gray-500"
                  placeholder="Pritom Roy" />

                         {/* photo  url*/}


                <label className="label text-white">PhotoURL</label>
                <input
                name='photo'
                 type="text" className="input border border-white text-white placeholder-gray-500"
                 placeholder="PhotoURL" />

                    {/* email  url*/}

                <label className="label text-white">Email</label>
                <input type="email" 
                name='email'
                className="input border border-white text-white placeholder-gray-500" placeholder="Email" />

                {/* password */}

                <label className="label text-white">Password</label>
                <input
                name='password'
                  type="password"
                  className="input border border-white text-white placeholder-gray-500"
                  placeholder="Password"
                />

                {/* forgate password */}

                <button className="btn btn-neutral  border-white mt-4">Register</button>
                <button
                  type="button"
                  // onClick={'handleGoogleSignin'}
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