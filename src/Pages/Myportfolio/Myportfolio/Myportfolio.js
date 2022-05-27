import React from 'react';
import { VscActivateBreakpoints } from "react-icons/vsc"
import { MdAttachEmail } from "react-icons/md"
import { BsFillTelephoneOutboundFill } from "react-icons/bs"
import { FcAddressBook } from "react-icons/fc"
import { Link } from 'react-router-dom';
import Skills from './skills/skills';

const Myportfolio = () => {
    return (
        <div className='mx-auto p-4 mt-32 font-oswald px-10 lg:px-32'>
            <h1 id='about-title' className='font-bold text-2xl text-primary'>Learn About Me</h1>
            <h4 className='text-xl font-bold text-slate-500'>Front-End-Developer, Open-Sourcer</h4>
            <div className="about-container">
                <p className=''>Hey, Arshat Rony here. Addressing to my spot on the web for projects I've created,tutorials I've written and else I want to show the world.My site has no ads, no affiliate links, no tracking or analytics, no sponsored posts, and no paywall. My only motivation for this site is to share what I've learned with the world and document notes for myself, and hopefully connect with a few people.</p>
                <h2 className='font-bold text-xl mt-6 text-secondary mb-3'>Educational Background</h2>
                <h2>2nd Year</h2>
                <p>Aircraft Maintenace Engineering</p>
                <p>AMTC,Pakistan</p>
            </div>
            <div>
                <h2 className='font-bold text-2xl text-primary mt-12'>MyProject Overview</h2>
                <hr />
                <div className='flex flex-col gap-3'>
                    <p className='mt-3'>✧  <Link className='text-bule-500 underline font-bold  ' to="https://bits-cf981.web.app/">Nft Website</Link></p>
                    <p>   ✧   <Link className='text-bule-500 underline font-bold  ' to="https://emily-jhonson-services.firebaseapp.com/home">Personal Branding Website</Link></p>
                    <p>    ✧    <Link className='text-bule-500 underline font-bold  ' to="https://bikers-b2e71.firebaseapp.com/home">Company Management Website</Link></p>
                </div>

            </div>
            <div className="about-container">
                <Skills></Skills>
            </div>
            <hr />

            <div data-aos="fade-up-right" className='about-container mt-12 space-y-2'>
                <h3 className='font-bold text-2xl text-secondary'>Current Location</h3>
                <hr />
                <p className='flex items-center gap-3'><FcAddressBook className='fs-3' /> Dhaka, Bnagladesh</p>

            </div>
            <div className='space-y-3 mt-12'>
                <h3 className='about-heading font-bold text-2xl text-secondary'>Connect Me</h3>
                <hr />
                <p className='flex items-center gap-3'><MdAttachEmail className='me-3 fs-4 email-phone' />
                    frrony@gmail.com</p>
                <p className='flex items-center gap-3'><BsFillTelephoneOutboundFill className='me-3 fs-4 email-phone' />
                    +01641-382848</p>
            </div>
        </div>
    );
};

export default Myportfolio;