import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

        const [user , setUser] = useState(null)
    const [ loading , setLoading ] = useState(true)


     const createUserWithEmailAndPasswordFunc = (email , password) => {

       return createUserWithEmailAndPassword(auth, email,password);

    }
     const sendEmailVerificationFunc = () => {
       return sendEmailVerification(auth.currentUser)
    }

     const signInWithEmailAndPasswordFunc = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUserFunc =() => {
       return signOut(auth)
    }

    const signInWithPopupGoogleFunc = () => {
       return signInWithPopup(auth , GoogleProvider)
    }

    // const signInWithPopupGithubFunc = () => {
    //    return signInWithPopup(auth , githubProvider )
    // }


    const sendPasswordResetEmailFunc = (email) => {
       return sendPasswordResetEmail (auth,email)
    }

    const updateProfileFunc = (displayName,photoURL) => {
        return updateProfile (auth.currentUser, {
            displayName,
            photoURL
        })
    }


    const authInfo = {
        createUserWithEmailAndPasswordFunc,
        sendEmailVerificationFunc,
        signInWithEmailAndPasswordFunc,
        signOutUserFunc,
        signInWithPopupGoogleFunc,
        sendPasswordResetEmailFunc,
        updateProfileFunc,
        user,
        loading,
    }




      useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[])

    

    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;