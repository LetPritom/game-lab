import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,} from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

 const googleProvider = new GoogleAuthProvider ;

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)
    const [ loading , setLoading ] = useState(true)
    console.log(user);

    // ekhane Registration er funtion

    const createUserWithEmailAndPassFunc = (email,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword (auth, email , password)
    }; 

    // ekhane email verification

    const emailVerification =() => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

       // ekhane Login Funtion

    const signInWithEmailAndPasswordFunc = (email,password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
         

    // ekhane GoogleSignIn function 

    const signinWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }



        // ekhane updated profile function
    
    const updateProfileFunc = (displayName,photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName,
            photoURL
        })
    };


    //  forgetPassword

    const resetPasswordFunction = (email) => {
        setLoading(true)
      return  sendPasswordResetEmail(auth , email)
    }



    // log out function

    const logOutFunction = () => {
        setLoading(true)
        return signOut(auth)
    }

//    global data

    const authInfo = {
      createUserWithEmailAndPassFunc,
      signInWithEmailAndPasswordFunc,
      emailVerification,
      updateProfileFunc,
      signinWithGoogle,
      logOutFunction,
      resetPasswordFunction ,
      user,
      loading,
      setUser,
      setLoading
    }


    
 



  useEffect(() => {  

    const unsubscribe = onAuthStateChanged(auth, (crrUser) => {
        setUser(crrUser);
        setLoading(false);
    })

    return () => {
        unsubscribe();
    };
  } , [] )

    

    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;