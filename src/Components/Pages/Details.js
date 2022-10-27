import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Details = ( ) => {
    const [detailsData,setDetailsData]=useState([])
    useEffect(()=>{
        fetch('https://api-pied-seven.vercel.app/all-categories')
        .then(res=>res.json())
        .then(data=>setDetailsData(data))
    },[])
    return (
        <div className='lg:mt-8'>
            {
                detailsData.map(data=> <p className=' gap-6 mb-8 h-8 ' key={data.id}><Link className='my-5  py-5 px-4 shadow-md' to={`/all-categories/${data.id}`}>{data.title}</Link></p>)
            }
        </div>
    );
};

export default Details;