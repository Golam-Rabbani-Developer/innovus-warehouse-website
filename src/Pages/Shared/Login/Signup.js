import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdAttachEmail } from "react-icons/md"
import { BiUserVoice } from 'react-icons/bi'
import { BsGoogle } from 'react-icons/bs'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebaseinit';
import Loading from '../Loading';
import useToken from '../../../hooks/useToken';

const Signup = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { token } = useToken(user || guser)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const words = ['W', 'e', 'l', 'c', 'o', 'm', 'e', 't', 'o', 'I', 'n', 'n', 'o', 'v', "u", "s"]
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    useEffect(() => {
        if (user || guser) {
            if (token) {
                navigate(from, { replace: true })
            }
        }
    }, [from, navigate, token, user, guser])

    if (loading || gloading || updating) {
        return <Loading type="spokes" color="black"></Loading>
    }



    let signInError;
    if (error || gerror || updateError) {
        signInError = <p className='text-red-500 font-bold my-3'>{error?.message || gerror?.message || updateError?.message}</p>
    }


    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        reset()
    }

    return (
        <div className='flex items-center justify-center  mx-auto gap-12 min-h-screen'>
            <div className="order-2 p-5 w-full bg-[#132B83] lg:m-0 min-h-screen py-28">
                <h2 className='text-2xl text-slate-100 font-bold text-center mt-4 font-satisfy uppercase'>In<span className='text-red-500'>noV</span>us</h2>

                <p className='text-2xl text-slate-100 font-bold text-center font-oswald'>Register Your Account</p>
                <form onSubmit={handleSubmit(onSubmit)} className='w-8/12 mx-auto'>

                    <div class="form-control w-full max-w-xs mt-[-30px]">
                        <label class="label relative top-12">
                            <span class="label-text text-slate-200 text-xl font-bold">Name</span>
                        </label>
                        <span className='bg-primary relative top-12 w-[38px] h-[48px] flex items-center justify-center text-white text-xl'><MdAttachEmail /></span>
                        <input id='name' name="name" type="text" placeholder="Your name" class="input input-bordered bg-slate-200  w-full max-w-xs rounded-none text-center"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name Required"
                                }
                            })}
                        />
                        <label class="label">
                            {errors?.name?.type === 'required' && <span class="label-text-alt text-red-400 font-bold">{errors?.name?.message}</span>}
                        </label>
                    </div>


                    <div class="form-control mt-[-30px] w-full max-w-xs">
                        <label class="label relative top-12">
                            <span class="label-text text-slate-200 text-xl font-bold">Email</span>
                        </label>
                        <span className='bg-primary relative top-12 w-[38px] h-[48px] flex items-center justify-center text-white text-xl'><MdAttachEmail /></span>
                        <input id='email' name="email" type="text" placeholder="Your Email" class="input input-bordered bg-slate-200  w-full max-w-xs rounded-none text-center"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email Required"
                                }
                            })}
                        />
                        <label class="label">
                            {errors?.email?.type === 'required' && <span class="label-text-alt text-red-400 font-bold">{errors?.email?.message}</span>}
                        </label>
                    </div>
                    <div class="form-control mt-[-30px] w-full max-w-xs">
                        <label class="label relative top-12">
                            <span class="label-text text-slate-200 font-bold text-xl">Password</span>
                        </label>
                        <span className='bg-primary relative top-12 w-[38px] h-[48px] flex items-center justify-center text-white text-xl'><BiUserVoice /></span>
                        <input id='password' name="password" type="password" placeholder="Your Password" class="input input-bordered bg-slate-200  w-full max-w-xs rounded-none text-center"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password Required"
                                }
                            })}
                        />
                        <label class="label">
                            {errors?.password?.type === 'required' && <span class="label-text-alt text-red-400 font-bold">{errors?.password?.message}</span>}
                        </label>
                    </div>

                    <div className='btn-link text-white mb-4 text-sm'>Forget Password</div>
                    <div>
                        {signInError}
                    </div>
                    <input type="submit" className='border-none opacity-100 btn btn-primary block  bg-primary max-w-xs w-full rounded-none text-slate-200 hover:opacity-80' />
                    <p className='text-white mt-1 text-center'>ALready registered ? <Link to="/login" className="btn-link">Login Now</Link></p>
                </form>
                <div className='font-roboto text-slate-50 w-8/12 mx-auto'>

                    <div class="divider font-oswald">Or Try With</div>
                    <div onClick={() => signInWithGoogle()} className='opacity-100 flex items-center border-[1px] border-secondary cursor-pointer justify-center gap-4 py-2 bg-gradient-to-r rounded-none from-purple-600 to-pink-600 hover:opacity-80 '>
                        <BsGoogle></BsGoogle>
                        Google
                    </div>
                </div>
            </div>
            <div className='text-secondary font-roboto hidden md:block text-right'>
                {
                    words.map((word, index) => <span className={`uppercase ml-4  font-oswald font-bold text-3xl  ${index === 0 || index === 3 || index === 6 || index === 9 || index === 12 ? "text-primary" : ''}`}>
                        {word}
                    </span>)
                }
                <div>
                    {
                        words.map((word, index) => <span className={`uppercase ml-4 text-slate-100 font-oswald font-bold text-3xl shadow-inner shadow-fuchsia-300 ${index === 3 || index === 6 || index === 9 ? "text-primary" : ''}`}>
                            {word}
                        </span>)
                    }
                </div>

                <p className='text-right font-oswald mt-4'>Founded in 1998 in Mirpur City, Dhaka, A&S ELECTRICAL SOLUTIONS set
                    its foot as an electrical supply and equipment trading and services company.
                    Over the years, the company has earned a reputation for excellence and
                    professionalism for continuously striving to meet - and even exceed - standards
                    which set the climate for a sustainable business relationship with its clients.</p>
            </div>
        </div>
    );
};

export default Signup;