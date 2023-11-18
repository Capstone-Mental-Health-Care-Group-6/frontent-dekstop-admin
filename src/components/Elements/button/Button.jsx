import React from "react";

const Button = ({ type, className, onClick, id, text }) => {
  return (
    <>
      <button
        type={type ? type : "button"}
        className={className}
        onClick={onClick}
        id={id ? id : ""}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
