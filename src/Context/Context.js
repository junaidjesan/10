import React from 'react';
import { createContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext=createContext()
const auth=getAuth(app)



const Context = ({children}) => {

    const googleProvider=new GoogleAuthProvider()



    const GoogleSignIn=()=>{
        return signInWithPopup(auth,googleProvider)
                
    }


    const contextValue={GoogleSignIn}
    return (
        <div>
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Context;