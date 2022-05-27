import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, picture, quantity, image } = product;

    return (
        <div class="card shadow-md">
            <figure class="px-10 pt-10">
                <img style={{ width: "100px", height: "100px" }} className='mx-auto' src={picture || image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center ">
                <h2 class="card-title">{name}</h2>
                <p><span className='font-bold'>Price :</span> <span className='text-slate-400 font-bold'>$ {price}</span></p>
                <p><span className='font-bold'>Quantity Available :</span> <span className='text-slate-400 font-bold'>{quantity} Pieces</span> </p>
            </div>
            <Link to={`/purchase/${_id}`}><button class="btn btn-primary w-full mt-8 rounded-none">Buy Now</button></Link>
        </div>
    );
};

export default Product;