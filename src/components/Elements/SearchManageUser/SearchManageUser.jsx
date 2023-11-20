import React from 'react';
import "./SearchManageUser.style.css";
import { FaSearch } from 'react-icons/fa';

function Search({ size, placeholder }) {
    return (
        <div className="search-container">
            <div className="search__input-container">
                <FaSearch className="search__icon" size={size} />
                <input type="text" className="search__input" placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Search;
