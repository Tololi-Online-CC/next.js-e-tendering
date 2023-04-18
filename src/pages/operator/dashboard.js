import Link from 'next/link'
import { useFetch } from "../api/useFetch"
import OperatorLayout from '@/components/operatorLayout';

export default function dashboard() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')

    if (loading) return (<Layout><p>Loading...</p></Layout>)
    if (error) return <p>Error</p>

    const bid_details = data.data

    return (
        <OperatorLayout>
            <div>
                <div className="dashboard">
                    <h1>Welcome back</h1>
                    <div className='analytics'>
                        <div className='card'>
                            <h2><ion-icon name="arrow-up-circle-outline" style={{ color: "#ffc90a" }}></ion-icon> 10</h2>
                            <span>RFQs posted</span>
                        </div>
                        <div className='card'>
                            <h2><ion-icon name="time-outline" style={{ color: "#ffc90a" }}></ion-icon> 1</h2>
                            <span>RFQs pending</span>
                        </div>
                        <div className='card'>
                            <h2><ion-icon name="checkmark-circle-outline" style={{ color: "#ffc90a" }}></ion-icon> 3</h2>
                            <span>RFQs accepted</span>
                        </div>
                        <div className='card'>
                            <h2><ion-icon name="close-circle-outline" style={{ color: "#ffc90a" }}></ion-icon> 8</h2>
                            <span>RFQs rejected</span>
                        </div>
                    </div><br />
                    <div className='analytics'>
                        <div className='card'>
                            <h2><ion-icon name="archive-outline" style={{ color: "#ffc90a" }}></ion-icon> 57</h2>
                            <span>Bids recieved</span>
                        </div>
                        <div className='card'>
                            <h2><ion-icon name="hourglass-outline" style={{ color: "#ffc90a" }}></ion-icon> 31</h2>
                            <span>Bids pending</span>
                        </div>
                        <div className='card'>
                            <h2><ion-icon name="close-circle-outline" style={{ color: "#ffc90a" }}></ion-icon> 20</h2>
                            <span>Bids rejected</span>
                        </div>
                        <div className='card'>
                            <h2><ion-icon name="checkmark-circle-outline" style={{ color: "#ffc90a" }}></ion-icon> 6</h2>
                            <span>Bids awarded</span>
                        </div>
                    </div>
                    <div className='all-bids'>
                        <div className='all-bids-header'>
                            <h2>My RFQs</h2>
                            <Link href="/operator/rfqs" style={{ textDecoration: 'none' }}><span>See all RFQs <ion-icon name="arrow-forward-outline"></ion-icon></span></Link>
                        </div>
                        <div className='dashboard-bid-card'>
                            <span>{bid_details[0].id}</span>
                            <span>{bid_details[0].attributes.request_title}</span>
                            <span>{bid_details[0].attributes.Category}</span>
                            <span>{bid_details[0].attributes.request_description.slice(0, 26)}...</span>
                            <span>{bid_details[0].attributes.due_date}</span>
                            <Link href='/operator/bidDetails/1' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
                        </div>
                        <div className='dashboard-bid-card'>
                            <span>{bid_details[1].id}</span>
                            <span>{bid_details[1].attributes.request_title}</span>
                            <span>{bid_details[1].attributes.Category}</span>
                            <span>{bid_details[1].attributes.request_description.slice(0, 26)}...</span>
                            <span>{bid_details[1].attributes.due_date}</span>
                            <Link href='/operator/bidDetails/3' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
                        </div>
                        <div className='dashboard-bid-card'>
                            <span>{bid_details[2].id}</span>
                            <span>{bid_details[2].attributes.request_title}</span>
                            <span>{bid_details[2].attributes.Category}</span>
                            <span>{bid_details[2].attributes.request_description.slice(0, 26)}...</span>
                            <span>{bid_details[2].attributes.due_date}</span>
                            <Link href='/operator/bidDetails/4' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
                        </div>
                        <div className='dashboard-bid-card'>
                            <span>{bid_details[3].id}</span>
                            <span>{bid_details[3].attributes.request_title}</span>
                            <span>{bid_details[3].attributes.Category}</span>
                            <span>{bid_details[3].attributes.request_description.slice(0, 26)}...</span>
                            <span>{bid_details[3].attributes.due_date}</span>
                            <Link href='/operator/bidDetails/5' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
                        </div>
                        <div className='dashboard-bid-card'>
                            <span>{bid_details[4].id}</span>
                            <span>{bid_details[4].attributes.request_title}</span>
                            <span>{bid_details[4].attributes.Category}</span>
                            <span>{bid_details[4].attributes.request_description.slice(0, 26)}...</span>
                            <span>{bid_details[4].attributes.due_date}</span>
                            <Link href='/operator/bidDetails/6' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
                        </div>
                    </div>
                    <div className='all-bids'>
                        <div className='all-bids-header'>
                            <h2>Bids Received</h2>
                            <Link href="/operator/bids" style={{ textDecoration: 'none' }}><span>See all Bids <ion-icon name="arrow-forward-outline"></ion-icon></span></Link>
                        </div>
                        <div className='dashboard-bid-card'>
                            <span>{bid_details[0].id}</span>
                            <span>{bid_details[0].attributes.request_title}</span>
                            <span>{bid_details[0].attributes.Category}</span>
                            <span>{bid_details[0].attributes.request_description.slice(0, 26)}...</span>
                            <span>{bid_details[0].attributes.due_date}</span>
                            <Link href='/operator/bid/1' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
                        </div>
                        <div className='dashboard-bid-card'>
                            <span>{bid_details[1].id}</span>
                            <span>{bid_details[1].attributes.request_title}</span>
                            <span>{bid_details[1].attributes.Category}</span>
                            <span>{bid_details[1].attributes.request_description.slice(0, 26)}...</span>
                            <span>{bid_details[1].attributes.due_date}</span>
                            <Link href='/operator/bid/3' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
                        </div>
                        <div className='dashboard-bid-card'>
                            <span>{bid_details[2].id}</span>
                            <span>{bid_details[2].attributes.request_title}</span>
                            <span>{bid_details[2].attributes.Category}</span>
                            <span>{bid_details[2].attributes.request_description.slice(0, 26)}...</span>
                            <span>{bid_details[2].attributes.due_date}</span>
                            <Link href='/operator/bid/4' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
                        </div>
                        <div className='dashboard-bid-card'>
                            <span>{bid_details[3].id}</span>
                            <span>{bid_details[3].attributes.request_title}</span>
                            <span>{bid_details[3].attributes.Category}</span>
                            <span>{bid_details[3].attributes.request_description.slice(0, 26)}...</span>
                            <span>{bid_details[3].attributes.due_date}</span>
                            <Link href='/operator/bid/5' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
                        </div>
                        <div className='dashboard-bid-card'>
                            <span>{bid_details[4].id}</span>
                            <span>{bid_details[4].attributes.request_title}</span>
                            <span>{bid_details[4].attributes.Category}</span>
                            <span>{bid_details[4].attributes.request_description.slice(0, 26)}...</span>
                            <span>{bid_details[4].attributes.due_date}</span>
                            <Link href='/operator/bid/6' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
                        </div>
                    </div>
                    <div className='announcements'>
                        <h2 style={{ marginTop: "40px" }}>Announcements</h2>
                        <div className='announcements-card'>
                            <h3>Scheduled Maintenance</h3>
                            <p>Read this article to find out how to easily browse through bids and find ones that are perfect for you</p>
                            <a href='#r' className='yellow-hover'>View more</a>
                        </div>
                        <div className='announcements-card'>
                            <h3>New Features Now Available!</h3>
                            <p>Read this article to find out how to easily browse through bids and find ones that are perfect for you</p>
                            <a href='#r' className='yellow-hover'>View more</a>
                        </div>
                        <div className='announcements-card'>
                            <h3>New Features Now Available!</h3>
                            <p>Read this article to find out how to easily browse through bids and find ones that are perfect for you</p>
                            <a href='#r' className='yellow-hover'>View more</a>
                        </div><br />
                    </div>
                </div>
            </div>
        </OperatorLayout>
    )
}
