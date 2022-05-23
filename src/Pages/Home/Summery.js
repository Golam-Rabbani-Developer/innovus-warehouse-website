import React from 'react';
import { FaPersonBooth, FaAward } from "react-icons/fa"
import { GiPowerGenerator } from "react-icons/gi"
import { AiFillProject } from "react-icons/ai"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const Summery = ({ summery, index }) => {
    const { name, number, num } = summery;
    return (
        <div className='relative mt-12 text-slate-200 mx-auto flex  justify-center gap-4'>
            {
                index === 0 && <p className='d-inline border-2 border-orange-200 bg-primary w-[40px] h-[40px] rounded-full pl-2 pt-2 mb-5'><GiPowerGenerator className=' text-secondary' /></p>
            }

            {
                index === 1 && <p className='d-inline border-2 border-orange-200 bg-primary w-[40px] h-[40px] rounded-full pl-2 pt-2 mb-5'><FaAward className='text-secondary' /></p>
            }
            {
                index === 2 && <p className='d-inline border-2 border-orange-200 bg-primary w-[40px] h-[40px] rounded-full pl-2 pt-2 mb-5'><AiFillProject className=' text-secondary ' /></p>
            }
            {
                index === 3 && <p className='d-inline border-2 border-orange-200 bg-primary w-[40px] h-[40px] rounded-full pl-2 pt-2 mb-5'><FaPersonBooth className='text-secondary' /></p>
            }
            <div>
                <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
                    {({ isVisible }) => (
                        <div style={{ height: 20 }}>
                            <span className='text-2xl font-bold'>  {isVisible ? <CountUp start={number} end={num} /> : null}</span>
                        </div>
                    )}
                </VisibilitySensor>
                <p className='mt-2 font-bold text-xl font-roboto'>{name}</p>
            </div>
        </div>
    );
};

export default Summery;