import React from "react";

const InputSelect = ({
  id,
  name,
  title,
  options,
  value,
  onChange,
  className,
  statusColor,
}) => {
  return (
    <div>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${className} form-select ${statusColor}`}
      >
        <option value="" disabled>
          {title}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
