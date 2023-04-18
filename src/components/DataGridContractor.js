import React from 'react'
import { useFetch } from '@/pages/api/useFetch'
import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter, GridToolbarExport } from '@mui/x-data-grid'
import { useRouter } from 'next/router'

export function ContractorDataGridPending() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useRouter();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    const columns = [
        { field: 'id', headerName: 'ID', flex:0 },
        { field: 'request_title', headerName: 'Tittle', flex:1 },
        { field: 'Category', headerName: 'Category', flex:1 },
        { field: 'Company', headerName: 'Company', flex:1 },
        { field: 'request_description', headerName: 'Description', flex:2 },
        {
            field: 'actions', headerName: 'Actions', flex:1, renderCell: (params) => {
                return <>
                    <button className='action-btn-review'>Review Application</button>
                    {/* <button className='action-btn-reject'>Reject</button> */}
                </>
            }
        }
    ]

    const rows = data.data.map((row) => ({
        id: row.id,
        request_title: row.attributes.request_title,
        Category: row.attributes.Category,
        Company: row.attributes.Company,
        request_description: row.attributes.request_description,
    }))



    function CustomToolbar() {
        return (
            <GridToolbarContainer className='grid-tool-bar'>
                <GridToolbarQuickFilter />
                <GridToolbarExport style={{ color: "black" }} />
            </GridToolbarContainer>
        );
    }

    return (
        <>
            <div style={{ width: "95%", height: "80vh", margin: "0 auto" }}>
                <DataGrid
                    disableColumnFilter
                    disableColumnSelector
                    checkboxSelection
                    disableRowSelectionOnClick
                    slots={{
                        toolbar: CustomToolbar
                    }}
                    rows={rows}
                    columns={columns}
                    onRowClick={(rowData) => navigate.push(`/contractor/bidDetails/${rowData.id}`)}
                    responsive={true}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    className='styled-table'
                />
            </div>
        </>
    )
}

export function ContractorDataGridAll() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useRouter();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0 },
        { field: 'request_title', headerName: 'Tittle', flex: 1 },
        { field: 'Category', headerName: 'Category', flex: 1 },
        { field: 'Company', headerName: 'Company', flex: 1 },
        { field: 'request_description', headerName: 'Description', flex: 2 },
    ]

    const rows = data.data.map((row) => ({
        id: row.id,
        request_title: row.attributes.request_title,
        Category: row.attributes.Category,
        Company: row.attributes.Company,
        request_description: row.attributes.request_description,
    }))



    function CustomToolbar() {
        return (
            <GridToolbarContainer className='grid-tool-bar'>
                <GridToolbarQuickFilter />
                <GridToolbarExport style={{ color: "black" }} />
            </GridToolbarContainer>
        );
    }

    return (
        <>
            <div style={{ width: "95%", height: "80vh", margin: "0 auto" }}>
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

export function ContractorDataGridRejected() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useRouter();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0 },
        { field: 'request_title', headerName: 'Tittle', flex: 1 },
        { field: 'Category', headerName: 'Category', flex: 1 },
        { field: 'Company', headerName: 'Company', flex: 1 },
        { field: 'request_description', headerName: 'Description', flex: 2 },
        {
            field: 'actions', headerName: 'Actions', flex: 1, renderCell: (params) => {
                return <>
                    <button className='action-btn-review'>Review Application</button>
                    {/* <button className='action-btn-approve'>Approve</button> */}
                </>
            }
        }
    ]

    const rows = data.data.map((row) => ({
        id: row.id,
        request_title: row.attributes.request_title,
        Category: row.attributes.Category,
        Company: row.attributes.Company,
        request_description: row.attributes.request_description,
    }))



    function CustomToolbar() {
        return (
            <GridToolbarContainer className='grid-tool-bar'>
                <GridToolbarQuickFilter />
                <GridToolbarExport style={{ color: "black" }} />
            </GridToolbarContainer>
        );
    }

    return (
        <>
            <div style={{ width: "95%", height: "80vh", margin: "0 auto" }}>
                <DataGrid
                    disableColumnFilter
                    disableColumnSelector
                    checkboxSelection
                    disableRowSelectionOnClick
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

export function ContractorDataGridApproved() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useRouter();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0 },
        { field: 'request_title', headerName: 'Tittle', flex: 1 },
        { field: 'Category', headerName: 'Category', flex: 1 },
        { field: 'Company', headerName: 'Company', flex: 1 },
        { field: 'request_description', headerName: 'Description', flex: 2 },
        {
            field: 'actions', headerName: 'Actions', flex: 1, renderCell: (params) => {
                return <>
                    <button className='action-btn-view'>View Approved</button>
                    {/* <button className='action-btn-approve'>Approve</button> */}
                </>
            }
        }
    ]

    const rows = data.data.map((row) => ({
        id: row.id,
        request_title: row.attributes.request_title,
        Category: row.attributes.Category,
        Company: row.attributes.Company,
        request_description: row.attributes.request_description,
    }))



    function CustomToolbar() {
        return (
            <GridToolbarContainer className='grid-tool-bar'>
                <GridToolbarQuickFilter />
                <GridToolbarExport style={{ color: "black" }} />
            </GridToolbarContainer>
        );
    }

    return (
        <>
            <div style={{ width: "95%", height: "80vh", margin: "0 auto" }}>
                <DataGrid
                    disableColumnFilter
                    disableColumnSelector
                    checkboxSelection
                    disableRowSelectionOnClick
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
export function ContractorDataGridAwarded() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useRouter();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    const columns = [
        { field: 'id', headerName: 'ID', width: 45 },
        { field: 'request_title', headerName: 'Tittle', width: 150 },
        { field: 'Category', headerName: 'Category', width: 150 },
        { field: 'Company', headerName: 'Company', width: 100 },
        { field: 'request_description', headerName: 'Description', width: 300 },
        {
            field: 'actions', headerName: 'Actions', width: 150, renderCell: (params) => {
                return <>
                    <button className='action-btn-view'>View Awarded</button>
                    {/* <button className='action-btn-approve'>Approve</button> */}
                </>
            }
        }
    ]

    const rows = data.data.map((row) => ({
        id: row.id,
        request_title: row.attributes.request_title,
        Category: row.attributes.Category,
        Company: row.attributes.Company,
        request_description: row.attributes.request_description,
    }))



    function CustomToolbar() {
        return (
            <GridToolbarContainer className='grid-tool-bar'>
                <GridToolbarQuickFilter />
                <GridToolbarExport style={{ color: "black" }} />
            </GridToolbarContainer>
        );
    }

    return (
        <>
            <div style={{ width: "95%", height: "80vh", margin: "0 auto" }}>
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
export function ContractorDataGridUsers() {
    // const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useRouter();

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error</p>

    let data = [
        {
            id: "1",
            Contractor_name: "Total",
            Category: "Oil and Gas",
        },
        {
            id: "2",
            Contractor_name: "Chevro",
            Category: "Oil and Gas",
        },
        {
            id: "3",
            Contractor_name: "Shell",
            Category: "Oil and Gas",
        },
        {
            id: "4",
            Contractor_name: "Total",
            Category: "Oil and Gas",
        },
        {
            id: "5",
            Contractor_name: "Tololi",
            Category: "Green Hydrogen",
        }
    ]

    const columns = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'Contractor_name', headerName: 'Name', flex: 1 },
        { field: 'Category', headerName: 'Category', flex: 1 },
        {
            field: 'actions', headerName: 'Actions', flex: 1, renderCell: (params) => {
                return <>
                    <button className='action-btn-view'>View</button>
                </>
            }
        }
    ]

    const rows = data.map((row) => ({
        id: row.id,
        Contractor_name: row.Contractor_name,
        Category: row.Category,
    }))



    function CustomToolbar() {
        return (
            <GridToolbarContainer className='grid-tool-bar'>
                <GridToolbarQuickFilter />
                <GridToolbarExport style={{ color: "black" }} />
            </GridToolbarContainer>
        );
    }

    return (
        <>
            <div style={{ width: "95%", height: "80vh", margin: "0 auto" }}>
                <DataGrid
                    disableColumnFilter
                    disableColumnSelector
                    checkboxSelection
                    disableRowSelectionOnClick
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