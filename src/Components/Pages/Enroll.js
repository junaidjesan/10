import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Enroll = () => {
    const {title}=useLoaderData()
    return (
        <div>
            <div>
                <h1 className='text-green-700 flex justify-center text-4xl mt-14'>Hurrah you enrolled Successfully</h1>
                <span className='grid place-content-center mt-5 text-xl'>You have access to continue with <h1 className='text-2xl text-pink-800'>{title}</h1></span>
            </div>
        </div>
    );
};

export default Enroll;