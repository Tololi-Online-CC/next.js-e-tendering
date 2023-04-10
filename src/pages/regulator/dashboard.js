import { useFetch } from '../api/useFetch'
import Link from 'next/link'
import RegulatorLayout from '@/components/regulatorLayout'

export default function Dashboard() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')

  if (loading) return <RegulatorLayout><p>Loading...</p></RegulatorLayout>
  if (error) return <RegulatorLayout><p>Error</p></RegulatorLayout>

  const bid_details = data.data

  return (
    <RegulatorLayout>
      <div className="dashboard">
        <h1>Welcome back</h1>
        <div className='analytics'>
          <div className='card'>
            <h2><ion-icon name="archive-outline" style={{ color: "#ffc90a" }}></ion-icon>7.1K</h2>
            <span>Monthly Bids</span>
          </div>
          <div className='card'>
            <h2><ion-icon name="time-outline" style={{ color: "#ffc90a" }}></ion-icon>1.3K</h2>
            <span>Bids Pending Approval</span>
          </div>
          <div className='card'>
            <h2><ion-icon name="hourglass-outline" style={{ color: "#ffc90a" }}></ion-icon>1.7K</h2>
            <span>Awards Pending Approval</span>
          </div>
          <div className='card'>
            <h2><ion-icon name="person-outline" style={{ color: "#ffc90a" }}></ion-icon>234</h2>
            <span>New Users</span>
          </div>
        </div>
        <div className='announcements'>
          <h2 style={{ marginTop: "40px" }}>Notifications</h2>
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
        <div className='all-bids'>
          <div className='all-bids-header'>
            <h2>Pending RFQs</h2>
            <Link href={"/regulator/contracts"} style={{ textDecoration: 'none' }}><span>See all pending <ion-icon name="arrow-forward-outline"></ion-icon></span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[0].id}</span>
            <span>{bid_details[0].attributes.request_title}</span>
            <span>{bid_details[0].attributes.Category}</span>
            <span>{bid_details[0].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[0].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/1' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[1].id}</span>
            <span>{bid_details[1].attributes.request_title}</span>
            <span>{bid_details[1].attributes.Category}</span>
            <span>{bid_details[1].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[1].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/3' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[2].id}</span>
            <span>{bid_details[2].attributes.request_title}</span>
            <span>{bid_details[2].attributes.Category}</span>
            <span>{bid_details[2].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[2].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/4' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[3].id}</span>
            <span>{bid_details[3].attributes.request_title}</span>
            <span>{bid_details[3].attributes.Category}</span>
            <span>{bid_details[3].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[3].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/5' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[4].id}</span>
            <span>{bid_details[4].attributes.request_title}</span>
            <span>{bid_details[4].attributes.Category}</span>
            <span>{bid_details[4].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[4].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/6' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
        </div>
        <div className='all-bids'>
          <div className='all-bids-header'>
            <h2>Pending Bids</h2>
            <Link href={"/regulator/contracts"} style={{ textDecoration: 'none' }}><span>See all pending <ion-icon name="arrow-forward-outline"></ion-icon></span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[0].id}</span>
            <span>{bid_details[0].attributes.request_title}</span>
            <span>{bid_details[0].attributes.Category}</span>
            <span>{bid_details[0].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[0].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/1' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[1].id}</span>
            <span>{bid_details[1].attributes.request_title}</span>
            <span>{bid_details[1].attributes.Category}</span>
            <span>{bid_details[1].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[1].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/3' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[2].id}</span>
            <span>{bid_details[2].attributes.request_title}</span>
            <span>{bid_details[2].attributes.Category}</span>
            <span>{bid_details[2].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[2].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/4' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[3].id}</span>
            <span>{bid_details[3].attributes.request_title}</span>
            <span>{bid_details[3].attributes.Category}</span>
            <span>{bid_details[3].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[3].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/5' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[4].id}</span>
            <span>{bid_details[4].attributes.request_title}</span>
            <span>{bid_details[4].attributes.Category}</span>
            <span>{bid_details[4].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[4].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/6' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
        </div>
        <div className='all-bids'>
          <div className='all-bids-header'>
            <h2>Awarded Contracts</h2>
            <Link href={"/regulator/awards"} style={{ textDecoration: 'none' }}><span>See all rewarded <ion-icon name="arrow-forward-outline"></ion-icon></span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[0].id}</span>
            <span>{bid_details[0].attributes.request_title}</span>
            <span>{bid_details[0].attributes.Category}</span>
            <span>{bid_details[0].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[0].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/1' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[1].id}</span>
            <span>{bid_details[1].attributes.request_title}</span>
            <span>{bid_details[1].attributes.Category}</span>
            <span>{bid_details[1].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[1].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/3' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[2].id}</span>
            <span>{bid_details[2].attributes.request_title}</span>
            <span>{bid_details[2].attributes.Category}</span>
            <span>{bid_details[2].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[2].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/4' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[3].id}</span>
            <span>{bid_details[3].attributes.request_title}</span>
            <span>{bid_details[3].attributes.Category}</span>
            <span>{bid_details[3].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[3].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/5' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[4].id}</span>
            <span>{bid_details[4].attributes.request_title}</span>
            <span>{bid_details[4].attributes.Category}</span>
            <span>{bid_details[4].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[4].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/6' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
        </div>
        <div className='all-bids'>
          <div className='all-bids-header'>
            <h2>Users</h2>
            <Link href={"/regulator/users"} style={{ textDecoration: 'none' }}><span>See all users <ion-icon name="arrow-forward-outline"></ion-icon></span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[0].id}</span>
            <span>{bid_details[0].attributes.request_title}</span>
            <span>{bid_details[0].attributes.Category}</span>
            <span>{bid_details[0].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[0].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/1' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[1].id}</span>
            <span>{bid_details[1].attributes.request_title}</span>
            <span>{bid_details[1].attributes.Category}</span>
            <span>{bid_details[1].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[1].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/3' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[2].id}</span>
            <span>{bid_details[2].attributes.request_title}</span>
            <span>{bid_details[2].attributes.Category}</span>
            <span>{bid_details[2].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[2].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/4' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[3].id}</span>
            <span>{bid_details[3].attributes.request_title}</span>
            <span>{bid_details[3].attributes.Category}</span>
            <span>{bid_details[3].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[3].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/5' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[4].id}</span>
            <span>{bid_details[4].attributes.request_title}</span>
            <span>{bid_details[4].attributes.Category}</span>
            <span>{bid_details[4].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[4].attributes.due_date}</span>
            <Link href='/regulator/bidDetails/6' style={{ textDecoration: 'none' }}><span className='yellow-hover'>View details</span></Link>
          </div>
        </div>
      </div>
    </RegulatorLayout>
  )
}
