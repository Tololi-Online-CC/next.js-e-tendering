import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <div style={{ overflowX: "hidden" }}>
            <Head>
                <title>E-Tendering System || Namcor</title>
            </Head>
            <div className='site-header'>
                <Link href='/contractor/dashboard'><img src='/logo.png' alt='Namcor Logo' /></Link>
                <div>
                    <a href='#' style={{ textDecoration: 'none' }} ><span>Categories</span></a>
                    <a href='https://www.namcor.com.na/' style={{ textDecoration: 'none' }} target='_blank' rel="noreferrer"><span>News</span></a>
                    <div className='dropdown'>
                        <a href='#' style={{ textDecoration: 'none' }}><span>My account</span></a>
                        <div className="dropdown-content">
                            <Link href='/contractor/my-account'>Profile</Link>
                            <Link href='/'>Log-out</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='second-head'>
                <Link href='/contractor/dashboard' style={{ textDecoration: 'none' }}><span>Dashboard</span></Link>
                <Link href='/contractor/projects' style={{ textDecoration: 'none' }}><span>Projects</span></Link>
                <Link href='/contractor/bids' style={{ textDecoration: 'none' }}><span>My Bids</span></Link>
                <Link href='/contractor/rfqs' style={{ textDecoration: 'none' }}><span>RFQs</span></Link>
                <Link href='/contractor/finance' style={{ textDecoration: 'none' }}><span>Finance</span></Link>
            </div>
            <main>{children}</main>
        </div>

    );
};