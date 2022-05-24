import React from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data)
    return (
        <div>
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
                        <input id='amount' name="amount" type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg focus:outline-none font-bold"
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
                    <input type="submit" className='border-2 border-slate-400' />
                </form>
            </div>
        </div>
    );
};

export default Signup;