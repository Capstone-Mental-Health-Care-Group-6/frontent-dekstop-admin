import React from "react";
import "./ArtikelCard.style.css";

const ArtikelCard = ({ imageartikel, title, caption }) => {
  return (
    <>
      <div class="card border-0 shadow-sm rounded">
        <img src={imageartikel} class="card-img-top" alt="..." />
        <div class="card-body d-flex flex-column gap-3">
          <h5 class="card-title mt-3 fs-4 fw-bold">{title}</h5>
          <p class="card-text fs-5">{caption}</p>
          
        </div>
      </div>
    </>
  );
};

export default ArtikelCard;
 