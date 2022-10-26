import React from 'react';
import { Link } from 'react-router-dom';
import { BiFace, BiUserCircle } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { useContext } from 'react';
import { AuthContext } from '../../Context/Context';

const Header = () => {

    const {SignOut,user}=useContext(AuthContext)

    // const {photoURL}=user
    // console.log(user)
    // console.log(photoURL)

    const handleSignOut=()=>{
        SignOut()
        .then(res=>{})
        .catch(er=>{})
    }


    return (
        <div className=''>
            <div className="navbar bg-base-100 px-6 border-b-4 border-b-pink-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <img className='h-10 rounded w-10' src="https://w7.pngwing.com/pngs/171/678/png-transparent-marwadi-university-mechanical-engineering-computer-icons-civil-engineering-engineer-people-laboratory-engineering-thumbnail.png" alt="" />
                    <span className=" text-3xl text-pink-800 italic oldstyle-nums font-semibold"><Link to='/'>Engineer's School</Link></span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/courses' className='text-pink-500 hover:border-b-slate-600'>Courses</Link></li>
                        <li><Link to='/faq-questions' className='text-pink-500 hover:border-b-slate-600'>FAQ</Link></li>
                        <li><Link to='/blogs' className='text-pink-500 hover:border-b-slate-600'>Blogs</Link></li>
                        
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    {/* {(user.uid)?
                     <div className='h-8 w-8'><img src={photoURL} alt="" /></div>:
                     <BiUserCircle className='h-8 w-8 text-pink-900' />
                    } */}
                    {user?
                     <button onClick={handleSignOut} className='text-pink-700'><Link to='/register'>Log Out</Link></button>
                     :
                     <button className='text-pink-700'><Link to='/logIn'>Sign In</Link></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;