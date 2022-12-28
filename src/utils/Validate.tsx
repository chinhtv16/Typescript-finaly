import { ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataInputValidateLogin, DataInputValidateRegister, StatusErrorApi, StatusSuccessApi, UserValidateLogin } from "./typesValidate";


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

export const handleValidateRegister = (dataInput : DataInputValidateRegister) => {
  const { name, email, password, confirmPassword } = dataInput;

  if (!name) {
    toast.error(" Username is required ", toastOptions);
    return false;
  } else if (name.length > 10) {
    toast.error(" Name is too long ", toastOptions);
  }
  
  if (!email) {
    toast.error(" Email is required", toastOptions);
    return false;
  }
  
  if (!password) {
    toast.error(" Password is required", toastOptions);
    return false;
  } 
  
  if (!confirmPassword) {
    toast.error(" ComfirmPassword is required", toastOptions);
    return false;
  }
  
  if (password !== confirmPassword) {
    toast.error(" ComfirmPassword and password not match", toastOptions);
    return false;
  }

  return true;
};

export const handleValidateLogin = (user : UserValidateLogin, dataInput : DataInputValidateLogin) => {
  const { email, password } = user;
  const { emailInput, passwordInput } = dataInput;

  if (!emailInput) {
    toast.error(" Email is required", toastOptions);
    return false;
  } 
  
  if (!passwordInput) {
    toast.error(" Password is required", toastOptions);
    return false;
  } 
  
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

export const handleStatusApi = (status : StatusSuccessApi) => {
  if (status === 201) {
    toast.success("Sign Up Success", toastOptions);
    return true;
  }
};

export const handleStatusApiError = (error : StatusErrorApi) => {
  if (error.response.status === 404 || error.response.status === 400) {
    toast.error("API not working", toastOptions);
  }
};


