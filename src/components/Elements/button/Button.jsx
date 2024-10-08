import React from "react";

const Button = ({
  type,
  className,
  onClick,
  id,
  text,
  bsTogle,
  bsTarget,
  bsDismiss,
  disabled,
  ariaLabel,
  onSubmit
}) => {
  return (
    <>
      <button
        disabled={disabled}
        type={type ? type : "button"}
        className={className}
        onClick={onClick}
        id={id ? id : ""}
        aria-label={ariaLabel}
        data-bs-toggle={bsTogle}
        data-bs-target={bsTarget}
        data-bs-dismiss={bsDismiss}
        onSubmit={onSubmit}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
