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
                detailsData.map(data=> <p className=' gap-14 mb-16 h-8 ' key={data.id}><Link className='my-5 md:text-2xl text-x-sm  py-5 px-4 shadow-md' to={`/all-categories/${data.id}`}>{data.author.name}</Link></p>)
            }
        </div>
    );
};

export default Details;