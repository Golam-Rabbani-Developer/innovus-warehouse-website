import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from './Shared/Loading';

const Purchase = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [newQuantity, setNewQuantity] = useState(null)
    const { id } = useParams()
    const { isLoading, data: product, refetch } = useQuery('product', () =>
        fetch(`http://localhost:5000/product/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading type="spokes" color="black"></Loading>
    }
    const { name, picture, description, price, quantity } = product;


    const handleOrderBtn = () => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${(localStorage.getItem("accessToken"))}`
            },
            body: JSON.stringify({ newQuantity, product })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    navigate(`/billings/${id}`)
                }
            })
    }

    return (
        <div className='mt-44 lg:w-6/12 mx-auto font-roboto'>
            <div className='flex items-center justify-center gap-4 flex-col lg:flex-row'>
                <div className='bg-slate-300'>
                    <img className='w-full' src={picture} alt="product-pic" />
                </div>
                <div className='pl-20 mt-10 lg:mt-0 space-y-4 w-full lg:w-auto'>
                    <h2 className='font-bold text-2xl text-secondary'>{name}</h2>
                    <p className='font-bold text-xl text-slate-400'>$ {price}</p>
                    <p className='font-bold text-red-500'>Quantity Available : <span className='text-slate-400'>{quantity} Pieces</span></p>
                    <p className='font-bold text-red-500'><span className='text-slate-400'>Minimum Order Quantity <span className='text-red-500'>50</span> Pieces</span></p>
                    <p className='font-bold text-red-500'><span className='text-slate-400'>Maximum Order Quantity <span className='text-red-500'>{quantity}</span> Pieces</span></p>

                    <div className='flex items-center justify-start gap-3 '>
                        <input title='Min Order 50 pieces' onChange={(e) => setNewQuantity(e.target.value)} type="text" placeholder='Quantity' required className='form-control w-[90px] input border-2 border-slate-400 rounded-none focus:outline-none' />
                        <button disabled={newQuantity < 50 || newQuantity > quantity} onClick={() => handleOrderBtn()} className="btn btn-primary rounded-none">Purchase</button>
                    </div>

                    <p className='font-bold text-xl'>Catrgory : <span className='text-slate-400'>Engineering</span></p>
                </div>
            </div>
            <div className='mt-6 lg:mt-0 p-16 lg:p-8'>
                <div className='flex items-center gap-2 justify-start '>
                    <button onClick={() => setShow(!show)} className={`btn border-slate-400 text-black  btn-primary rounded-none ${show ? "border-b-0 btn-primary" : "btn-outline"}`}>Description</button>
                    <button onClick={() => setShow(!show)} className={`btn border-slate-400 text-black btn-primary rounded-none ${show ? "btn-outline" : "border-b-0 btn-primary"}`}>Reviews</button>
                </div>
                <div className={`border-2 p-10 border-slate-400 ${show ? "block" : "hidden"}`}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque assumenda rem amet eligendi atque architecto vitae facere hic voluptas, cupiditate iusto reprehenderit dolorem, nam saepe quis qui enim totam corporis animi excepturi.</p>
                </div>
                <div className={`border-2 p-10 border-slate-400 ${show ? "hidden" : "block"}`}>
                    <h2 className='font-roboto text-xl font-bold mb-5'>Place Your Reviews</h2>
                    <div className='flex items-center justify-start gap-4'>
                        <input type="text" name='name' placeholder='Name' className='form-control input border-2 border-slate-400 rounded-none focus:outline-none  w-6/12' />
                        <input type="text" email='email' placeholder='Email' className='form-control input border-2 border-slate-400 rounded-none  focus:outline-none w-6/12' />
                    </div>

                    <textarea placeholder='Your Message' className='h-[200px] pl-10 pt-10 rounded-sm w-full mt-4  border-2 form-control border-slate-400' name="message" id="message" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    );
};

export default Purchase;