import React from "react";

const Button = ({ type, className, onClick, id, text, bsTogle, bsTarget }) => {
  return (
    <>
      <button
        type={type ? type : "button"}
        className={className}
        onClick={onClick}
        id={id ? id : ""}
        data-bs-toggle={bsTogle}
        data-bs-target={bsTarget}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
