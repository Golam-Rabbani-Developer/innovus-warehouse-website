import React from 'react';
import { GiElectricalResistance, GiElectricalCrescent, } from 'react-icons/gi'
import { FcElectricalSensor } from "react-icons/fc"
import { GrVirtualMachine } from 'react-icons/gr'
import { SiBandrautomation } from "react-icons/si"
import { MdOutlineElectricalServices } from 'react-icons/md'
import { CgSmartHomeWashMachine } from "react-icons/cg"
const Service = ({ service, index }) => {
    const { name, text } = service;
    return (
        <div className="card bg-base-100  w-50 mt-10 border-2 border-slate-400 lg:border-0  lg:mt-0">
            <div className="card-body">
                {index === 0 && <span className='d-inline bg-secondary p-4 w-[60px] rounded-full'><GiElectricalResistance className='text-2xl text-white' /></span>}
                {index === 1 && <span className='d-inline bg-secondary p-4 w-[60px] rounded-full'><CgSmartHomeWashMachine className='text-2xl text-white' /></span>}
                {index === 2 || index === 3 ? <span className='d-inline bg-secondary p-4 w-[60px] rounded-full'><FcElectricalSensor className='text-2xl text-white' /></span> : ""}
                {index === 5 ? <span className='d-inline bg-secondary p-4 w-[60px] rounded-full'><MdOutlineElectricalServices className='text-2xl text-white' /></span> : ""}
                {index === 4 ? <span className='d-inline bg-secondary p-4 w-[60px] rounded-full'><GiElectricalCrescent className='text-2xl text-white' /></span> : ''}
                {index === 6 ? <span className='d-inline bg-secondary p-4 w-[60px] rounded-full'><CgSmartHomeWashMachine className='text-2xl text-white' /></span> : ''}
                {index === 7 || index === 8 || index === 9 ? <span className='d-inline bg-secondary p-4 w-[60px] rounded-full'><SiBandrautomation className='text-2xl text-white' /></span> : ''}

                <h2 className="card-title font-oswald">{name}</h2>
                <p>{text}</p>
                <button className="btn btn-link text-secondary">Explore It ➞</button>

            </div>
        </div>
    );
};

export default Service;