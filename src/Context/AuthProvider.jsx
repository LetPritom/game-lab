import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,} from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

 const googleProvider = new GoogleAuthProvider ;

const AuthProvider = ({children}) => {

        const [user , setUser] = useState(null)
    // const [ loading , setLoading ] = useState(true)
    console.log(user);

    // ekhane Registration er funtion

    const createUserWithEmailAndPassFunc = (email,password) => {
       return createUserWithEmailAndPassword (auth, email , password)
    }; 

    // ekhane email verification

    const emailVerification =() => {
        return sendEmailVerification(auth.currentUser)
    }

       // ekhane Login Funtion

    const signInWithEmailAndPasswordFunc = (email,password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }
         

    // ekhane GoogleSignIn function 

    const signinWithGoogle = () => {
        return signInWithPopup(auth , googleProvider)
    }



        // ekhane updated profile function
    
    const updateProfileFunc = (displayName,photoURL) => {
        return updateProfile(auth.currentUser,{
            displayName,
            photoURL
        })
    };


    //  forgetPassword

    const resetPasswordFunction = (email) => {
        sendPasswordResetEmail(auth , email)
    }



    // log out function

    const logOutFunction = () => {
        return signOut(auth)
    }

   



    const authInfo = {
      createUserWithEmailAndPassFunc,
      signInWithEmailAndPasswordFunc,
      emailVerification,
      updateProfileFunc,
      signinWithGoogle,
      logOutFunction,
      resetPasswordFunction ,
      user,
      setUser,
    }




    //   useEffect()

    

    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;