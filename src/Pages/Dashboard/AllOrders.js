import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AllOrders = () => {
    const { isLoading, data: orders, refetch } = useQuery('orders', () =>
        fetch('http://localhost:5000/orders').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading type="spokes" color="black"></Loading>
    }

    // /shift/orders/:id
    const handleShiftBtn = (id) => {
        fetch(`http://localhost:5000/shift/orders/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast("Order is Shifted Now")
                    refetch()
                }
            })
    }
    const handledeleteBtn = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Order is Deleted Now")
                    refetch()
                }
            })
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>S/L No</th>
                            <th>Name</th>
                            <th>Order Quantity</th>
                            <th>Payment Status</th>
                            <th>Shift</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order?.product?.name}</td>
                                    <td className='font-semibold'>{order?.product?.newQuantity}</td>
                                    <td>{order.pay ? <span className='text-blue-500 font-bold'>Pending</span> : <span className=' font-bold text-red-500'>Unpaid</span>}</td>
                                    <td>{order.shift ? <span lassName='text-slate-800 font-bold' >Shifted</span> : <>{order.pay ? <button onClick={() => handleShiftBtn(order._id)} className=' btn-sm btn btn-secondary'>Shift</button> : <button onClick={() => handledeleteBtn(order._id)} className='font-bold  btn btn-error btn-sm bg-red-500 text-white'>X</button>}</>}


                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;