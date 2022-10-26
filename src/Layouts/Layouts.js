import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Details from '../Components/Pages/Details';

const Layouts = () => {
    return (
        <div className=''>
            <Header></Header>
            <>
                <div className='lg:flex'>
                    <div className='d-none lg:w-3/12 d-lg-block lg:border-r-4 lg:border-r-pink-800'>
                        <Details></Details>
                    </div>
                    <div className="lg:w-9/12 sm:flex mx-auto">
                        <Outlet></Outlet>
                    </div>
                </div>
            </>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;