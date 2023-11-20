import React from "react";

const Card = ({ src, alt, cardSubtitle, cardTitle }) => {
  return (
    <div
      className="card bg-white border-white"
    >
      <div className="card-body">
        <img className="mb-2" src={src} alt={alt} />
        <h6 className="card-subtitle">
          {cardSubtitle}
        </h6>
        <h5 className="card-title">{cardTitle}</h5>
      </div>
    </div>
  );
};

export default Card;
