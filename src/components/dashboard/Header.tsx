import React, { FC } from "react";
import "../../styles/header.css";
import UserImg from "../../assets/img/Ellipse 2.png";
import { useNavigate } from "react-router-dom";
import { UserDashBoardProps } from "../../utils/types";


const Header = ({user} : UserDashBoardProps) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <img
        src={user.avatar}
        alt= {UserImg }
        className="header__img"
      />
      <p className="header__name">{user.name}</p>
      <p className="header__tag">{`@${user.name}`}</p>
      <div
        onClick={() => handleLogOut()}
        className="header__button"
      >
        Log Out
      </div>
    </>
  );
};

export default Header;
