import React from "react";
import Skeleton from "react-loading-skeleton";

const RiwayatLoader = ({ riwayat }) => {
  return Array(riwayat)
    .fill(0)
    .map((item, index) => (
      <div className="row row-cols-md-1 row-cols-1  mb-4" key={index}>
        <div className="col col-lg-1 d-flex justify-content-center">
          <Skeleton circle width={50} height={50} />
        </div>
        <div className="col col-lg-11 d-grid">
          <div className="line-1 d-flex justify-content-between align-items-center">
            <Skeleton width={80} height={20} />
            <Skeleton width={80} height={20} />
          </div>
          <div className="line-2 d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <Skeleton width={40} height={20} />
            </div>
            <Skeleton width={80} height={20} />
            <Skeleton width={40} height={20} />
          </div>
        </div>
      </div>
    ));
};

export default RiwayatLoader;
