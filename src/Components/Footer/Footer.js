import React from 'react';
import { Link } from 'react-router-dom';
import { ImFacebook, ImGoogle3, ImTwitter } from 'react-icons/im'
import logo from '../../BrandLogo/logo.png'

const Footer = () => {
    return (
        <div className='bg-pink-200 '>
            <div  className='bg-pink-200'>
                <footer className="footer p-10 grid grid-cols-2 mx-auto lg:grid-cols-3  text-base-content">
                    <div>
                    <img className='h-40 rounded w-50' src={logo} alt="" />
                        <p>Engineer's School Ltd.<br />Providing reliable tech since 1992 <br /> we has a successful journey</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <Link to='/' className="link link-hover">Jobs</Link>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
                <div className='px-10 bg-pink-200 text-base-content grid place-content-center'>
                    <div className='flex gap-3'>
                        <a href="https://www.google.com/"><ImGoogle3 /></a>
                        <a href="https://www.facebook.com/"><ImFacebook /></a>
                        <a href="https://www.twitter.com/"><ImTwitter /></a>
                    </div>
                    <h1 className='grid place-content-center'>follow us</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;