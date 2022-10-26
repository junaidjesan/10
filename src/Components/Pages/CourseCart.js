import React from 'react';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from 'react-router-dom';

const CourseCart = ({ data }) => {
    const { name, published_date } = data.author
    const { image_url, title, enrolled, details} = data
    const { number, badge } = data.rating
    return (
        <div className='grid justify-center my-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-96 h-56' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge border-none  bg-pink-700">{badge}</div>
                    </h2>
                    <h1 className='text-pink-400 '>{title}</h1>
                    <p>{details.slice(0, 200)}...</p>
                    <div className='mt-2'>
                        <div className='flex gap-2'>
                            <h1 className=' '> {number}</h1>
                            <div className='flex my-1 text-pink-800'>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>
                        <div>
                            <h1>Enrolled- {enrolled}</h1>
                        </div>
                        <div>
                            <h1>Publish Date- {published_date}</h1>
                        </div>
                    </div>
                    <div className="card-actions justify-end mt-1">
                        <Link to={`/all-categories/${data.id}`}><div className="badge badge-outline">Details</div></Link>
                        <Link to={`/enrolled/${data.id}`}><div className="badge badge-outline">Get premium access</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCart;