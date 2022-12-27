import React  from "react";
import "../../styles/clock.css";

function Clock() {

  return (
    <div className="d-container__content-clock">
      <div className="clock">
        <div className="numbers">
          <div className="twelve">12</div>
          <div className="three">3</div>
          <div className="six">6</div>
          <div className="nine">9</div>
        </div>
        <div className="arrows">
          <div className="hour"></div>
          <div className="minute"></div>
          <div className="second"></div>
        </div>
      </div>
      <p>Good Afternoon</p>
    </div>
  );
}

export default Clock;
