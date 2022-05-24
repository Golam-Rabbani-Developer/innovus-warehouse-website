import React from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data)
    const words = ['W', 'e', 'l', 'c', 'o', 'm', 'e', 't', 'o', 'I', 'n', 'n', 'o', 'v', "u", "s"]
    return (
        <div className='flex items-center justify-center  mx-auto gap-12 lg:px-36 min-h-screen'>
            <div className="bg-slate-100 order-2 p-5  w-full m-8 bg-gradient-to-tl from-purple-500 to-pink-500 lg:m-0">
                <h2 className='text-2xl text-slate-100 font-bold mb-4 text-center'>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-slate-200">Email</span>
                        </label>
                        <input id='email' name="email" type="text" placeholder="Your Email" class="input input-bordered bg-slate-200  w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email Required"
                                }
                            })}
                        />
                        <label class="label">
                            {errors?.email?.type === 'required' && <span class="label-text-alt text-slate-900 font-bold">{errors?.email?.message}</span>}
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-slate-200">Password</span>
                        </label>
                        <input id='password' name="password" type="text" placeholder="Your Password" class="input input-bordered bg-slate-200  w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password Required"
                                }
                            })}
                        />
                        <label class="label">
                            {errors?.password?.type === 'required' && <span class="label-text-alt text-slate-900 font-bold">{errors?.password?.message}</span>}
                        </label>
                    </div>

                    <div className='btn-link text-white mb-4 text-sm'>Forget Password</div>

                    <input type="submit" className='border-none opacity-100 btn btn-primary block  bg-gradient-to-r from-purple-600 to-pink-600 text-slate-200 hover:opacity-80' />
                </form>
                <SocialLogin></SocialLogin>
            </div>
            <div className='text-secondary font-roboto hidden lg:block text-right'>
                {
                    words.map((word, index) => <span className={`uppercase ml-4  font-oswald font-bold text-3xl shadow-sm shadow-fuchsia-400 ${index === 4 && "text-primary"}`}>
                        {word}
                    </span>)
                }
                <div>
                    {
                        words.map((word, index) => <span className={`uppercase ml-4 text-slate-100 font-oswald font-bold text-3xl shadow-inner shadow-fuchsia-300 ${index === 4 && "text-primary"}`}>
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

export default Login;