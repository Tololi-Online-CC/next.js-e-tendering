import React from 'react'
import { useFetch } from '@/pages/api/useFetch'
import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter, GridToolbarExport } from '@mui/x-data-grid'
import { useRouter } from 'next/router'

export function RegulatorDataGridPending() {
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
                    onRowClick={(rowData) => navigate.push(`/regulator/bidDetails/${rowData.id}`)}
                    responsive={true}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    className='styled-table'
                />
            </div>
        </>
    )
}

export function RegulatorDataGridAll() {
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
                    onRowClick={(rowData) => navigate.push(`/regulator/bidDetails/${rowData.id}`)}
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

export function RegulatorDataGridRejected() {
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

export function RegulatorDataGridApproved() {
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
export function RegulatorDataGridAwarded() {
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
                    onRowClick={(rowData) => navigate.push(`/regulator/bidDetails/${rowData.id}`)}
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
export function RegulatorDataGridUsers() {
    // const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useRouter();

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error</p>

    let data = [
        {
            id: "1",
            operator_name: "Total",
            Category: "Oil and Gas",
            type: "Operator"
        },
        {
            id: "2",
            operator_name: "Chevro",
            Category: "Oil and Gas",
            type: "Operator"
        },
        {
            id: "3",
            operator_name: "Shell",
            Category: "Oil and Gas",
            type: "Operator"
        },
        {
            id: "4",
            operator_name: "Total",
            Category: "Oil and Gas",
            type: "Operator"
        },
        {
            id: "5",
            operator_name: "Tololi",
            Category: "Green Hydrogen",
            type: "Contractor"
        }
    ]

    const columns = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'operator_name', headerName: 'Name', flex: 1 },
        { field: 'Category', headerName: 'Industry', flex: 1 },
        { field: 'type', headerName: 'Category', flex: 1 },
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
        operator_name: row.operator_name,
        Category: row.Category,
        type: row.type
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