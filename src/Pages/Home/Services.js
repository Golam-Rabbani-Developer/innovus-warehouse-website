import React, { useEffect, useState } from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn/PrimaryBtn';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('servicedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='flex flex-col lg:flex-row  justify-center px-10 lg:px-32 lg:h-[400px] gap-5'>
            <div className='flex items-center justify-between flex-col'>
                <h2 className='font-oswald font-bold text-3xl text-center lg:text-start lg:mt-8'>Exceptional Services We Offer</h2>
                <PrimaryBtn >Explore More</PrimaryBtn>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    services.slice(0, 6)?.map((service, index) => <Service
                        key={service.id}
                        service={service}
                        index={index}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;