import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
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
function App() {
  return (
    <div className=" font-primary">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/reviews' element={<Reviews></Reviews>} />
        <Route path='/shop' element={<RequireAuth>
          <Shop></Shop>
        </RequireAuth>} />
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<Myprofile></Myprofile>}></Route>
          <Route path="addreview" element={<Addreview></Addreview>}></Route>

        </Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>} />
        <Route path='/billings/:id' element={<RequireAuth>
          <Billings></Billings>
        </RequireAuth>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
