import React from 'react'
import "./Search.style.css";
import { LuSearch } from 'react-icons/lu'

function Search({ size, placeholder, className, value, onChange }) {
    return (
        <div className={`search-container  ${className}`}>
            <button className="search__button">
                <LuSearch size={size} />
            </button>
            <input type="text" className="form-control input-search" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

export default Search