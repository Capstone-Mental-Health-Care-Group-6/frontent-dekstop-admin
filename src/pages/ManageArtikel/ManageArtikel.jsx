import React from "react";
import Layouts from "../../Layouts/Layouts";
import Table from "../../components/Fragments/dataTable/TableData";
import Card from "../../components/Fragments/card/Card";

const ManageArtikel = () => {
  const titleCard = ["Total Artikel", "Artikel Baru", "Pengajuan Artikel"];

  return (
    <Layouts titlePage={"Manage artikel"}>
      <div>
        <div className="row my-4">
          {titleCard.map((item, index) => (
            <div key={index} className="col">
              <Card cardTitle={item} cardSubtitle={17000} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Table />
      </div>
    </Layouts>
  );
};

export default ManageArtikel;
