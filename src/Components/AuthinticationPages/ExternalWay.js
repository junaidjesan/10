import React from 'react';
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs'

const ExternalWay = () => {
    return (
        <div className='flex gap-5 justify-center py-4'>
            <div><BsGoogle className='h-6 w-8'/></div>
            <div><BsGithub className='h-6 w-8'/></div>
            <div><BsFacebook className='h-6 w-8'/></div>
        </div>
    );
};

export default ExternalWay;