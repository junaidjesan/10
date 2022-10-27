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
        <div className='md:grid'>
            {
                detailsData.map(data=> <p className=' grid justify-around' key={data.id}><Link className='gap-10 my-5 py-3 px-4 shadow-md' to={`/all-categories/${data.id}`}>{data.title}</Link></p>)
            }
        </div>
    );
};

export default Details;