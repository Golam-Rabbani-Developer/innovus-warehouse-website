import React from 'react';
import { GrFacebookOption } from 'react-icons/gr'
import { FaLinkedinIn, FaPinterestP, FaSkype } from "react-icons/fa"
import { AiFillPhone } from "react-icons/ai"
import { MdAttachEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
const date = new Date()
const Footer = () => {
    const socialMenu = <>
        <div className='flex gap-8 text-white'>
            <li className='list-none'><GrFacebookOption className='transition ease-in-out delay-150 text-slate-400 hover:text-primary hover:scale-110 duration-300' /></li>
            <li className='list-none'><FaLinkedinIn className='transition ease-in-out delay-150 text-slate-400 hover:text-primary hover:scale-110 duration-300' /></li>
            <li className='list-none'><FaPinterestP className='transition ease-in-out delay-150 text-slate-400 hover:text-primary hover:scale-110 duration-300' /></li>
            <li className='list-none'><FaSkype className='transition ease-in-out delay-150 text-slate-400 hover:text-primary hover:scale-110 duration-300' /></li>
        </div>
    </>
    const connect = <div className='flex items-start gap-4 flex-col justify-start'>
        <li className='list-none text-sm flex items-center gap-3'><span className='transition ease-in-out delay-150  border-2 border-slate-500 p-2 rounded-full text-white hover:scale-110 hover:bg-slate-600 duration-300'><AiFillPhone /></span> <span>+88-985746563</span></li>
        <li className='list-none text-sm flex items-center gap-3'><span className='transition ease-in-out delay-150  border-2 border-slate-500 p-2 rounded-full text-white hover:scale-110 hover:bg-slate-600 duration-300'><MdAttachEmail /> </span><span>innovus@gmail.com</span></li>
        <li className='list-none text-sm flex items-center gap-3'><span className='transition ease-in-out delay-150  border-2 border-slate-500 p-2 rounded-full text-white hover:scale-110 hover:bg-slate-600 duration-300'><GoLocation /> </span><span>Blue-Street,Mirpur-10</span></li>
    </div>
    return (
        <div className='bg-secondary lg:px-20 text-white'>
            <footer class="footer p-10  text-white items-center justify-between">
                <div >
                    <h2 className='font-oswald font-bold text-2xl '>Innovus</h2>
                    <p>Over 24 years experience and <br /> knowledge of international industrial systems, <br /> dedicated to provide the best economical <br /> solutions to our valued customers. <br /> We Won Many Factory Awards and <br /> Ceritificates Since 2001-2016</p>

                </div>

                <div className='lg:text-center'>
                    <span class="footer-title ">Services</span>
                    <a class="link link-hover">  Bridge Construction</a>
                    <a class="link link-hover">Chemical Research</a>
                    <a class="link link-hover">Petroleum and Gas</a>
                    <a class="link link-hover">Mechanical Engineering</a>
                </div>
                <div className='lg:text-center'>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div className='lg:text-center'>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span class="footer-title ">Contact us</span>
                    {
                        connect
                    }
                </div>
            </footer>

            <hr className='w-11/12 mx-auto ' />

            <div className='flex justify-between items-center px-10 lg:px-14 flex-col gap-5 lg:flex-row py-8'>
                <p>{'\u00a9'}  <span className='font-bold font-oswald'>Copyright {date.getFullYear()} Restricted By Innovus</span></p>
                {socialMenu}
            </div>
        </div>
    );
};

export default Footer;