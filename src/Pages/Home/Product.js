import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, picture, quantity, image } = product;

    return (
        <div className="card shadow-md">
            <figure className="px-10 pt-10">
                <img style={{ width: "100px", height: "100px" }} className='mx-auto' src={picture || image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center ">
                <h2 className="card-title">{name}</h2>
                <p><span className='font-bold'>Price :</span> <span className='text-slate-400 font-bold'>$ {price}</span></p>
                <p><span className='font-bold'>Quantity Available :</span> <span className='text-slate-400 font-bold'>{quantity} Pieces</span> </p>
            </div>
            <Link to={`/purchase/${_id}`}><button className="btn btn-primary w-full mt-8 rounded-none">Buy Now</button></Link>
        </div>
    );
};

export default Product;