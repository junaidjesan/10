import React from 'react';
import { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext=createContext()
const auth=getAuth(app)



const Context = ({children}) => {


    const contextValue={default:'paisi re'}
    return (
        <div>
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Context;