import React from 'react'

function ItemDataTransaksi({ title, text, className }) {
    return (
        <>
            <span>{title}</span>
            <p className={className} >{text}</p>
        </>
    )
}

export default ItemDataTransaksi