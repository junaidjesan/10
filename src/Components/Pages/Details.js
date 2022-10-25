import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Details = ( ) => {
    const [detailsData,setDetailsData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/all-categories')
        .then(res=>res.json())
        .then(data=>setDetailsData(data))
    },[])
    console.log(detailsData)
    return (
        <div>
            {
                detailsData.map(data=> <p className=' grid justify-around' key={data.id}><Link className='gap-10 my-5 py-3 px-4 shadow-md' to={`/details-cart/${data.id}`}>{data.title}</Link></p>)
            }
        </div>
    );
};

export default Details;