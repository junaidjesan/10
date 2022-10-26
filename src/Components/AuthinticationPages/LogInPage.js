import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import ExternalWay from './ExternalWay';

const LogInPage = () => {
    const [logInError,setLogInError]=useState('')
    console.log(logInError)
    const navigate=useNavigate()

    const {SignInUser}=useContext(AuthContext)

    const handleSignIn=event=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        SignInUser(email,password)
        .then(res=>{
            const user=res.user
            console.log(user)
            setLogInError('')
            navigate('/')
        })
        .catch(er=>{
            setLogInError(er.message)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br /> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
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
                            <div>if already have account <Link className='text-blue-700' to='/register'>Register </Link> now</div>
                            <h1 className='text-red-500'>{logInError}</h1>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary btn-outline">Log In</button>
                            </div>
                            <ExternalWay></ExternalWay>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogInPage;