import "./Login.css";
import { assets } from "../../assets/frontend_assets/assets";
import { useState } from "react";

const Login = ({ setLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login">
      <form action="" className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your mail" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>
          {currentState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="login-condition">
          <input type="checkbox" required />{" "}
          <p> By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
