import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginImg from "../assets/img/Done.png";
import Button from "../common/Button";
import "../styles/login.scss";
import { handleValidateLogin } from "../utils/Validate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserLogin } from "../utils/types";
import { useFormik } from "formik";
import * as Yup from "yup"
import { DataInputLogin, ValuesLogin } from "../utils/typesForm";

function Login() {
  const location = useLocation();

  const user: UserLogin = JSON.parse(localStorage.getItem("user") || "{}")
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address"),
      password: Yup.string().required("Required").matches(/[a-z]/, "Please must be 7-19 characters and contain at least one letter , one number and a special character"),
    }),
    onSubmit: (values : ValuesLogin) => {
      const { email, password } = values
      const dataInput : DataInputLogin = {
        emailInput: email,
        passwordInput: password,
      };
      if (!user) {
        navigate("/register");
      } else {
        if (handleValidateLogin(user, dataInput)) {
          toast.success(' Sing In Success', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          setTimeout(() => navigate("/"), 2000)
        }
      }
    }
  })

  return (
    <>
      <div className="container">
        <img src={LoginImg} alt="register" className="img__login" />
        <div className="heading__login">
          <span>Welcome back to</span>
          <span>OUR REMINDER</span>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your email"
          />
          {formik.errors.email &&
            <p className="errorMsg">{formik.errors.email}</p>
          }
          <input
            type="text"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
          />
          {formik.errors.password &&
            <p className="errorMsg">{formik.errors.password}</p>
          }

          <Button path={location.pathname} />

          <span>
            Already have an account ? <Link to="/register">Sing Up</Link>
          </span>
        </form>      
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>

    </>
  );
}

export default Login
