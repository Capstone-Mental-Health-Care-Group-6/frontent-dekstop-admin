import React from 'react'

function PaketTeratas({ className, image, title, text }) {
    return (
        <>
            <div className={className} >
                <img src={image} alt="" />
                <div className="d-grid align-items-center">
                    <h5> {title}</h5>
                    <span>{text}</span>
                </div>
            </div>
        </>
    )
}

export default PaketTeratas