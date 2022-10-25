import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../Pages/CourseCart';

const Courses = () => {
    const loaderdatas = useLoaderData()
    return (
        <div>
            <div className='grid justify-center my-5 text-pink-800 text-3xl'>
                <h1 className=''>Best Courses Fou You</h1>
            </div>
            <div className='grid grid-cols-2 my-10'>
                {
                    loaderdatas.map(data => <CourseCart key={data.id} data={data}></CourseCart>)
                }
            </div>
        </div>
    );
};

export default Courses;