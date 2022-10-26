import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const PrivetRout = ({children}) => {

    const {user}=useContext(AuthContext)
    const location=useLocation()


    if(!user){
        return <Navigate to="/logIn" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivetRout;