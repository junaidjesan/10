import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../Components/Pages/Blogs';
import Courses from '../Components/Pages/Courses';
import Faq from '../Components/Pages/Faq';
import Home from '../Components/Pages/Home';
import Layouts from '../Layouts/Layouts';

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
                element:<Courses></Courses>
            }
        ]
    }
])


 const Rout = () => {
    return (
        <div>
            
        </div>
    );
};

export default Rout;