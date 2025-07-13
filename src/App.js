import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login'


const App = () => {

          const [login, setLogin] = useState('false')

  return (
    <>
    {login?<Login/>:<></>}

    <div className='app'>
    <Navbar setLogin={setLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={< Cart />} />
        <Route path='/order' element={< PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
   </>
  )
}

export default App;