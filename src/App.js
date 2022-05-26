import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header';
import { ToastContainer } from 'react-toastify';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase';
import Billings from './Pages/Billings';
import Login from './Pages/Shared/Login/Login';
import Signup from './Pages/Shared/Login/Signup';
import RequireAuth from './RequireAuth';
import Shop from './Pages/Shop';
import Footer from './Pages/Shared/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myprofile from './Pages/Dashboard/Myprofile';
import Addreview from './Pages/Dashboard/Addreview';
import Reviews from './Pages/Home/Reviews';
import Payment from './Pages/Payment';
import Myorder from './Pages/Dashboard/Myorder';
import Users from './Pages/Dashboard/Users';
import AllOrders from './Pages/Dashboard/AllOrders';
import Allproducts from './Pages/Dashboard/Allproducts';
import AddProduct from './Pages/Dashboard/AddProduct';
import RequireAdmin from './Pages/Shared/RequireAdmin';
function App() {
  const location = useLocation()
  return (
    <div className=" font-primary">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/reviews' element={<Reviews></Reviews>} />
        <Route path='/payments' element={<Payment></Payment>} />
        <Route path='/shop' element={<RequireAuth>
          <Shop></Shop>
        </RequireAuth>} />


        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<Myprofile></Myprofile>}></Route>
          <Route path="myprofile" element={<Myprofile></Myprofile>}></Route>
          <Route path="addreview" element={<Addreview></Addreview>}></Route>
          <Route path="myorders" element={<Myorder></Myorder>}></Route>
          <Route path="users" element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>
          <Route path="orders" element={<RequireAdmin>
            <AllOrders></AllOrders>
          </RequireAdmin>}></Route>
          <Route path="allproducts" element={<RequireAdmin>
            <Allproducts></Allproducts>
          </RequireAdmin>}></Route>
          <Route path="addproduct" element={<RequireAdmin>
            <AddProduct></AddProduct>
          </RequireAdmin>}></Route>

        </Route>


        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>} />
        <Route path='/billings/:id' element={<RequireAuth>
          <Billings></Billings>
        </RequireAuth>} />
      </Routes>
      {location.pathname.includes('dashboard') ? '' : <Footer></Footer>}
      <ToastContainer />
    </div>
  );
}

export default App;
