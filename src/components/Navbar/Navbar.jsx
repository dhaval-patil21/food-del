import React, { useState } from 'react'
import './Navbar.css'
import { assets} from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setLogin}) => {

        const [menu, setMenu] = useState("menu")


  return (
    <>
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}>Home</Link>
            <a href='#explore' onClick={()=>setMenu("menu")} className={menu==="menu" ? "active" : ""}>Menu</a>
            {/* <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile-app</li> */}
            <a href='#footer' onClick={()=>setMenu("contact")} className={menu==="contact" ? "active" : ""}>Contact</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button onClick={() => setLogin(true)}>Sign in</button>
        </div>
    </div>
    </>
  )
}

export default Navbar