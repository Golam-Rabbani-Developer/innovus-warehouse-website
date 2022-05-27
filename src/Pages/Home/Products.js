import React, { memo } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import PrimaryBtn from '../Shared/PrimaryBtn/PrimaryBtn';
import Product from './Product';

const Products = () => {
    const { isLoading, data: products } = useQuery('products', () =>
        fetch(`https://innovus-client.herokuapp.com/products`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading type="spokes" color="black"></Loading>
    }

    return (
        <div className='mt-64  mb-40 px-10 lg:px-40 relative'>
            <div className='flex flex-col md:flex-row items-start lg:items-center justify-between font-roboto gap-5 lg:gap-12'>
                <div className='lg:w-6/12'>
                    <p className='font-roboto text-sm text-orange-500 '>Top sold Product</p>
                    <h2 className='mt-4 font-oswald text-3xl font-bold text-slate-900'>Innovus Machinaries Collection</h2>
                    <div className='h-[4px] w-[100px] bg-primary hidden lg:block mt-5'></div>
                </div>
                <p className='text-slate-600 mt-4 lg:mt-0 lg:w-6/12'>Innovus Are A Industry & Manufacturing Services Provider Institutions. Suitable For Factory, Manufacturing, Industry, Engineering, Construction And Any Related Industry Care Field.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                {
                    products?.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='w-[200px] mx-auto mt-12'>
                <Link to="/shop">
                    <PrimaryBtn>Explore More</PrimaryBtn>
                </Link>
            </div>
        </div>
    );
};

export default memo(Products);