import React from "react";
import classes from "./Input.module.css";
// Example for {...props.Input} inside JSX element ---> { type: "text" } via props to the element will be => <input type="text" />
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
