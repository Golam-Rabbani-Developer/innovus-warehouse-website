import React from 'react';

const Blog = ({ blog }) => {
    const { name, desc, img } = blog;
    return (
        <div className="card w-[250px] mx-auto border-b-2 border-primary mt-10 lg:mt-0">
            <figure><img className='h-[200px] w-[250px] rounded-md' src={img} alt="Shoes" /></figure>
            <div className="card-body bg-blue-50 ">
                <h2 className="font-oswald text-2xl font-bold">
                    {name}
                </h2>
                <p>{desc}</p>
                <div className='text-left'>
                    <button className="btn btn-link capitalize">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;