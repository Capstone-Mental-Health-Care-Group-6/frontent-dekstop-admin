import React from "react";
import Label from "../../Elements/input/label";
import Input from "../../Elements/input/Input";

const FloatingLabels = ({
  label,
  type,
  className,
  id,
  onChange,
  name,
  placeholder,
  value,
}) => {
  return (
    <div className="form-floating">
      <Input
        type={type}
        className={className}
        id={id}
        onChange={onChange}
        name={id}
        placeholder={placeholder}
        value={value}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};

export default FloatingLabels;
