import React from 'react';

const Dropdown = ({ imageSrc, dropdownContent }) => {
  return (
    <div className="dropdown">
      <button className="nav-link dropdown-toggle custom-dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
        <img src={imageSrc} alt="Dropdown Image" />
      </button>
      <ul className="dropdown-menu dropdown-menu-end">    
        <li className='dropdown-item'>
          {dropdownContent}
        </li>       
      </ul>
    </div>
  )
}

export default Dropdown
