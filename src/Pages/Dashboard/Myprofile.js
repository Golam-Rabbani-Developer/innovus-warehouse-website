import React, { useState } from 'react';
import { useAuthState, useUpdateEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebaseinit';
import Loading from '../Shared/Loading';

const Myprofile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const [show, setShow] = useState(false)
    const formData = new FormData();
    const [updateEmail, updating] = useUpdateEmail(auth);
    const { isLoading, data: updateUser, refetch } = useQuery('updateduser', () =>
        fetch(`http://localhost:5000/user/${user?.email}`).then(res =>
            res.json()
        )
    )
    if (isLoading || updating) {
        return <Loading type="spokes" color="black"></Loading>
    }
    const apikey = `28eb00c7dfdf689359a738f32eec679d`
    const onSubmit = async (data) => {
        const url = `https://api.imgbb.com/1/upload?key=${apikey}`
        const image = data.file[0];
        const email = user?.email;
        await updateEmail({ email: data.email })
        console.log(user, data.email)
        formData.append("image", image)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const newUser = {
                        email,
                        name: data.name,
                        address: data.address,
                        picture: result.data.url,
                    }

                    fetch(`http://localhost:5000/user/${email}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                refetch()

                                toast("Your Profile Is Updated Now")
                            }
                        })
                }
            })
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-32 lg:mt-0'>
            <div class="card bg-base-100 w-[300px]  shadow-xl">
                <div className="avatar">
                    <div class="w-24 mx-auto mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={updateUser?.picture || user?.photoURL} className="rounded-xl" alt="Images" />
                    </div>
                </div>


                <div class="card-body items-center text-center">
                    <h2 class="card-title capitalize">{updateUser?.name || user?.displayName}</h2>
                    <div class="card-actions">
                        <button onClick={() => setShow(!show)} class={`btn btn-primary ${show ? "hidden" : "block"}`}>Update profile</button>
                    </div>
                </div>
            </div>
            <div className={`w-[300px] border-2 border-slate-300 p-5 rounded-md ${show ? "block" : "hidden"}`}>
                <h2 className='font-oswald text-xl text-center font-bold my-3'>Update your Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full mx-auto'>
                    <div class="form-control mt-[-30px] w-full ">
                        <label class="label relative top-7">
                            <span class="label-text  font-bold ">Name</span>
                        </label>
                        <input type="text" />
                        <input id='name' name="name" type="name" placeholder="Your name" class="input input-bordered  bg-slate-200  w-full  rounded-none text-center focus:outline-primary"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "name Required"
                                }
                            })}
                        />
                        <label class="label">
                            {errors?.name?.type === 'required' && <span class="label-text-alt text-red-400 font-bold">{errors?.name?.message}</span>}
                        </label>
                    </div>

                    <div class="form-control w-full ">
                        <label class="label ">
                            <span class="label-text   font-bold">Email</span>
                        </label>

                        <input id='email' name="email" type="text" placeholder="Your Email" class="input input-bordered  bg-slate-200  w-full max-w-xs rounded-none text-center focus:outline-primary"
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
                    <div class="form-control w-full">
                        <label class="label ">
                            <span class="label-text   font-bold">Address</span>
                        </label>

                        <input id='address' name="address" type="text" placeholder="Your address" class="input input-bordered  bg-slate-200  w-full max-w-xs rounded-none text-center focus:outline-primary"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "address Required"
                                }
                            })}
                        />
                        <label class="label">
                            {errors?.address?.type === 'required' && <span class="label-text-alt text-red-400 font-bold">{errors?.address?.message}</span>}
                        </label>
                    </div>
                    <div class="form-control w-full ">
                        <label class="label ">
                            <span class="label-text   font-bold">Image</span>
                        </label>

                        <input id='image' name="image" type="file" placeholder="Your image" class="input input-bordered  bg-slate-200  w-full max-w-xs rounded-none text-center focus:outline-primary"
                            {...register("file", {
                                required: {
                                    value: true,
                                    message: "image Required"
                                }
                            })}
                        />
                        <label class="label">
                            {errors?.image?.type === 'required' && <span class="label-text-alt text-red-400 font-bold">{errors?.image?.message}</span>}
                        </label>
                    </div>

                    <input type="submit" value={"update"} className='border-none opacity-100 btn btn-primary block  bg-primary max-w-xs w-full rounded-none text-slate-200 hover:opacity-80 ' />
                </form>
            </div>
        </div>
    );
};

export default Myprofile;