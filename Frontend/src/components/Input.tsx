import React from "react";
import { InputProps } from "../interfaces/Input.props";

/**
 *
 * @param type string Input type property
 * @param className string Input className property
 * @param name string Input name property
 * @param placeholder string Input placeholder property
 * @param lable string Input lable property
 * @param value string Input value property
 * @param ariaLabel string Input ariaLabel property
 * @param onChange string Input onChange function
 * @returns Input react component
 */
const Input: React.FC<InputProps> = ({
  onChange,
  type,
  className,
  name,
  placeholder,
  lable,
  value,
  ariaLabel,
}) => {
  return (
    <>
      {lable && <label>{lable}</label>}
      <input
        aria-label={ariaLabel}
        type={type || "text"}
        className={className || "form-control p5"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
