import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase';
function App() {
  return (
    <div className=" font-primary">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/purchase/:id' element={<Purchase></Purchase>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
