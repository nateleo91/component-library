import React from "react";
import "./Button.css";


const Button = (props) => {
  let classList = [];
  let types = ["primary", "danger", "success", "warning", "default", "cart", "favorite", "heart", "shopping"];
  if (types.includes(props.type)) {
    classList.push(`button-${props.type}`);
  }
  if (props.large) {
    classList.push("button-large");
  }
  if (props.small) {
    classList.push("button-small");
  }
  if (props.outline) {
    classList.push(`button-${props.type}-outline`);
  }
  if (props.faded) {
    classList.push(`button-${props.type}-faded`);
  }

  return (
    <button className={classList.join(" ")} onClick={props.whenClicked}>
      {props.label}
    </button>
  );
};

export default Button;