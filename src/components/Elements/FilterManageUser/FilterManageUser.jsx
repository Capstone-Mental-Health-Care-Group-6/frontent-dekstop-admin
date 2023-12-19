import React from 'react';
import "./FilterManageUser.style.css";
import { FaFilter } from 'react-icons/fa';

function Filter({ size, placeholder }) {
    return (
        <div className="filter-container">
            <button className="filter__button">
                <FaFilter className="filter__icon" size={size} />
                <span className="filter__text">{placeholder}</span>
            </button>
        </div>
    )
}

export default Filter;
