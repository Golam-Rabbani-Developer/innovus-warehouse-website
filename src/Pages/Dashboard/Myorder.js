import { secondary } from 'daisyui/src/colors';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebaseinit';
import Loading from '../Shared/Loading';

const Myorder = () => {
    const [user] = useAuthState(auth)
    const { isLoading, data: orders, refetch } = useQuery('orders', () =>
        fetch(`https://proud-lime-bluefish.cyclic.app/userorders/${user?.email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${(localStorage.getItem("accessToken"))}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading type="spokes" color="black"></Loading>
    }
    console.log(orders)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S/L No</th>
                            <th>Name</th>
                            <th>Order Quantity</th>
                            <th>Order Status</th>
                            <th>Paying Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order?.product?.name}</td>
                                    <td>Ordered Quantity {order?.product?.newQuantity}</td>
                                    <td>{order.pay ? <span className='bg-success'>{order.pay}</span> : <span className=' font-bold text-red-500'>Unpaid</span>}</td>
                                    <td>{order.pay ? <span className='font-bold text-success'>Paid</span> : <Link to={`/billings/${order?.product?._id}`}><button className=' btn-sm btn btn-secondary'>Pay Now</button></Link>}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Myorder;