import React from 'react';
import { GrFacebookOption } from 'react-icons/gr'
import { FaLinkedinIn, FaPinterestP, FaSkype } from "react-icons/fa"
const Work = ({ work }) => {
    const { name, img, designation, desc } = work;

    return (
        <div className="card  bg-blue-50 relative font-roboto mt-10 border-b-2 border-primary">
            <figure className="px-10 pt-10">
                <img className='bg-none rounded-md transition ease-in-out delay-150 hover:scale-110 duration-1000' src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <div className='flex gap-3 text-white flex-col absolute top-0 left-0 bg-primary p-4'>
                    <li className='list-none'><GrFacebookOption className='transition ease-in-out delay-150 text-secondary hover:text-white hover:scale-110 duration-300' /></li>
                    <li className='list-none'><FaLinkedinIn className='transition ease-in-out delay-150 text-secondary hover:text-white hover:scale-110 duration-300' /></li>
                    <li className='list-none'><FaPinterestP className='transition ease-in-out delay-150 text-secondary hover:text-white hover:scale-110 duration-300' /></li>
                    <li className='list-none'><FaSkype className='transition ease-in-out delay-150 text-secondary hover:text-white hover:scale-110 duration-300' /></li>
                </div>
                <h2 className="card-title font-roboto">{name}</h2>
                <p className='text-slate-400 text-sm font-roboto text-start'>{desc}</p>

                <div className="card-actions">
                    <p className='text-secondary'>{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default Work;