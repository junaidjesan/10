import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext=createContext()
const auth=getAuth(app)



const Context = ({children}) => {

    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)

    const googleProvider=new GoogleAuthProvider()
    const githubProvider=new GithubAuthProvider()
    const facebookProvider=new FacebookAuthProvider()


    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const UpdateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    const SignOut=()=>{
        setLoading(true);
          return  signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return ()=>{unsubscribe()}
    },[])



    const GoogleSignIn=()=>{
        return signInWithPopup(auth,googleProvider)
                
    }
    const GithubSignIn=()=>{
        return signInWithPopup(auth,githubProvider)
    }
    const FacebookSignIn=()=>{
        return signInWithPopup(auth,facebookProvider)
    }


    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }


    const contextValue={GoogleSignIn,updateUserProfile,loading,SignInUser,UpdateUserProfile,CreateUser,user,GithubSignIn,FacebookSignIn,SignOut}
    return (
        <div>
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Context;