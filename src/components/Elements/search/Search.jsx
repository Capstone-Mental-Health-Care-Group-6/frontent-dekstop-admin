import React from 'react'
import "./Search.style.css";
import { LuSearch } from 'react-icons/lu'


function Search({ size, placeholder, className, value, onChange }) {
    return (
        <>
            <button className={`search__button  ${className}`}>
                <LuSearch size={size} />
            </button>
            <input type="text" className="form-control input-search" placeholder={placeholder} value={value} onChange={onChange} />
        </>
    )
}

export default Search