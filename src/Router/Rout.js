import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LogInPage from '../Components/AuthinticationPages/LogInPage';
import RegisterPage from '../Components/AuthinticationPages/RegisterPage';
import Blogs from '../Components/Blogs/Blogs';
import Courses from '../Components/Courses/Courses';
import Faq from '../Components/Faq/Faq';
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
                loader:()=>fetch('https://api-pied-seven.vercel.app/all-categories')
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
                loader:()=>fetch('https://api-pied-seven.vercel.app/all-categories')
            },
            {
                path:'/register',
                element:<RegisterPage></RegisterPage>
            },
            {
                path:'/logIn',
                element:<LogInPage></LogInPage>
            },
            {
                path:'/enrolled/:id',
                element:<Enroll></Enroll>,
                loader:({params})=>fetch(`https://api-pied-seven.vercel.app/all-categories/${params.id}`)
            },
            {  
                path:'/all-categories/:id',
                element:<DetailsCart></DetailsCart>,
                loader:({params})=>fetch(`https://api-pied-seven.vercel.app/all-categories/${params.id}`)
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