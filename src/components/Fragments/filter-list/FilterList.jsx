import React from 'react'

const FilterList = ({ title, onChange, type, value, checked }) => {
    return (
        <li className="d-flex gap-2 justify-content-center px-3">
            <div className="form-check form-check-reverse d-flex w-100 justify-content-between">
                <input
                    className="form-check-input order-last"
                    type={type}
                    id="reverseCheck1"
                    onChange={onChange}
                    value={value}
                    checked={checked}
                />
                <label className="form-check-label" htmlFor="reverseCheck1">
                    {title}
                </label>
            </div>
        </li>

    )
}

export default FilterList