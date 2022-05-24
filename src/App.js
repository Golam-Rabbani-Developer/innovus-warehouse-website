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
function App() {
  return (
    <div className=" font-primary">

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/purchase/:id' element={<Purchase></Purchase>} />
        <Route path='/billings/:id' element={<Billings></Billings>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
