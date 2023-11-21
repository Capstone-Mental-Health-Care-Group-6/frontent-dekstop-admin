import React from 'react'
import { NavLink } from 'react-router-dom'

const DetailArtikel = () => {
  return (
    <div>
      <NavLink to={"/admin-manage-artikel"}>
        Kembali
      </NavLink>
    </div>
  )
}

export default DetailArtikel