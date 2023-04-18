import React from 'react'
import { useFetch } from '@/pages/api/useFetch'
import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter, GridToolbarExport } from '@mui/x-data-grid'
import { useRouter } from 'next/router'

export function OperatorDataGridPending() {
    // const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useRouter();

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error</p>

    const columns = [
        { field: 'id', headerName: 'ID', flex:0 },
        { field: 'request_title', headerName: 'Tittle', flex:1 },
        { field: 'Category', headerName: 'Industry', flex:1 },
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

    const data = {
        data: [
            {
                id: 4,
                attributes: {
                    request_title: "Fillemons",
                    request_description: "Tall dark and hansome",
                    createdAt: "2023-02-13T11:53:52.321Z",
                    updatedAt: "2023-03-05T19:58:36.178Z",
                    publishedAt: "2023-02-13T11:53:53.372Z",
                    Category: "Green Hydrogen",
                    Company: "Puma",
                    due_date: "2023-04-27"
                }
            },
        ],
        meta: {
            pagination: {
                page: 1,
                pageSize: 25,
                pageCount: 1,
                total: 10
            }
        }
    }

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
            <div style={{ width: "95%", height: "80vh", margin: "0 auto"}}>
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
                    onRowClick={(rowData) => navigate.push(`/operator/bidDetails/${rowData.id}`)}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    className='styled-table'
                />
            </div>
        </>
    )
}

export function OperatorDataGridAll() {
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
                    onRowClick={(rowData) => navigate.push(`/operator/bidDetails/${rowData.id}`)}
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

export function OperatorDataGridRejected() {
    // const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useRouter();

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error</p>

    const data = {
        data: [
            {
                id: 1,
                attributes: {
                    request_title: "500 ERW Pipes",
                    request_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                    createdAt: "2023-02-13T07:26:11.135Z",
                    updatedAt: "2023-03-05T19:47:03.342Z",
                    publishedAt: "2023-02-13T07:28:26.544Z",
                    Category: "Oil and Gas",
                    Company: "Total",
                    due_date: "2023-04-12"
                }
            },
            {
                id: 2,
                attributes: {
                    request_title: "500,000 Nuts and bolts",
                    request_description: "I need this amount for my oil company",
                    createdAt: "2023-02-13T10:18:58.400Z",
                    updatedAt: "2023-03-05T19:58:10.780Z",
                    publishedAt: "2023-02-13T10:19:45.993Z",
                    Category: "Oil and Gas",
                    Company: "Total",
                    due_date: "2023-04-08"
                }
            },
            {
                id: 3,
                attributes: {
                    request_title: "PPC Equipment",
                    request_description: "200000 Vests\n100000 Boots\n50000 Helmets\n50000 Gloves",
                    createdAt: "2023-02-13T10:26:17.781Z",
                    updatedAt: "2023-03-05T19:58:19.926Z",
                    publishedAt: "2023-02-13T10:26:18.447Z",
                    Category: "Green Hydrogen",
                    Company: "Total",
                    due_date: "2023-05-18"
                }
            },
            {
                id: 5,
                attributes: {
                    request_title: "50000 tires",
                    request_description: "tires for my company",
                    createdAt: "2023-02-14T08:10:12.039Z",
                    updatedAt: "2023-03-05T19:58:49.882Z",
                    publishedAt: "2023-02-14T08:10:13.156Z",
                    Category: "Other",
                    Company: "Total",
                    due_date: "2023-06-20"
                }
            },
            {
                id: 6,
                attributes: {
                    request_title: "Edilson Zaus",
                    request_description: "Smart handsome niggas like me",
                    createdAt: "2023-03-05T15:29:21.474Z",
                    updatedAt: "2023-03-05T19:59:03.626Z",
                    publishedAt: "2023-03-05T15:29:22.666Z",
                    Category: "Green Hydrogen",
                    Company: "Total",
                    due_date: "2023-10-24"
                }
            },
            {
                id: 7,
                attributes: {
                    request_title: "5 Tonnes of Metal Scraps",
                    request_description: "Needed for metal scrap yard, exactly 5 tonnes needed to build a scrap yard",
                    createdAt: "2023-03-05T17:21:59.535Z",
                    updatedAt: "2023-03-05T19:46:40.043Z",
                    publishedAt: "2023-03-05T17:22:00.745Z",
                    Category: "Other",
                    Company: "Total",
                    due_date: "2023-03-22"
                }
            },
        ],
        meta: {
            pagination: {
                page: 1,
                pageSize: 25,
                pageCount: 1,
                total: 10
            }
        }
    }

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0 },
        { field: 'request_title', headerName: 'Tittle', flex: 1 },
        { field: 'Category', headerName: 'Industry', flex: 1 },
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
export function OperatorDataGridApproved() {
    // const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useRouter();

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error</p>

    let data = [
        {
            id: "1",
            request_title: "500 COPPER PIPES",
            Industry: "Oil and Gas",
            company: "Total",
            request_description: "500 Copper Pipes, 100 meters in lenght and 10 meters in diameter"
        },
        {
            id: "2",
            request_title: "1700 ERW PIPES",
            Industry: "Oil and Gas",
            company: "Total",
            request_description: "1700 ERW Pipes, 500 meters in lenght and 10 meters in diameter"
        },
        {
            id: "3",
            request_title: "70 LSAW PIPES",
            Industry: "Oil and Gas",
            company: "Total",
            request_description: "70 LSAW Pipes, 800 meters in lenght and 15 meters in diameter"
        },

    ]

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0 },
        { field: 'request_title', headerName: 'Tittle', flex: 1 },
        { field: 'Industry', headerName: 'Industry', flex: 1 },
        { field: 'Company', headerName: 'Company', flex: 1 },
        { field: 'request_description', headerName: 'Description', flex: 2 },
        {
            field: 'actions', headerName: 'Actions', flex: 1, renderCell: (params) => {
                return <>
                    <button className='action-btn-view'>View Awarded</button>
                    {/* <button className='action-btn-approve'>Approve</button> */}
                </>
            }
        }
    ]

    const rows = data.map((row) => ({
        id: row.id,
        request_title: row.request_title,
        Industry: row.Industry,
        Company: row.company,
        request_description: row.request_description,
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
                    // onRowClick={(rowData) => navigate.push(`/operator/bidDetails/${rowData.id}`)}
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
export function OperatorDataGridUsers() {
    // const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useRouter();

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error</p>

    let data = [
        {
            id: "1",
            operator_name: "Total",
            Category: "Oil and Gas",
        },
        {
            id: "2",
            operator_name: "Chevro",
            Category: "Oil and Gas",
        },
        {
            id: "3",
            operator_name: "Shell",
            Category: "Oil and Gas",
        },
        {
            id: "4",
            operator_name: "Total",
            Category: "Oil and Gas",
        },
        {
            id: "5",
            operator_name: "Tololi",
            Category: "Green Hydrogen",
        }
    ]

    const columns = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'operator_name', headerName: 'Name', flex: 1 },
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
        operator_name: row.operator_name,
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
export function OperatorDataGridBids() {
    // const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useRouter();

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error</p>

    const data = {
        data: [
            {
                id: 1,
                attributes: {
                    request_title: "500 ERW Pipes",
                    request_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                    createdAt: "2023-02-13T07:26:11.135Z",
                    updatedAt: "2023-03-05T19:47:03.342Z",
                    publishedAt: "2023-02-13T07:28:26.544Z",
                    Category: "Oil and Gas",
                    Company: "Tololi",
                    due_date: "2023-04-12",
                    applied_for: "Total 500 ERW Pipes"
                }
            },
            {
                id: 2,
                attributes: {
                    request_title: "500,000 Nuts and bolts",
                    request_description: "I need this amount for my oil company",
                    createdAt: "2023-02-13T10:18:58.400Z",
                    updatedAt: "2023-03-05T19:58:10.780Z",
                    publishedAt: "2023-02-13T10:19:45.993Z",
                    Category: "Oil and Gas",
                    Company: "Tololi",
                    due_date: "2023-04-08",
                    applied_for: "Total 500,000 Nuts and bolts"
                }
            },
            {
                id: 3,
                attributes: {
                    request_title: "PPC Equipment",
                    request_description: "200000 Vests\n100000 Boots\n50000 Helmets\n50000 Gloves",
                    createdAt: "2023-02-13T10:26:17.781Z",
                    updatedAt: "2023-03-05T19:58:19.926Z",
                    publishedAt: "2023-02-13T10:26:18.447Z",
                    Category: "Green Hydrogen",
                    Company: "Tololi",
                    due_date: "2023-05-18",
                    applied_for: "Total: PPC Equipment"
                }
            },
            {
                id: 5,
                attributes: {
                    request_title: "50000 tires",
                    request_description: "tires for my company",
                    createdAt: "2023-02-14T08:10:12.039Z",
                    updatedAt: "2023-03-05T19:58:49.882Z",
                    publishedAt: "2023-02-14T08:10:13.156Z",
                    Category: "Other",
                    Company: "Tololi",
                    due_date: "2023-06-20",
                    applied_for: "Total: 50000 tires"
                }
            },
            {
                id: 6,
                attributes: {
                    request_title: "Edilson Zaus",
                    request_description: "Smart handsome niggas like me",
                    createdAt: "2023-03-05T15:29:21.474Z",
                    updatedAt: "2023-03-05T19:59:03.626Z",
                    publishedAt: "2023-03-05T15:29:22.666Z",
                    Category: "Green Hydrogen",
                    Company: "Tololi",
                    due_date: "2023-10-24",
                    applied_for: "Total: Edilson Zaus"
                }
            },
            {
                id: 7,
                attributes: {
                    request_title: "5 Tonnes of Metal Scraps",
                    request_description: "Needed for metal scrap yard, exactly 5 tonnes needed to build a scrap yard",
                    createdAt: "2023-03-05T17:21:59.535Z",
                    updatedAt: "2023-03-05T19:46:40.043Z",
                    publishedAt: "2023-03-05T17:22:00.745Z",
                    Category: "Other",
                    Company: "Total",
                    due_date: "2023-03-22",
                    applied_for: "Total: 5 Tonnes of Metal Scraps"
                }
            },
        ],
        meta: {
            pagination: {
                page: 1,
                pageSize: 25,
                pageCount: 1,
                total: 10
            }
        }
    }

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0 },
        { field: 'request_title', headerName: 'Tittle', flex: 1 },
        { field: 'Category', headerName: 'Industry', flex: 1 },
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
                    slots={{
                        toolbar: CustomToolbar
                    }}
                    rows={rows}
                    columns={columns}
                    onRowClick={(rowData) => navigate.push(`/operator/bid/${rowData.id}`)}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    className='styled-table'
                />
            </div>
        </>
    )
}
export const data = {
    data: [
        {
            id: 1,
            attributes: {
                request_title: "500 ERW Pipes",
                request_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                createdAt: "2023-02-13T07:26:11.135Z",
                updatedAt: "2023-03-05T19:47:03.342Z",
                publishedAt: "2023-02-13T07:28:26.544Z",
                Category: "Oil and Gas",
                Company: "Tololi",
                due_date: "2023-04-12",
                applied_for: "Total 500 ERW Pipes"
            }
        },
        {
            id: 2,
            attributes: {
                request_title: "500,000 Nuts and bolts",
                request_description: "I need this amount for my oil company",
                createdAt: "2023-02-13T10:18:58.400Z",
                updatedAt: "2023-03-05T19:58:10.780Z",
                publishedAt: "2023-02-13T10:19:45.993Z",
                Category: "Oil and Gas",
                Company: "Tololi",
                due_date: "2023-04-08",
                applied_for: "Total 500,000 Nuts and bolts"
            }
        },
        {
            id: 3,
            attributes: {
                request_title: "PPC Equipment",
                request_description: "200000 Vests\n100000 Boots\n50000 Helmets\n50000 Gloves",
                createdAt: "2023-02-13T10:26:17.781Z",
                updatedAt: "2023-03-05T19:58:19.926Z",
                publishedAt: "2023-02-13T10:26:18.447Z",
                Category: "Green Hydrogen",
                Company: "Tololi",
                due_date: "2023-05-18",
                applied_for: "Total: PPC Equipment"
            }
        },
        {
            id: 5,
            attributes: {
                request_title: "50000 tires",
                request_description: "tires for my company",
                createdAt: "2023-02-14T08:10:12.039Z",
                updatedAt: "2023-03-05T19:58:49.882Z",
                publishedAt: "2023-02-14T08:10:13.156Z",
                Category: "Other",
                Company: "Tololi",
                due_date: "2023-06-20",
                applied_for: "Total: 50000 tires"
            }
        },
        {
            id: 6,
            attributes: {
                request_title: "Edilson Zaus",
                request_description: "Smart handsome niggas like me",
                createdAt: "2023-03-05T15:29:21.474Z",
                updatedAt: "2023-03-05T19:59:03.626Z",
                publishedAt: "2023-03-05T15:29:22.666Z",
                Category: "Green Hydrogen",
                Company: "Tololi",
                due_date: "2023-10-24",
                applied_for: "Total: Edilson Zaus"
            }
        },
        {
            id: 7,
            attributes: {
                request_title: "5 Tonnes of Metal Scraps",
                request_description: "Needed for metal scrap yard, exactly 5 tonnes needed to build a scrap yard",
                createdAt: "2023-03-05T17:21:59.535Z",
                updatedAt: "2023-03-05T19:46:40.043Z",
                publishedAt: "2023-03-05T17:22:00.745Z",
                Category: "Other",
                Company: "Total",
                due_date: "2023-03-22",
                applied_for: "Total: 5 Tonnes of Metal Scraps"
            }
        },
    ],
    meta: {
        pagination: {
            page: 1,
            pageSize: 25,
            pageCount: 1,
            total: 10
        }
    }
}