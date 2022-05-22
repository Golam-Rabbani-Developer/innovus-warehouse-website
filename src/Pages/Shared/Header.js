import React from 'react';
import PrimaryBtn from './PrimaryBtn/PrimaryBtn';
import { GrFacebookOption } from 'react-icons/gr'
import { FaLinkedinIn, FaPinterestP, FaSkype } from "react-icons/fa"
import { AiFillPhone } from "react-icons/ai"
import { MdAttachEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'

const Header = () => {
    const menu = <>
        <li className='text-white'><a>Home</a></li>
        <li className='text-white'><a>About Us</a></li>
        <li className='text-white'><a>Reviews</a></li>
        <li className='text-white'><a>Blogs</a></li>
    </>
    const socialMenu = <>
        <div className='text-white flex items-center justify-between font-roboto flex-col lg:flex-row'>
            <div className='flex items-center gap-12'>
                <li className='list-none text-sm flex items-center gap-3'><AiFillPhone className='text-primary text-2xl' /> <span>+88-985746563</span></li>
                <li className='list-none text-sm flex items-center gap-3'><MdAttachEmail className='text-primary text-2xl' /> <span>innovus@gmail.com</span></li>
                <li className='list-none text-sm flex items-center gap-3'><GoLocation className='text-primary text-2xl' /> <span>Blue-Street,Mirpur-10</span></li>
            </div>

            <div className='flex gap-8 text-white'>
                <li className='list-none'><GrFacebookOption className='transition ease-in-out delay-150 text-slate-400 hover:text-primary hover:scale-110 duration-300' /></li>
                <li className='list-none'><FaLinkedinIn className='transition ease-in-out delay-150 text-slate-400 hover:text-primary hover:scale-110 duration-300' /></li>
                <li className='list-none'><FaPinterestP className='transition ease-in-out delay-150 text-slate-400 hover:text-primary hover:scale-110 duration-300' /></li>
                <li className='list-none'><FaSkype className='transition ease-in-out delay-150 text-slate-400 hover:text-primary hover:scale-110 duration-300' /></li>
            </div>
        </div>
    </>
    return (
        <div className='absolute top-0 z-10 w-full '>
            <div className='px-20 py-8 hidden lg:block'>
                {socialMenu}
            </div>
            <div class="navbar bg-none font-roboto text-white lg:px-20  ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content bg-secondary mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Innovus</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 ">
                        {menu}
                    </ul>
                </div>
                <div class="navbar-end">
                    <PrimaryBtn>Login</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Header;