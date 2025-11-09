import React, { use } from "react";
import useTitle from "../Hooks/useDynamicTitle";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  useTitle("Profile");

  const { updateProfileFunc, setLoading, user } = use(AuthContext);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;

    if(!displayName  || !photoURL) {
      return toast.info('Please fill in both input fields, otherwise the update will not be saved ❌')
    }
    
    updateProfileFunc(displayName, photoURL)
      .then(() => {
        setLoading(false);
        toast.success("Profile is Update");
      })
      .catch((err) => {
        toast.error(err);
      });
    console.log(`button was clicked`);
  };

  return (
    <div className="hero bg-white min-h-screen ">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update Now!</h1>
        </div>
            <div className="info flex flex-col justify-center items-center">
              <div className="img h-42 w-42  mt-4"><img className="object-cover rounded-lg" src={user.photoURL} alt="update" /></div>
              <p className="text-xl font-bold">{user.displayName}</p>
            </div>
        <div className="card bg-white/10 backdrop-blur-md  w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleProfileUpdate} className="">
              <fieldset className="fieldset">
                {/* email */}
                <label className="label text-white">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input border border-white text-white placeholder-gray-500"
                  placeholder="Name"
                />

                {/* PhotoURL */}

                <label className="label text-white">PhotURL</label>
                <input
                  name="photo"
                  type="text"
                  className="input border border-white text-white placeholder-gray-500"
                  placeholder="url"
                />

                {/* Update button*/}

                <button className="btn btn-neutral text-[#ff9c07d7]  border-white mt-4">
                  Update
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
