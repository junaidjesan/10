import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../Pages/CourseCart';

const Courses = () => {
    const loaderdatas=useLoaderData()
    return (
        <div>
            {
                loaderdatas.map(data=><CourseCart key={data.id} data={data}></CourseCart>)
            }
        </div>
    );
};

export default Courses;