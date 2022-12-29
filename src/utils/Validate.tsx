import { ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataInputValidateLogin, StatusErrorApi, UserValidateLogin } from "./typesValidate";


export const toastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const handleValidateLogin = (user : UserValidateLogin, dataInput : DataInputValidateLogin) => {
  const { email, password } = user;
  const { emailInput, passwordInput } = dataInput;
  
  if (email !== emailInput) {
    toast.error("Email does not match the registered email", toastOptions);
    return false;
  } 
  
  if (password !== passwordInput) {
    toast.error("Password does not match the registered email", toastOptions);
    return false;
  }

  return true;
};


export const handleStatusApiError = (error : StatusErrorApi) => {
  console.log(error.response.status)
  if (error.response.status === 404 || error.response.status === 400) {
    toast.error("API not working", toastOptions);
  }
};


