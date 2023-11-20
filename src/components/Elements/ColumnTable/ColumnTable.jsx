import React from 'react'
import { Link } from 'react-router-dom'
import { Column } from 'primereact/column';

function ColumnTable({ field, header }) {
    return (
        <Column field={field} header={header} style={{ width: "25%" }} />
    )
}

export default ColumnTable