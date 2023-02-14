import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const { admin } = useAdmin()
    const location = useLocation()
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="Dashboard-page" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="Dashboard-page" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-secondary text-white mt-16">
                        <li><Link className={`${location.pathname === "/dashboard" || location.pathname === "/dashboard/myprofile" ? "bg-primary" : ""}`} to="/dashboard/myprofile">Myprofile</Link></li>

                        {

                            admin ?
                                <>

                                    <li><Link className={`${location.pathname.toLowerCase().includes("users") ? "bg-primary" : ""}`} to="/dashboard/users">All Users</Link></li>
                                    <li><Link className={`${location.pathname.toLowerCase().includes("orders") ? "bg-primary" : ""}`} to="/dashboard/orders">All Orders</Link></li>
                                    <li><Link className={`${location.pathname.toLowerCase().includes("products") ? "bg-primary" : ""}`} to="/dashboard/allproducts">All Products</Link></li>
                                    <li><Link className={`${location.pathname.toLowerCase().includes("addproduct") ? "bg-primary" : ""}`} to="/dashboard/addproduct">Add Products</Link></li>

                                </>
                                :
                                <>

                                    <li><Link className={`${location.pathname.toLowerCase().includes("myorders") ? "bg-primary" : ""}`} to="/dashboard/myorders">Myorders</Link></li>
                                    <li><Link className={`${location.pathname.toLowerCase().includes("addreview") ? "bg-primary" : ""}`} to="/dashboard/addreview">Add Review</Link></li></>

                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;