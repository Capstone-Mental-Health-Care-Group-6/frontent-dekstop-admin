import React from 'react'

const FilterList = ({ title, onclick, type }) => {
    return (
        <li className="d-flex gap-2 justify-content-center px-3">
            <div className="form-check form-check-reverse d-flex w-100 justify-content-between">
                <input
                    className="form-check-input order-last"
                    type={type}
                    defaultValue=""
                    id="reverseCheck1"
                    onClick={onclick}
                />
                <label className="form-check-label fw-normal" htmlFor="reverseCheck1">
                    {title}
                </label>
            </div>
        </li>

    )
}

export default FilterList