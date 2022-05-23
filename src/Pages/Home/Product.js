import React from 'react';

const Product = ({ product }) => {
    const { name, price, picture, quantity } = product;
    return (
        <div class="card transition ease-in-out delay-150 shadow-sm shadow-secondary bg-blue-50 hover:scale-95 duration-200">
            <figure class="px-10 pt-10">
                <img style={{ width: "100px", height: "100px" }} className=' mx-auto' src={picture} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center ">
                <h2 class="card-title">{name}</h2>
                <p>Price : {price}</p>
                <p>Quantity Available : {quantity}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;