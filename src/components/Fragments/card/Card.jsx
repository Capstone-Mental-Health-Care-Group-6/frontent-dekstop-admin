import React from "react";
import cardIcon from "../../../assets/Frame 1000003348.svg";

const Card = ({ src, alt, cardSubtitle, cardTitle }) => {
  return (
    <div
      className="card bg-white border-white"
      style={{ width: "243px", height: "178px" }}
    >
      <div className="card-body">
        <img src={src} alt={alt} className="mb-4" />

        <h6 className="card-subtitle mb-2 text-body-secondary fw-normal ">
          {cardSubtitle}
        </h6>

        <h5 className="card-title ">{cardTitle}</h5>
      </div>
    </div>
  );
};

export default Card;
