import React from 'react'
import "./Search.style.css";
import { LuSearch } from 'react-icons/lu'

function Search({ size, placeholder, className, onChange, value }) {
    return (
        <div className={`search-container  ${className}`}>
            <button className="search__button">
                <LuSearch size={size} />
            </button>
            <input type="text" className="form-control input-search" placeholder={placeholder} onChange={onChange} value={value} />
         </div>
    )
}

export default Search