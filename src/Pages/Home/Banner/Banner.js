import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
import { MdOutlineArrowRightAlt } from "react-icons/md"
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner flex flex-col justify-center text-white font-roboto px-10 lg:pl-48 lg:pt-72'>
            <p className='text-sm z-20'>Providing services with 23rd Years of Experience</p>
            <h2 className='text-6xl my-4 font-bold font-oswald z-20'>Welcome to our Innovus tools HUB</h2>
            <p>We Offer bset tools always and its proved by </p>
            <p>got many cerficates from renowned organizations</p>
            <div className='flex gap-8 items-center mt-12 lg:mb-36 z-20'>
                <PrimaryBtn>Explore services</PrimaryBtn> <Link className='border-b-2 border-primary hover:text-primary flex gap-3 items-center hover:translate-x-1' to='/services'>Our Services<MdOutlineArrowRightAlt className="text-3xl text-primary "></MdOutlineArrowRightAlt></Link>
            </div>
        </div>
    );
};

export default Banner;