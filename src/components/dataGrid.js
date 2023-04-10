import React from 'react';
import { useFetch } from '@/pages/api/useFetch';
import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter, GridToolbarExport } from '@mui/x-data-grid'
import { useRouter } from 'next/router'

export default function DataGridBid() {
    const {loading, error, data} = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useRouter();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    
    const columns = [
        {field: 'id', headerName: 'ID', flex: 0},
        {field: 'request_title', headerName: 'Tittle', flex: 1},
        {field: 'Category', headerName: 'Category', flex: 1},
        {field: 'Company', headerName: 'Company', flex: 1},
        {field: 'request_description', headerName: 'Description', flex: 2},
        {field: 'due_date', headerName: 'Due Date', flex: 1},
    ]

    const rows = data.data.map((row) => ({
        id: row.id,
        request_title: row.attributes.request_title,
        Category: row.attributes.Category,
        Company: row.attributes.Company,
        request_description: row.attributes.request_description,
        due_date: row.attributes.due_date,
    }))

    

    function CustomToolbar() {
        return (
          <GridToolbarContainer className='grid-tool-bar'>
            <GridToolbarQuickFilter />
            <GridToolbarExport style={{color:"black"}}/>
          </GridToolbarContainer>
        );
    }

    return (
    <>
    <div style={{width:"95%", height:"70vh", margin:"0 auto"}}>
       <DataGrid 
        disableColumnFilter
        disableColumnSelector
        checkboxSelection 
        disableRowSelectionOnClick
        onRowClick={(rowData) => navigate.push(`/contractor/bidDetails/${rowData.id}`)} 
        slots={{
            toolbar: CustomToolbar
        }}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        className='styled-table'
       />
    </div>
    </>
  )
}


