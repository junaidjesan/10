import React from 'react';
import { useLoaderData } from 'react-router-dom';


const DetailsCart = () => {
    const data=useLoaderData()
    return (
        <div>
            <h1>details cart{data.name}</h1>
        </div>
    );
};

export default DetailsCart;