import React, { useState } from "react";
import "../styles/register.scss";
import RegisterImg from "../assets/img/Done.png";
import ButtonProps from "../common/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerRoute } from "../utils/APIRoutes";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup"
import { ToastContainer, toast } from "react-toastify";
import { handleStatusApiError, toastOptions } from "../utils/Validate";
import { Input, Spin } from "antd";
import { ValuesRegister } from "../utils/typesForm";

function Register() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading , setLoading] = useState<boolean>(true)

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required").min(4, "Must be 4 characters or more"),
      email: Yup.string().required("Required").matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address"),
      password: Yup.string().required("Required").matches(/[a-z]/, "Please must be 7-19 characters and contain at least one letter , one number and a special character"),
      confirmPassword: Yup.string().required("Required").oneOf([Yup.ref("password"), null], "Password must matches"),
    }),
    onSubmit: async (values : ValuesRegister) => {
      setLoading(false)
      try {
        const response = await axios.post(registerRoute, values);
        localStorage.setItem("user", JSON.stringify(response.data));
        toast.success("Sing In Success", toastOptions);
        setTimeout(() => 
          setLoading(true)
         , 2000)
        setTimeout(() =>
        navigate("/login")
        , 4000)  
      } catch (error: any) {
        setLoading(true)
        handleStatusApiError(error)
        console.log("============= error", error);
      }
    }
  })

  return (
    <div>
     {
      loading ? <div className="container">
      <img src={RegisterImg} alt="register" className="img__register" />
      <div className="heading__register">
        <span>Get’s things done </span>
        <span>with TODO</span>
      </div>
      <p className="desc__register">Let’s help you meet up your tasks</p>
      <form onSubmit={formik.handleSubmit}>
        <Input 
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
        />
        {formik.errors.name &&
          <p className="errorMsg">{formik.errors.name}</p>
        }
        <Input 
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
        />
        {formik.errors.email &&
          <p className="errorMsg">{formik.errors.email}</p>
        }
        <Input 
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
        <Input 
          type="text"
          name="confirmPassword"
          id="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          placeholder="Confirm your password"
        />
        {formik.errors.confirmPassword &&
          <p className="errorMsg">{formik.errors.confirmPassword}</p>
        }

        <ButtonProps path={location.pathname} />

        <span className="margin-top">
          Already have an account ? <Link to="/login">Sing In</Link>
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
    </div> : <Spin className="loading" tip="Loading" size="large">
        <div className="content" />
      </Spin>
     }
    </div>
  );
}

export default Register;
