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
                <div className='md:flex'>
                    <div className=' w-3/12 d-lg-block justify-center md:flex hidden md:border-r-4 md:border-r-pink-800'>
                        <Details></Details>
                    </div>
                    <div className="w-7/12 justify-center sm:flex mx-auto">
                        <Outlet></Outlet>
                    </div>
                </div>
            </>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;