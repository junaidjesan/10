import React from 'react';
import { Link } from 'react-router-dom';

const Rout404 = () => {
    return (
        <div>
            <div className='grid place-content-center'>
                <h1 className='text-4xl mt-20 '>You are on the <span className='text-red-700'>WRONG</span> Way</h1>
                <h1 className='mt-5 mx-auto'>Go <Link to='/' className='text-xl text-green-600'>HOME</Link></h1>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Rout404;