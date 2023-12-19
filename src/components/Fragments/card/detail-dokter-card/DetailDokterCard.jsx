import React from "react";
import "./DetailDokterCard.style.css";

const DetailDokterCard = ({ children }) => {
  return (
    <>
      <div className="detail-card card gap-3 px-5 py-5 border-0">
        {children}
      </div>
    </>
  );
};

export default DetailDokterCard;
