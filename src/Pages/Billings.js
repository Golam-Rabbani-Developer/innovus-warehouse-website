import { Elements } from '@stripe/react-stripe-js';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { Link, useLocation, useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from './Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebaseinit';


const stripePromise = loadStripe('pk_test_51L0mirGh3CcvB5xE649I2ZRsP8ds0hsUJirzcxky8hA7cfTdTvTdLD2a18T7q27fnC3efjjSHYdruvEOFweezeyc00eH8SOPQO');
const Billings = () => {
    const [insertId, setInsertId] = useState(null)
    const [user] = useAuthState(auth)
    const location = useLocation()
    const [show, setShow] = useState(false)
    const [clientSecret, setClientSecret] = useState("");
    const [paymentError, setPaymentError] = useState(null)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { id } = useParams()
    const { isLoading, data: product, refetch } = useQuery('product', () =>
        fetch(`https://proud-lime-bluefish.cyclic.app/product/${id}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${(localStorage.getItem("accessToken"))}`
            }
        }).then(res =>
            res.json()
        )
    )


    const newPrice = parseInt(product?.price * product?.newQuantity).toFixed(2)


    if (isLoading) {
        return <Loading type="spokes" color="black"></Loading>
    }



    const onSubmit = (data) => {
        const order = {
            username: data.name,
            userEmail: data.email,
            userAddress: data.address,
            userShippingAddress: data.shippingaddress,
            userPhone: data.phone,
            product,
            pay: '',
            shift: false,
        }
        fetch(`https://proud-lime-bluefish.cyclic.app/orders/${user?.email}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ order })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInsertId(data.insertedId)
                if (data.insertedId) {
                    toast.success("Your Order Is Confirmed. Pay Now")
                    setShow(!show)
                    reset()
                }

            })

    }


    return (
        <div className='flex justify-center gap-8 font-roboto my-32 flex-col lg:flex-row'>
            <div className="bg-slate-100 p-5 rounded-md ">
                <h2 className='text-2xl font-bold mb-4'>{
                    show ? "Pay Now" : "Billing Address"
                }
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className={`${show ? "hidden" : "block"}`}>

                    <div className='flex items-center justify-center flex-col lg:flex-row gap-5 bg-slate-100'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input id='name' value={user?.displayName} name="name" readOnly type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs capitalize"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Email Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.name?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors?.name?.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input id='email' name="email" value={user?.email} readOnly type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.email?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors?.email?.message}</span>}
                            </label>
                        </div>
                    </div>
                    <div className='flex items-center justify-center flex-col lg:flex-row gap-5'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input id='phone' name="phone" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Email Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.phone?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors?.phone?.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input id='address' name="address" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "Email Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.address?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors?.address?.message}</span>}
                            </label>
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Shipping Address</span>
                        </label>
                        <textarea id='shippingaddress' name="shippingaddress" type="text" placeholder="Type here" className="input input-bordered h-[100px] w-full "
                            {...register("shippingaddress", {
                                required: {
                                    value: true,
                                    message: "Email Required"
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.shippingaddress?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors?.shippingaddress?.message}</span>}
                        </label>
                    </div>
                    <input type="submit" value="Place Order" className='border-2 mt-12 btn-secondary btn border-none rounded-none focus:outline-none w-full' />
                </form>
                <div className={`my-12 w-[400px] ${show ? "block" : "hidden"}`}>
                    <p className='font-roboto mb-4'>You Paying Amount : $ {(product?.price * product?.newQuantity).toFixed(2)}</p>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm onSubmit={onSubmit} handleSubmit={handleSubmit} newPrice={newPrice} insertId={insertId} />
                    </Elements>
                </div>
            </div>

            <div className={`${show ? "hidden" : "block"}`}>
                <div className='flex items-center justify-center gap-4 flex-col'>
                    <div className='bg-slate-300 rounded-md'>
                        <img className='w-full ' src={product?.picture} alt="product-pic" />
                    </div>
                    <div className=' mt-10 space-y-4 w-full pl-20 lg:p-0'>
                        <h2 className='font-bold text-2xl text-secondary'>{product?.name}</h2>
                        <p className='font-bold text-xl text-slate-400'>Price Per Piece: $ {product?.price}</p>
                        <p className='font-bold text-red-500'>Order Quantity : <span className='text-slate-400'>{product?.newQuantity} Pieces</span></p>
                        <p className='font-bold text-xl'>Catrgory : <span className='text-slate-400'>Engineering</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billings;