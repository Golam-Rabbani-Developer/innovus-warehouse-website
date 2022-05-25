import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, picture, quantity } = product;
    return (
        <div class="card border-b-2 border-secondary transition ease-in-out delay-150  bg-blue-50 hover:scale-95 duration-200">
            <figure class="px-10 pt-10">
                <img style={{ width: "100px", height: "100px" }} className=' mx-auto' src={picture} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center ">
                <h2 class="card-title">{name}</h2>
                <p><span className='font-bold'>Price :</span> <span className='text-slate-400 font-bold'>$ {price}</span></p>
                <p><span className='font-bold'>Quantity Available :</span> <span className='text-slate-400 font-bold'>{quantity} Pieces</span> </p>
                <Link to={`/purchase/${_id}`}> <button class="btn btn-primary w-full mt-8">Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Product;