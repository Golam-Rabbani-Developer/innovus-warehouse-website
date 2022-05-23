import React from 'react';
import Summery from '../Summery';
import './Business.css'

const summerys = [
    { id: 1, name: "Power Plants", number: 1, num: 1920 },
    { id: 2, name: "Award Wins", number: 1, num: 2200 },
    { id: 3, name: "Project Done ", number: 1, num: 1300 },
    { id: 4, name: "Qualified Staffs", number: 1, num: 2730 },
]
const Business = () => {
    return (
        <div className='business mt-64  py-24 px-10 lg:px-36'>
            <h3 className='text-white z-10 font-bold font-oswald text-3xl text-center lg:text-left'>Innovus At a Glance</h3>
            <div className='h-[2px] w-[70px] bg-primary ml-14 lg:ml-0 mt-4'></div>
            <div className='bg-primary w-[100px] h-[14px] absolute top-0 left-0'></div>
            <div className='flex items-center justify-start  flex-col lg:flex-row'>
                {
                    summerys.map((summery, index) => <Summery
                        key={summery.id}
                        summery={summery}
                        index={index}
                    ></Summery>)
                }
            </div>
        </div>
    );
};

export default Business;