import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebaseinit';
import Loading from '../Shared/Loading';

const Addreview = () => {
    const formData = new FormData();
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { isLoading, data: updateUser, refetch } = useQuery('updateduser', () =>
        fetch(`https://innovus-client.herokuapp.com/user/${user?.email}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading type="spokes" color="black"></Loading>
    }
    const apikey = `28eb00c7dfdf689359a738f32eec679d`


    const onSubmit = (data) => {
        const url = `https://api.imgbb.com/1/upload?key=${apikey}`
        const image = data.file[0]
        formData.append("image", image)
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    const review = {
                        designation: data.designation,
                        text: data.message,
                        name: updateUser?.name,
                        email: updateUser?.email,
                        picture: result.data.url,
                    }
                    fetch('https://innovus-client.herokuapp.com/review', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({ review })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data) {
                                toast("Thanks For Placing Your Review")
                                reset()
                            }
                        })

                }
            })

    }
    return (
        <div className='my-8'>
            <div className={`border-2 p-10 border-slate-400 rounded-md`}>
                <h2 className='font-roboto text-xl font-bold mb-5'>Place Your Reviews</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex items-center justify-start gap-4'>
                        <div class="form-control w-full max-w-xs">
                            <input id='companyname' name="companyname" type="text" placeholder="Your Company" class="input input-bordered bg-slate-200  w-full max-w-xs rounded-none text-center"
                                {...register("companyname", {
                                    required: {
                                        value: true,
                                        message: "Company Name Required"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors?.companyname?.type === 'required' && <span class="label-text-alt text-red-400 font-bold">{errors?.companyname?.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <input id='designation' name="designation" type="text" placeholder="Designation" class="input input-bordered bg-slate-200  w-full max-w-xs rounded-none text-center"
                                {...register("designation", {
                                    required: {
                                        value: true,
                                        message: "Designation Required"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors?.designation?.type === 'required' && <span class="label-text-alt text-red-400 font-bold">{errors?.designation?.message}</span>}
                            </label>
                        </div>

                    </div>



                    <div class="form-control w-full ">
                        <input id='image' name="image" type="file" placeholder="Your image" class="input    w-full max-w-xs rounded-none text-center focus:outline-none ml-[-16px]"
                            {...register("file", {
                                required: {
                                    value: true,
                                    message: "image Required"
                                }
                            })}
                        />
                        <label class="label">
                            {errors?.file?.type === 'required' && <span class="label-text-alt text-red-400 font-bold">{errors?.file?.message}</span>}
                        </label>
                    </div>

                    <textarea placeholder='Your Message' className='h-[200px] pl-10 pt-10 rounded-sm w-full mt-4  border-2 form-control border-slate-400' name="message" id="message" cols="30" rows="10"
                        {...register("message", {
                            required: {
                                value: true,
                                message: "Message Required"
                            }
                        })}
                    ></textarea>
                    {errors?.message?.type === 'required' && <span class="label-text-alt text-red-400 font-bold">{errors?.message?.message}</span>}
                    <input type="submit" className='border-none opacity-100 btn btn-primary block  bg-primary max-w-lg w-full rounded-none text-slate-200 hover:opacity-80 mt-6' />
                </form>
            </div>
        </div>
    );
};

export default Addreview;