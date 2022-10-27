import React from 'react';
import { Link } from 'react-router-dom';

const HomeCart = ({ data }) => {
    const {img,name}=data.author
    const {details}=data
    const detailSlice=details.slice(0,80)
    return (
        <div className='grid justify-center'>
            <div className="card md:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-56 h-36" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{detailSlice}</p>
                    <div className="card-actions">
                        <Link to={`/enrolled/${data.id}`}><button className="btn btn-outline hover:shadow-purple-200 btn-primary">Get premium access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCart;