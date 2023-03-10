import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import { BiUserCircle } from 'react-icons/bi'
import logo from '../../BrandLogo/logo.png'
import Details from '../Pages/Details';


const Header = () => {
    const [changeText, setChangeText] = useState(true)
    const location=useLocation()
    const navigate=useNavigate()
    const form=location.state?.from?.pathname|| '/'

    const handleTextChange = () => {
        return setChangeText(!changeText)
    }

    const { SignOut, user } = useContext(AuthContext)

    console.log(user)

    const handleSignOut = () => {
        SignOut()
            .then(res => {
                navigate(form,{replace:true})
            })
            .catch(er => { })
    }


    return (
        <div className='flex'>
                <div className=''>
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-8 shadow bg-base-100 rounded-box w-12/12">
                        
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq-questions'>FAQ</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    <Details></Details>
                    </ul>
                </div>
                <div className='md:hidden gap-3 md:px-8 px-2'>
                    <button onClick={() => handleTextChange()}><input type="checkbox" className="toggle mt-2" /></button>
                    <div>{!changeText ? "dark" : "light"}</div>
                </div>
                </div>
            <div className="navbar ml-5 bg-base-100 mb:px-6 border-b-4 border-b-pink-800">
                <div className="navbar-start">
                    <img className='md:h-10 rounded w-6 h-6 md:w-14' src={logo} alt="" />
                    <span className="mr-8 md:text-3xl text-pink-800 italic oldstyle-nums font-semibold"><Link to='/'>Engineer's School</Link></span>
                </div>
                <div className='md:flex hidden gap-3 px-8'>
                    <button onClick={() => handleTextChange()}><input type="checkbox" className="toggle mt-2"/></button>
                    <div>{!changeText ? "dark" : "light"}</div>
                </div>
                <div className="navbar-center ">
                    <ul className="hidden md:flex gap-5 mr-8">
                        <li><Link to='/courses' className=' text-pink-500 hover:border-b-slate-600'>Courses</Link></li>
                        <li><Link to='/faq-questions' className=' text-pink-500 hover:border-b-slate-600'>FAQ</Link></li>
                        <li><Link to='/blogs' className=' text-pink-500 hover:border-b-slate-600'>Blogs</Link></li>
                    </ul>
                </div>
                <div className='ml-10'>
                    {
                        user ?
                            <div className="md:flex gap-5">
                                <h1 className='tooltip tooltip-left' data-tip={user.displayName}><img className='h-8 w-8 rounded-xl' src={user.photoURL} alt="" /></h1>
                                <button onClick={handleSignOut} className='text-pink-700'><Link>LogOut</Link></button>
                            </div>
                            :
                            <div className='md:flex gap-5'>
                                <BiUserCircle className='h-8 w-8 text-pink-900' />
                                <button className='text-pink-700'><Link to='/logIn'>SignIn</Link></button>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;