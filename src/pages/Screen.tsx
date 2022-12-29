import React , {useEffect} from "react";
import "../styles/screen.scss";
import ScreenImg from "../assets/img/Done.png";
import ButtonProps from "../common/Button";
import { useLocation, useNavigate } from "react-router-dom";

function Screen() {
  
  const location = useLocation()

  const navigate = useNavigate();

  const user : {} = JSON.parse(localStorage.getItem("user") || "{}")


  useEffect(() => {
    if (user) {
      navigate("/login");
    }
  }, [user , navigate])

  return (
    <div className="container">
      <img src={ScreenImg} alt="screen" className="img__screen" />
      <div className=" heading__screen">
        <span>Welcome to</span>
        <span className="heading__screen-fz">OUR REMINDER</span>
      </div>
      <p className="desc__screen">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum
        tempus, interdum at dignissim metus. Ultricies sed nunc.
      </p>
      <ButtonProps path={location.pathname} />
    </div>
  );
}

export default Screen;
