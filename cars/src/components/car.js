import React from "react";
import "../App.css";

function Car(props) {
  return (
    <div>
      <div class="grid-item">
        <span onClick={() => props.removeCar(props.id)} className="remove">
          𝘅
        </span>
        <img alt={props.brand} src={props.image} />
        <div className="content">
          <ul>
            <li>
              <strong>Brand:</strong> {props.brand}
            </li>
            <li>
              <strong>Color:</strong> {props.color}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Car;
