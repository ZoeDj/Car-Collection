import React from "react";
import "../App.css";

function Wrapper(props) {
  return <div className="grid-container">{props.children}</div>;
}

export default Wrapper;
