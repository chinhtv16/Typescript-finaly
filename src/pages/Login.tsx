import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginImg from "../assets/img/Done.png";
import Button from "../common/Button";
import "../styles/login.css";
import { handleValidateLogin, toastOptions } from "../utils/Validate";
import { ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserLogin } from "../utils/types";

function Login() {
  const location = useLocation();

  const user : UserLogin = JSON.parse(localStorage.getItem("user") || "{}")
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit  = (e : any)  => {
    e.preventDefault();
    const dataInput = {
      emailInput: email,
      passwordInput: password,
    };

    if (user === null) {
      navigate("/register");
    } else {
      if (handleValidateLogin(user, dataInput)) {
        toast.success("Sign In Success", toastOptions);
        navigate("/");
      }
    }
  };

  return (
    <>
      <div className="container">
        <img src={LoginImg} alt="register" className="img__login" />
        <div className="heading__login">
          <span>Welcome back to</span>
          <span>OUR REMINDER</span>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            autoComplete="off"
            value={email}
            onChange ={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button path={location.pathname} />

          <span>
            Already have an account ? <Link to="/register">Sing Up</Link>
          </span>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Login;
