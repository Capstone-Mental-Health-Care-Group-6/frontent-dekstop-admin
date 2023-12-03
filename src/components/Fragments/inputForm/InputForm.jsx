import React from 'react'

function InputForm({ htmlFor, title, type, onChange, value, required, placeholder }) {
    return (
        <>
            <label htmlFor={htmlFor} className="form-label p-0 m-0 fw-semibold mb-2 mt-2">
                {title}
            </label>
            <input
                type={type}
                className="form-control"
                name={htmlFor}
                onChange={onChange}
                value={value}
                required={required}
                placeholder={placeholder}
            />
        </>
    )
}

export default InputForm