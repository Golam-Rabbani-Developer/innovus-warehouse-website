import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';

const Allproducts = () => {
    const [modalProduct, setModalProduct] = useState(null)
    const { isLoading, data: products, refetch } = useQuery('products', () =>
        fetch('https://proud-lime-bluefish.cyclic.app/products', {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading type="spokes" color="black"></Loading>
    }

    return (
        <div className='mt-48 min-h-screen'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S/L No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>
                                <tr>
                                    <th className='font-semibold'>{index + 1}</th>
                                    <td className='font-semibold'><img className='w-[80px] h-[80px]' src={product?.picture} alt="" /></td>
                                    <td className='font-semibold'>{product?.name}</td>
                                    <td className='font-semibold'>{product?.quantity}</td>
                                    <td className='font-semibold'>{product?.price}</td>
                                    <td>
                                        <label onClick={() => setModalProduct(product)} htmlFor="deleting-modal" className="btn btn-sm btn-secondary">X</label>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
                {
                    modalProduct && <DeleteModal refetch={refetch} product={modalProduct} setModalProduct={setModalProduct}></DeleteModal>
                }
            </div>
        </div>
    );
};

export default Allproducts;