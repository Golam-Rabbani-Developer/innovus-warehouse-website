import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="Dashboard-page" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="Dashboard-page" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-secondary text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard/myprofile">Myprofile</Link></li>
                        <li><Link to="/dashboard/myorders">Myorders</Link></li>
                        <li><Link to="/dashboard/addreview">Add Review</Link></li>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/orders">All Orders</Link></li>
                        <li><Link to="/dashboard/allproducts">All Products</Link></li>
                        <li><Link to="/dashboard/addproduct">Add Products</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;