import { DataTable } from 'primereact/datatable'
import React from 'react'

function Table({ value, children, emptyMessage }) {
    return (
        <DataTable value={value}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ minWidth: '50rem' }}
            className="table-customers"
            emptyMessage={emptyMessage}
        >
            {children}
        </DataTable>
    )
}

export default Table