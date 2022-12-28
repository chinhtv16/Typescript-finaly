import React, { useState } from "react";
import "../styles/register.css";
import RegisterImg from "../assets/img/Done.png";
import Button from "../common/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerRoute } from "../utils/APIRoutes";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  handleStatusApi,
  handleStatusApiError,
  handleValidateRegister,
  toastOptions,
} from "../utils/Validate";

function Register() {
  const location = useLocation();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    const dataPost = {
      name: fullName,
      email,
      password,
      confirmPassword,
    };

    if (handleValidateRegister(dataPost)) {
      try {
        const response = await axios.post(registerRoute, dataPost);
        if (handleStatusApi(response.status)) {
          toast.success("Sing In Success", toastOptions);
          localStorage.setItem("user", JSON.stringify(response.data));
          navigate("/login");
        }
      } catch (error : any) {
        handleStatusApiError(error);
        console.log("============= error", error);
      }
    }
  };

  return (
    <>
      <div className="container">
        <img src={RegisterImg} alt="register" className="img__register" />
        <div className="heading__register">
          <span>Get’s things done </span>
          <span>with TODO</span>
        </div>
        <p className="desc__register">Let’s help you meet up your tasks</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter your full name"
            name="fullname"
            autoComplete="off"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          <Button path={location.pathname} />

          <span>
            Already have an account ? <Link to="/login">Sing In</Link>
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

export default Register;
