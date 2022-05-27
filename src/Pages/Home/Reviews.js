import React, { useEffect, useState } from 'react';
import Review from './Review';
import { BsFillCaretLeftSquareFill, BsFillCaretRightSquareFill } from 'react-icons/bs'
import { useLocation } from 'react-router-dom';
const Reviews = () => {
    const [number, setNumber] = useState(3)
    const [reviews, setReviews] = useState([])
    const location = useLocation()
    useEffect(() => {
        fetch(`https://innovus-client.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data.reverse()))
    }, [])

    console.log(reviews)
    return (

        <div className={`${location.pathname === "/reviews" ? "mb-40 px-10 lg:px-40 mt-12  " : "mt-64  mb-40 px-10 lg:px-40 relative"} `}>
            {
                location.pathname === "/reviews" &&
                <h2 className='mt-4 font-oswald text-3xl font-bold text-slate-900'>Listen All Our Clients Voice?</h2>
            }
            {location.pathname === '/reviews' ||
                <div className='flex flex-col md:flex-row items-start lg:items-center justify-between font-roboto gap-5 lg:gap-12'>

                    <div className='lg:w-6/12'>
                        <p className='font-roboto text-sm text-orange-500 '>Testimonials</p>
                        <h2 className='mt-4 font-oswald text-3xl font-bold text-slate-900'>What Our Client Say?</h2>
                        <div className='h-[4px] w-[100px] bg-primary hidden lg:block mt-5'></div>
                    </div>
                    <p className='text-slate-600 mt-4 lg:mt-0 lg:w-6/12'>Innovus Are A Industry & Manufacturing Services Provider Institutions. Suitable For Factory, Manufacturing, Industry, Engineering, Construction And Any Related Industry Care Field.</p>

                </div>
            }
            <div className='flex flex-col lg:flex-row items-center justify-around overflow-x-hidden gap-5 mt-10'>
                {
                    reviews.slice(0, number).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                {
                    location.pathname === "/reviews" &&
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <div className={`flex items-center justify-between gap-4 mt-6  left-0 absolute top-[300px] w-full px-12 ${location.pathname === "/reviews" ? "hidden" : "block"}`}>
                <BsFillCaretLeftSquareFill className={`text-2xl ${number < 1 && "hidden"}`} onClick={() => setNumber(number - 1)} />
                <BsFillCaretRightSquareFill onClick={() => setNumber(number + 1)} className={`text-2xl ${number === reviews.length && "hidden"}`} />
            </div>
        </div>
    );
};

export default Reviews;

