import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";

function Table({
  value,
  children,
  selectionMode,
  dataKey,
  selection,
  onSelectionChange,
  onRowSelect,
  onRowUnselect,
}) {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const [globalFilterValue, setGlobalFilterValue] = useState("");

  return (
    <DataTable
      value={value}
      selectionMode={selectionMode}
      onRowUnselect={onRowUnselect}
      selection={selection}
      onSelectionChange={onSelectionChange}
      dataKey={dataKey}
      onRowSelect={onRowSelect}
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      tableStyle={{ minWidth: "50rem" }}
      className="table-customers"
    >
      {children}
    </DataTable>
  );
}

export default Table;
