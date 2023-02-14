import React, { useEffect, useState } from 'react';
import PrimaryBtn from './PrimaryBtn/PrimaryBtn';
import { GrFacebookOption } from 'react-icons/gr'
import { FaLinkedinIn, FaPinterestP, FaSkype } from "react-icons/fa"
import { AiFillPhone } from "react-icons/ai"
import { MdAttachEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
import { Link, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebaseinit';
import "./Header.css"
const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(_ => {
        const handleScroll = _ => {
            if (window.scrollY > 3) {
                setScrolled(true)

            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const [user] = useAuthState(auth)
    const location = useLocation()
    const menu = <>
        <li className={`${location.pathname.includes("home") || location.pathname === "/" ? "link_nav link_active" : "link_nav"}`}><Link to='/home'>Home</Link></li>
        <li className={`${location.pathname.includes("about") ? "link_nav link_active" : "link_nav"}`}><Link to="/shop">Shop</Link></li>
        <li className={`${location.pathname.includes("services") ? "link_nav link_active" : "link_nav"}`}><Link to="/services">Services</Link></li>
        <li className={`${location.pathname.includes("reviews") ? "link_nav link_active" : "link_nav"}`}><Link to="/reviews">Reviews</Link></li>

        {
            user && <li className={`${location.pathname.includes("dashboard") ? "link_nav link_active" : "link_nav"}`}><Link to="/dashboard">Dashboard</Link></li>
        }
    </>
    const socialMenu = <>
        <div className='text-white flex items-center justify-between font-roboto flex-col lg:flex-row'>
            <div className='flex items-center gap-12 bg-slate-700 w-6/12 py-3 pl-5'>
                <li className='list-none text-xs flex items-center gap-3'><AiFillPhone className='text-primary' /> <span>+88-985746563</span></li>
                <li className='list-none text-xs flex items-center gap-3'><MdAttachEmail className='text-primary' /> <span>innovus@gmail.com</span></li>
                <li className='list-none text-xs flex items-center gap-3'><GoLocation className='text-primary' /> <span>Blue-Street,Mirpur-10</span></li>
            </div>

            <div className='flex items-end justify-end gap-8 text-white bg-primary w-6/12 py-3 pr-5'>
                <li className='list-none'><GrFacebookOption className='transition ease-in-out delay-150 text-black hover:text-white hover:scale-110 duration-300' /></li>
                <li className='list-none'><FaLinkedinIn className='transition ease-in-out delay-150 text-black hover:text-white hover:scale-110 duration-300' /></li>
                <li className='list-none'><FaPinterestP className='transition ease-in-out delay-150 text-black hover:text-white hover:scale-110 duration-300' /></li>
                <li className='list-none'><FaSkype className='transition ease-in-out delay-150 text-black hover:text-white hover:scale-110 duration-300' /></li>
            </div>
        </div>
    </>
    return (
        <div className={`overflow-y-hidden w-full z-20 ${(location.pathname === "/" || location.pathname === "/home") && scrolled ? "home_scrolled" : "home others"}`}>
            {
                scrolled ? "" : <> {location.pathname === "/" || location.pathname === "/home" ? <div className={`hidden lg:block ${scrolled ? "pt-10 pb-2 px-20" : "py-3 px-20"}`}>
                    {socialMenu}
                </div> : ""} </>
            }
            <div className={`navbar font-roboto text-white  lg:px-20 ${scrolled ? "pt-6" : "p-4"} `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content bg-secondary mt-3 p-2 shadow  rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to="/home" className="btn btn-ghost text-xl font-satisfy">In<span className='text-yellow-500'>nov</span> us</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 ">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label htmlFor="Dashboard-page" tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {

                        user ? <button onClick={() => signOut(auth)} className="btn btn-primary bg-red-500 rounded-none border-none text-white"> Sign Out</button>
                            :
                            <Link to="/login"> <PrimaryBtn>Login</PrimaryBtn></Link>

                    }


                </div>
            </div>
        </div>
    );
};

export default Header;