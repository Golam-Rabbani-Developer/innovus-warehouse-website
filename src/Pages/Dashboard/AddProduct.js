import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const formData = new FormData();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const apikey = `5a66a63248054df704d2d5ae383fd593`
    const onSubmit = (data) => {
        const url = `https://api.imgbb.com/1/upload?key=${apikey}`
        const image = data.file[0]

        formData.append("image", image)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const product = {
                        name: data.name,
                        description: data.description,
                        picture: result.data.url,
                        price: parseInt(data.price),
                        quantity: parseInt(data.quantity)
                    }
                    console.log(result, ".....................", result.url)
                    fetch("https://proud-lime-bluefish.cyclic.app/product", {
                        method: "POST",
                        headers: {
                            'content-type': "application/json",
                            'authorization': `Bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify({ product })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success("Your Product Is Added Successfully")
                            }
                            reset()
                        })
                }
            })

    }
    return (
        <div className='min-h-screen mt-48'>
            <div className={`border-2 border-slate-300 p-5 rounded-md`}>
                <h2 className='font-oswald text-xl text-center font-bold my-3'>Add Another Product</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full mx-auto'>
                    <div className='flex flex-col lg:flex-row items-center justify-center lg:gap-12'>
                        <div className="form-control mt-[-30px] w-full ">
                            <label className="label relative top-7">
                                <span className="label-text  font-bold ">Product Name</span>
                            </label>
                            <input type="text" />
                            <input id='name' name="name" type="name" className="input input-bordered  bg-slate-200  w-full  rounded-none text-center focus:outline-primary"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "name Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.name?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.name?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full ">
                            <label className="label ">
                                <span className="label-text   font-bold">Product Quantity</span>
                            </label>

                            <input id='quantity' name="quantity" type="text" className="input input-bordered  bg-slate-200  w-full max-w-xs rounded-none text-center focus:outline-primary"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: "quantity Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.quantity?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.quantity?.message}</span>}
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center lg:flex-row lg:gap-12'>
                        <div className="form-control w-full">
                            <label className="label ">
                                <span className="label-text   font-bold">Product Price</span>
                            </label>

                            <input id='price' name="price" type="text" className="input input-bordered  bg-slate-200  w-full max-w-xs rounded-none text-center focus:outline-primary"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: "price Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.price?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.price?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full ">
                            <label className="label ">
                                <span className="label-text   font-bold">Select Image</span>
                            </label>

                            <input id='image' name="image" type="file" className="input input-bordered  bg-slate-200  w-full max-w-xs rounded-none text-center focus:outline-primary"
                                {...register("file", {
                                    required: {
                                        value: true,
                                        message: "image Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.file?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.file?.message}</span>}
                            </label>
                        </div>


                    </div>

                    <div className="form-control w-full">
                        <label className="label ">
                            <span className="label-text   font-bold">Product Description</span>
                        </label>

                        <input id='description' name="description" type="text" className="input input-bordered  bg-slate-200 h-[200px]  w-full rounded-none text-center focus:outline-primary"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "description Required"
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.description?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.description?.message}</span>}
                        </label>
                    </div>


                    <input type="submit" value={"Add Product"} className='border-none btn btn-primary block bg-primary  w-full rounded-none text-slate-200 hover:opacity-80 ' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;