import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../Components/Blogs/Blogs';
import Courses from '../Components/Courses/Courses';
import Faq from '../Components/Faq/Faq';
import Details from '../Components/Pages/Details';
import DetailsCart from '../Components/Pages/DetailsCart';
import Enroll from '../Components/Pages/Enroll';
import Home from '../Components/Pages/Home';
import Layouts from '../Layouts/Layouts';
import Rout404 from './Rout404';

export const webrouter=createBrowserRouter([
    {
        path:'/',
        element:<Layouts></Layouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/all-categories')
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/faq-questions',
                element:<Faq></Faq>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:()=>fetch('http://localhost:5000/all-categories')
            },
            // {
            //     path:'/course-details',
            //     element:<Details></Details>,
            //     loader:()=>fetch(`http://localhost:5000/all-categories`),
            // },
            {
                path:'/enrolled',
                element:<Enroll></Enroll>
            },
            {  
                path:'/details-cart/:id',
                element:<DetailsCart></DetailsCart>,
                loader:({params})=>fetch(`http://localhost:5000/all-categories/${params.id}`)
            },
        ]
    },
    {
        path:'*',
        element:<Rout404></Rout404>
    }
])


 const Rout = () => {
    return (
        <div>
            
        </div>
    );
};

export default Rout;