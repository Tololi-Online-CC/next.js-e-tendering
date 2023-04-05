import { useEffect, useState } from "react";

export const useFetch = (url) => {
    // const [data, setData] = useState(null)
    // const [error, setError] = useState(null)
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true)

    //         try {
    //             const res = await fetch(url)
    //             const json = await res.json()

    //             setData(json)
    //             setLoading(false)
    //         } catch (error) {
    //             setError(error)
    //             setLoading(false)
    //         }
    //     }
    //     fetchData()
    // }, [url])
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
                    Company: "Chevron",
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
                    Company: "Engen",
                    due_date: "2023-05-18"
                }
            },
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
            {
                id: 5,
                attributes: {
                    request_title: "50000 tires",
                    request_description: "tires for my company",
                    createdAt: "2023-02-14T08:10:12.039Z",
                    updatedAt: "2023-03-05T19:58:49.882Z",
                    publishedAt: "2023-02-14T08:10:13.156Z",
                    Category: "Other",
                    Company: "MotorX",
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
                    Company: "Tololi",
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
                    Company: "Metal Scrappers",
                    due_date: "2023-03-22"
                }
            },
            {
                id: 8,
                attributes: {
                    request_title: "Bandres",
                    request_description: "Smart data guys",
                    createdAt: "2023-03-06T09:51:59.673Z",
                    updatedAt: "2023-03-06T09:52:01.857Z",
                    publishedAt: "2023-03-06T09:52:01.850Z",
                    Category: "Other",
                    Company: "Tololi",
                    due_date: "2023-04-01"
                }
            },
            {
                id: 9,
                attributes: {
                    request_title: "5 millon chairs",
                    request_description: "Timber wood varnished diamond cornered chairs with gold finishes",
                    createdAt: "2023-03-06T11:00:18.922Z",
                    updatedAt: "2023-03-06T11:00:20.418Z",
                    publishedAt: "2023-03-06T11:00:20.415Z",
                    Category: "Other",
                    Company: "Tololi",
                    due_date: "2023-05-17"
                }
            },
            {
                id: 10,
                attributes: {
                    request_title: "5000 Q's",
                    request_description: "Super fresh wavy driver man",
                    createdAt: "2023-03-22T14:16:27.758Z",
                    updatedAt: "2023-03-22T14:16:28.742Z",
                    publishedAt: "2023-03-22T14:16:28.739Z",
                    Category: "Other",
                    Company: "Tololi",
                    due_date: "2023-04-05"
                }
            }
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
    const error = false
    const loading = false

    // return {loading, error, data}
    return {loading, error, data};
}

export const useFetchDetail = (id_) => {
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
                    Company: "Chevron",
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
                    Company: "Engen",
                    due_date: "2023-05-18"
                }
            },
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
            {
                id: 5,
                attributes: {
                    request_title: "50000 tires",
                    request_description: "tires for my company",
                    createdAt: "2023-02-14T08:10:12.039Z",
                    updatedAt: "2023-03-05T19:58:49.882Z",
                    publishedAt: "2023-02-14T08:10:13.156Z",
                    Category: "Other",
                    Company: "MotorX",
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
                    Company: "Tololi",
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
                    Company: "Metal Scrappers",
                    due_date: "2023-03-22"
                }
            },
            {
                id: 8,
                attributes: {
                    request_title: "Bandres",
                    request_description: "Smart data guys",
                    createdAt: "2023-03-06T09:51:59.673Z",
                    updatedAt: "2023-03-06T09:52:01.857Z",
                    publishedAt: "2023-03-06T09:52:01.850Z",
                    Category: "Other",
                    Company: "Tololi",
                    due_date: "2023-04-01"
                }
            },
            {
                id: 9,
                attributes: {
                    request_title: "5 millon chairs",
                    request_description: "Timber wood varnished diamond cornered chairs with gold finishes",
                    createdAt: "2023-03-06T11:00:18.922Z",
                    updatedAt: "2023-03-06T11:00:20.418Z",
                    publishedAt: "2023-03-06T11:00:20.415Z",
                    Category: "Other",
                    Company: "Tololi",
                    due_date: "2023-05-17"
                }
            },
            {
                id: 10,
                attributes: {
                    request_title: "5000 Q's",
                    request_description: "Super fresh wavy driver man",
                    createdAt: "2023-03-22T14:16:27.758Z",
                    updatedAt: "2023-03-22T14:16:28.742Z",
                    publishedAt: "2023-03-22T14:16:28.739Z",
                    Category: "Other",
                    Company: "Tololi",
                    due_date: "2023-04-05"
                }
            }
        ],
        meta: {
            pagination: {
                page: 1,
                pageSize: 25,
                pageCount: 1,
                total: 10
            }
        }
    };
    const error = false;
    const loading = false;

    
    const prod_data = data.data[id_-1];

    return {loading, error, prod_data};
}

