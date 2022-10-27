import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import ExternalWay from './ExternalWay';

const RegisterPage = () => {
    const {CreateUser,updateUserProfile}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    const form=location.state?.from?.pathname|| '/'

    const [registerError,setRegisterError]=useState('')
    console.log(registerError)

    const handleRegisterSubmition=event=>{
        event.preventDefault()
        const fm = event.target;
        const name = fm.name.value;
        if(name.length<10){
            return  [...registerError,setRegisterError('type full name')]
        }
        const photoURL = fm.url.value;
        const email = fm.email.value;
        const password = fm.password.value;
        fm.reset()
        CreateUser(email,password)
        .then(res=>{
            setRegisterError('')
            navigate(form,{replace:true})
            updateUserProfileData(name,photoURL)
        })
        .catch(er=>{setRegisterError(er.message)})
    }

    const updateUserProfileData=(name,photoURL)=>{
        const profile={
            displayName: name,
            photoURL:photoURL,
        }
        updateUserProfile(profile)
        .then(res=>{
            const data=res.user
            console.log(data)
        })
        .catch(er=>{})
    }

    return (
        <div className=''>
            <div className="md:hero mx-auto mb-6">
                <div className="md:hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="md:text-5xl text-3xl font-bold">Register now!</h1>
                        <p className="py-6 hidden md:flex">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br /> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 md:w-full w-12/12 shadow-2xl bg-base-100">
                        <form onSubmit={handleRegisterSubmition} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" required name='name' placeholder="type your full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Link</span>
                                </label>
                                <input type="url" name='url' placeholder="https://" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" required name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='password'  placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className='text-sm'>if already have account <Link className='text-blue-700' to='/logIn'>log in </Link> now</div>
                            <h1 className='text-red-500'>{registerError}</h1>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary btn-outline">Register</button>
                            </div>
                            <ExternalWay></ExternalWay>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;