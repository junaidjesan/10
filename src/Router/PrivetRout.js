import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const PrivetRout = ({children}) => {

    const {user,loading}=useContext(AuthContext)
    const location=useLocation()


    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(!user){
        return <Navigate to="/logIn" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivetRout;