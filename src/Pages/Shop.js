import React from 'react';
import useProducts from '../hooks/useProducts';
import Product from './Home/Product';
import { BiRightArrow } from "react-icons/bi"
import { BsSearch } from 'react-icons/bs'

const Shop = () => {
    const url = `http://localhost:5000/products`
    const { products } = useProducts(url)
    return (
        <div className='flex flex-col lg:flex-row justify-center gap-8'>
            <div>
                <div class="form-control w-full max-w-xs">
                    <span className='bg-primary relative top-12 w-[38px] h-[48px] flex items-center justify-center text-white text-xl'><BsSearch /></span>
                    <input id='email' name="email" type="text" placeholder="Your Email" class="input input-bordered bg-slate-200  w-full max-w-xs rounded-none text-center focus:outline-none"
                    />
                </div>
                <div className='font-roboto space-y-4'>
                    <p className='font-bold text-2xl font-oswald mt-10'>Category</p>
                    <p className='cursor-pointer lg:border-b-2 text-sm py-3 border-primary flex items-center gap-3 hover:bg-slate-300 '><BiRightArrow className='text-secondary' /> Machinaries </p>
                    <p className='cursor-pointer lg:border-b-2 text-sm py-3 border-primary flex items-center gap-3 hover:bg-slate-300 '><BiRightArrow className='text-secondary' /> Tools </p>
                    <p className='cursor-pointer lg:border-b-2 text-sm py-3 border-primary flex items-center gap-3 hover:bg-slate-300 '><BiRightArrow className='text-secondary' /> Paint and Brush</p>
                    <p className='cursor-pointer lg:border-b-2 text-sm py-3 border-primary flex items-center gap-3 hover:bg-slate-300 '><BiRightArrow className='text-secondary' /> Electronics </p>
                    <p className='cursor-pointer lg:border-b-2 text-sm py-3 border-primary flex items-center gap-3 hover:bg-slate-300 '><BiRightArrow className='text-secondary' />Guide</p>

                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 mb-12'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;    