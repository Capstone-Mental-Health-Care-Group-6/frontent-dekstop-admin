import { DataTable } from 'primereact/datatable'
import React from 'react'

function Table({ value, children }) {
    return (
        <DataTable value={value}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ minWidth: '50rem' }}
            className="table-customers"
        >
            {children}
        </DataTable>
    )
}

export default Table