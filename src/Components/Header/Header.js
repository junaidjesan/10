import React from 'react';
import { Link } from 'react-router-dom';
import { IconName,BiFace } from "react-icons/bi";

const Header = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-200 px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <img className='h-10 rounded w-10' src="https://w7.pngwing.com/pngs/171/678/png-transparent-marwadi-university-mechanical-engineering-computer-icons-civil-engineering-engineer-people-laboratory-engineering-thumbnail.png" alt="" />
                    <span className=" text-3xl italic oldstyle-nums font-semibold"><Link to='/'>Engineer's School</Link></span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/courses' className='hover:border-b-slate-600'>Courses</Link></li>
                        <li tabIndex={0}>
                            <a>
                                For You
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><Link to='/blogs'>Blogs</Link></li>
                                <li><Link to='/faq-questions'>FAQ</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <BiFace className='h-8 w-8' />
                    <button><Link to='/register'>Register</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Header;