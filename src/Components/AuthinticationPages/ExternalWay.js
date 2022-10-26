import React from 'react';
import { useContext } from 'react';
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const ExternalWay = () => {

    const {GoogleSignIn,GithubSignIn,FacebookSignIn}=useContext(AuthContext)


    const handleGoogleClick=()=>{
          GoogleSignIn()
          .then(res=>{const user=res.user})
                .catch(er=>{})
    }

    const handleGithubClick=()=>{
        GithubSignIn()
        .then(res=>{})
        .catch(er=>{})
    }

    const handleFacebookClick=()=>{
        FacebookSignIn()
        .then(res=>{})
        .catch(er=>{})
    }

    return (
        <div className='flex gap-5 justify-center py-4'>
            <div><Link onClick={handleGoogleClick}><BsGoogle className='h-6 w-8'/></Link></div>
            <div><Link onClick={handleGithubClick}><BsGithub className='h-6 w-8'/></Link></div>
            <div><Link onClick={handleFacebookClick}><BsFacebook className='h-6 w-8'/></Link></div>
        </div>
    );
};

export default ExternalWay;