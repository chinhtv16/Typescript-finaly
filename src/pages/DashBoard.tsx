import React, { FC } from "react";
import "../styles/dashboard.css";
import Clock from "../components/dashboard/Clock";
import TodoList from "../components/dashboard/TodoList";
import Header from "../components/dashboard/Header";
import { UserDashBoard } from "../utils/types";

const DashBoard = () => {
  const user: UserDashBoard = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="d-container">
      <div className="d-container__header">
        <Header user={user} />
      </div>

      <div className="d-container__content">
        <Clock />
        <TodoList />
      </div>
    </div>
  );
};

export default DashBoard;
