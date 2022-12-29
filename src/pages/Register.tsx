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
import { Input, Spin , Typography } from "antd";
import { ValuesRegister } from "../utils/typesForm";


const { Text } = Typography;

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
        navigate("/login")
         , 2000)
      } catch (error: any) {
        setLoading(true)
        setTimeout(() => {
          handleStatusApiError(error)  
        }, 1000)
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
            <Text type="danger">{formik.errors.name}</Text>
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
           <Text type="danger">{formik.errors.email}</Text>
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
           <Text type="danger">{formik.errors.password}</Text>
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
          <Text type="danger">{formik.errors.confirmPassword}</Text>
        }

        <ButtonProps path={location.pathname} />

        <span className="margin-top">
          Already have an account ? <Link to="/login">Sing In</Link>
        </span>
      </form>
      <ToastContainer
         position="top-right"
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
    </div> : <Spin className="loading" tip="Loading" size="large">
        <div className="content" />
      </Spin>
     }
    </div>
  );
}

export default Register;
