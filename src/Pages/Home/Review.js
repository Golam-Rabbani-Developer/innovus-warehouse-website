import React from 'react';

const Review = ({ review }) => {
    const { name, company, text, picture, designation } = review;
    return (
        <div className="card -z-50  bg-base-100 shadow-xl py-12 border-b-4 border-secondary font-roboto w-[350px] max-h-[490px]" >
            <div className='flex items-center justify-around'>
                <div className="avatar">
                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={picture} alt="workers" />
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-xl font-oswald capitalize'>
                        {name}
                    </h2>
                    <p className='text-sm capitalize'>{company}</p>
                    <p className='text-sm capitalize'>{designation}</p>
                </div>
            </div>
            <div className="card-body">

                <p>{text}</p>
            </div>
        </div>
    );
};

export default Review;


