import { DataTable } from 'primereact/datatable'
import React from 'react'

function Table({ value, children, globalFilter }) {
    return (
        <DataTable value={value}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ minWidth: '50rem' }}
            className="table-customers"
            globalFilter={globalFilter}
        >
            {children}
        </DataTable>
    )
}

export default Table