import { useState, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <>
      <div className="navbar">
        <Link to="/">
          {" "}
          <img src={assets.logo} alt="" className="logo" />
        </Link>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          {/* <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile-app</li> */}
          <a
            href="#footer"
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <button onClick={() => setLogin(true)}>Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
