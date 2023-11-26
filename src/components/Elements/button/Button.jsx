import React from "react";

const Button = ({ type, className, onClick, id, text, bsTogle, bsTarget, bsDismiss }) => {
  return (
    <>
      <button
        type={type ? type : "button"}
        className={className}
        onClick={onClick}
        id={id ? id : ""}
        data-bs-toggle={bsTogle}
        data-bs-target={bsTarget}
        data-bs-dismiss={bsDismiss}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
