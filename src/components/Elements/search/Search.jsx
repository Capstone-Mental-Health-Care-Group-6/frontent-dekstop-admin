import React from 'react'
import "./Search.style.css";
import { LuSearch } from 'react-icons/lu'

function Search({ size, placeholder }) {
    return (
        <div className="search-container">
            <button className="search__button">
                <LuSearch size={size} />
            </button>
            <input type="text" className="form-control input-search" placeholder={placeholder} />
        </div>
    )
}

export default Search