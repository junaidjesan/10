import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCart from './HomeCart';
import { AiFillCaretDown } from "react-icons/ai";

const Home = () => {

    const loaderData = useLoaderData()
    const dataSlice = loaderData.slice(1, 5)

    return (
        <div>
            <div>
                <figure className="carousel w-full">
                    <figure id="slide1" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full h-96 object-cover" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                        <figcaption className='absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light text-center tracking-widest text-black text-4xl leading-snug bg-gray-300 bg-opacity-25'>Welcome to Engineer's School</figcaption>
                    </figure>
                    <figure id="slide2" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full h-96 object-cover" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                        <figcaption className='absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light  text-center tracking-widest text-3xl text-black leading-snug bg-gray-300 bg-opacity-25'>Learn With us and gain your favorite Degree</figcaption>
                    </figure>
                    <figure id="slide3" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full h-96 object-cover" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                        <figcaption className='absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light text-3xl text-center tracking-widest text-black leading-snug bg-gray-300 bg-opacity-25'>Learn with Examples and practical</figcaption>
                    </figure>
                    <figure id="slide4" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1581090466619-e945d2e2980e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full h-96 object-cover" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                        <figcaption className='absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light text-3xl text-center tracking-widest text-black leading-snug bg-gray-300  bg-opacity-25'>Take guid from our world class mentor</figcaption>
                    </figure>
                </figure>
            </div>

            <div className='flex justify-center my-10'>
                <div className='grid grid-cols-2'>
                    <img className='h-28 shadow-sm rounded w-48 m-5' src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <img className='h-28 shadow-sm rounded w-48 m-5' src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />

                    <img className='h-28 shadow-sm rounded w-48 m-5' src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <img className='h-28 shadow-sm rounded w-48 m-5' src="https://images.unsplash.com/photo-1612521564381-8b0d19cc4951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80" alt="" />
                </div>
                <div className='grid grid-cols-2'>
                    <span className='m-5 text-3xl hover:text-pink-600 flex justify-center items-center'>physics</span>
                    <span className='m-5 text-3xl hover:text-pink-600 flex justify-center items-center'>Math</span>
                    <span className='m-5 text-3xl hover:text-pink-600 flex justify-center items-center'>Python</span>
                    <span className='m-5 text-3xl hover:text-pink-600 flex justify-center items-center'>C</span>
                </div>
            </div>



            <div className='mt-10'>
                <div>
                    <h1 className="text-3xl text-pink-800 grid justify-center">Best Courses Fou You</h1>
                    <h1 className='grid justify-center'>Go forward to see all the courses</h1>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    {
                        dataSlice.map(data => <HomeCart key={data.id} data={data}></HomeCart>)
                    }
                </div>
            </div>

            <div className="divider mx-36 my-10"><AiFillCaretDown className='h-40 ' /></div>

            <div className='grid place-content-center  my-10 shadow-sm'>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Enrolled</div>
                        <div className="stat-value text-primary">2.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Course Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Course done</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;