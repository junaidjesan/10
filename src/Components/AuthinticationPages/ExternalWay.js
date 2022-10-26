import React from 'react';
import { useContext } from 'react';
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const ExternalWay = () => {

    const {GoogleSignIn}=useContext(AuthContext)


    const handleGoogleClick=()=>{
          GoogleSignIn()
          .then(res=>{const user=res.user})
                .catch(er=>{})
    }

    return (
        <div className='flex gap-5 justify-center py-4'>
            <div><Link onClick={handleGoogleClick}><BsGoogle className='h-6 w-8'/></Link></div>
            <div><BsGithub className='h-6 w-8'/></div>
            <div><BsFacebook className='h-6 w-8'/></div>
        </div>
    );
};

export default ExternalWay;