import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsStarFill, BsStarHalf } from 'react-icons/bs'


const DetailsCart = () => {
    const data = useLoaderData()
    const { author, details, enrolled, rating, thumbnail_url, title } = data
    const { published_date, } = author
    const { number, badge } = rating
    console.log(data)
    return (
        <div>
            <div>
                <img className='w-full h-80 shadow-md' src={thumbnail_url} alt="" />
            </div>
            <div className=''>
                <div className='text-justify p-5'>
                    <h1 className='text-2xl text-pink-800 mx-auto'>{title}</h1>
                    {details}
                </div>
                <div className='p-5 flex justify-between'>
                    <div>
                        <h1>{published_date}</h1>
                        <div className='flex'>Total Enrolled- <h1>{enrolled}</h1></div>
                        <h1 className='flex gap-1'>{number}<BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /></h1>
                    </div>
                    <div>
                        <Link to='/enrolled'><button className='btn btn-outline btn-primary'>Enroll Now</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsCart;