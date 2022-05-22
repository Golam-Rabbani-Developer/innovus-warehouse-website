

import React from 'react';
import Blog from './Blog';
import { BiRightArrow } from "react-icons/bi"

const blogs = [
    { id: 1, name: " Industry & Materials Innovation", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id! Asperiores odio nostrum rerum in!", img: 'https://i.ibb.co/fqxgYdP/resized-2.png' },
    { id: 2, name: " Building Construction Plans", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id! Asperiores odio nostrum rerum in!", img: 'https://i.ibb.co/DWVp6k2/resized.png' },
    { id: 3, name: "Uses of Engineering Tractors", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id! Asperiores odio nostrum rerum in!", img: 'https://i.ibb.co/xKZrgb6/resized-3-1.png' },
]


const Blogs = () => {
    return (
        <div className='gap-4 grid grid-cols-1 lg:grid-cols-4 my-40 lg:px-44 px-10 font-roboto py-20'>
            <div className='space-y-10 text-center lg:text-left mb-8 lg:mb-0'>
                <h2 className='font-bold text-4xl font-oswald  mb-8 lg:mb-0 '>Our Latest News Of This Year</h2>
                <p className='lg:border-b-2 text-sm border-primary flex items-center gap-3'><BiRightArrow className='text-secondary' /> Design And Industry </p>
                <p className='lg:border-b-2 text-sm border-primary flex items-center gap-3'><BiRightArrow className='text-secondary' /> Building Lasting Our Business</p>
                <p className='lg:border-b-2 text-sm border-primary flex items-center gap-3'><BiRightArrow className='text-secondary' />  Best Civil Engineering Projects</p>
                <p className='lg:border-b-2 text-sm border-primary flex items-center gap-3'><BiRightArrow className='text-secondary' /> Industry Materials Of Innovation</p>
                <p className='lg:border-b-2 text-sm border-primary flex items-center gap-3'><BiRightArrow className='text-secondary' />  Building Construction Plans</p>
                <p className='lg:border-b-2 text-sm border-primary flex items-center gap-3'><BiRightArrow className='text-secondary' />Uses of Engineering Tractors</p>
            </div>


            {blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
            ></Blog>)}


        </div>
    );
};

export default Blogs;