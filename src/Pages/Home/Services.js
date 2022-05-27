import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PrimaryBtn from '../Shared/PrimaryBtn/PrimaryBtn';
import Service from './Service';

const Services = () => {
    const location = useLocation()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://innovus-client.herokuapp.com/services', {
            method: "GET",
            headers: {
                "authorization": `Bearer ${(localStorage.getItem("accessToken"))}`
            }
        })
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const newServices = services?.splice(0, 6)
    return (
        <div className={`${location.pathname === "/services" || "flex flex-col lg:flex-row  justify-center px-10 lg:px-32  gap-5"}`}>
            {location.pathname === "/services" ||
                <div className='flex items-center justify-between flex-col lg:h-[600px]'>
                    <h2 className='font-oswald font-bold text-3xl text-center lg:text-start lg:mt-8'>Exceptional Services We Offer</h2>
                    <Link to='/services'> <PrimaryBtn >Explore More</PrimaryBtn></Link>
                </div>
            }
            {
                location.pathname === "/" || location.pathname === "/home" ?
                    <div className='grid grid-cols-1 lg:grid-cols-3'>

                        {newServices?.map((service, index) => <Service
                            key={service._id}
                            service={service}
                            index={index}
                        ></Service>)
                        }
                    </div>


                    :
                    <div className='grid grid-cols-1 lg:grid-cols-3 mb-16 mt-24 mx-auto lg:px-36'>
                        {
                            services?.map((service, index) => <Service
                                key={service._id}
                                service={service}
                                index={index}
                            ></Service>)
                        }
                    </div>
            }

        </div>
    );
};

export default Services;