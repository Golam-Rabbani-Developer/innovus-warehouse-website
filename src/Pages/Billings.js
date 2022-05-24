import { Elements } from '@stripe/react-stripe-js';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from './Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51L0mirGh3CcvB5xE649I2ZRsP8ds0hsUJirzcxky8hA7cfTdTvTdLD2a18T7q27fnC3efjjSHYdruvEOFweezeyc00eH8SOPQO');
const Billings = () => {

    const [clientSecret, setClientSecret] = useState("");
    const [paymentError, setPaymentError] = useState(null)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { id } = useParams()
    const { isLoading, data: product, refetch } = useQuery('product', () =>
        fetch(`http://localhost:5000/product/${id}`).then(res =>
            res.json()
        )
    )

    const { name, picture, description, price, newQuantity } = product;
    const newPrice = parseInt(price * newQuantity).toFixed(2)


    if (isLoading) {
        return <Loading type="spokes" color="black"></Loading>
    }



    const onSubmit = (data) => { console.log("this") }


    return (
        <div className='flex justify-center gap-8 font-roboto my-32 flex-col lg:flex-row'>
            <div className="bg-slate-100 p-5 rounded-md ">
                <h2 className='text-2xl font-bold mb-4'>Billing Address</h2>
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className='flex items-center justify-center flex-col lg:flex-row gap-5 bg-slate-100'>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input id='name' name="name" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Email Required"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors?.name?.type === 'required' && <span class="label-text-alt text-red-500 font-bold">{errors?.name?.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input id='email' name="email" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email Required"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors?.email?.type === 'required' && <span class="label-text-alt text-red-500 font-bold">{errors?.email?.message}</span>}
                            </label>
                        </div>
                    </div>
                    <div className='flex items-center justify-center flex-col lg:flex-row gap-5'>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input id='phone' name="phone" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Email Required"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors?.phone?.type === 'required' && <span class="label-text-alt text-red-500 font-bold">{errors?.phone?.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input id='address' name="address" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "Email Required"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors?.address?.type === 'required' && <span class="label-text-alt text-red-500 font-bold">{errors?.address?.message}</span>}
                            </label>
                        </div>
                    </div>

                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text">Payable Amount</span>
                        </label>
                        <input id='amount' name="amount" readOnly value={`$ ${(price * newQuantity).toFixed(2)}`} type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg focus:outline-none font-bold"
                            {...register("amount", {
                                required: {
                                    value: true,
                                    message: "Email Required"
                                }
                            })}
                        />
                        <label class="label">
                            {errors?.amount?.type === 'required' && <span class="label-text-alt text-red-500 font-bold">{errors?.amount?.message}</span>}
                        </label>
                    </div>

                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Shipping Address</span>
                        </label>
                        <textarea id='shippingaddress' name="shippingaddress" type="text" placeholder="Type here" class="input input-bordered h-[100px] w-full "
                            {...register("shippingaddress", {
                                required: {
                                    value: true,
                                    message: "Email Required"
                                }
                            })}
                        />
                        <label class="label">
                            {errors?.shippingaddress?.type === 'required' && <span class="label-text-alt text-red-500 font-bold">{errors?.shippingaddress?.message}</span>}
                        </label>
                    </div>
                    {/* <input type="submit" className='border-2 border-slate-400 w-[18px] h-[18px]' /> */}
                </form>
                <div className='my-12'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm onSubmit={onSubmit} handleSubmit={handleSubmit} newPrice={newPrice} id={id} />
                    </Elements>
                </div>
            </div>

            <div className=''>
                <div className='flex items-center justify-center gap-4 flex-col'>
                    <div className='bg-slate-300 rounded-md'>
                        <img className='w-full ' src={picture} alt="product-pic" />
                    </div>
                    <div className=' mt-10 space-y-4 w-full pl-20 lg:p-0'>
                        <h2 className='font-bold text-2xl text-secondary'>{name}</h2>
                        <p className='font-bold text-xl text-slate-400'>Price Per Piece: $ {price}</p>
                        <p className='font-bold text-red-500'>Order Quantity : <span className='text-slate-400'>{newQuantity} Pieces</span></p>
                        <p className='font-bold text-xl'>Catrgory : <span className='text-slate-400'>Engineering</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billings;