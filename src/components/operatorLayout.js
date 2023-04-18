import Link from 'next/link';

export default function OperatorLayout({ children }) {
    return (
        <div style={{ overflowX: "hidden" }}>
            <div className='site-header'>
                <Link href='/operator/dashboard'><img src='/logo.png' alt='Namcor Logo' /></Link>
                <div>
                    <a href='#' style={{ textDecoration: 'none' }} ><span>Categories</span></a>
                    <a href='https://www.namcor.com.na/' style={{ textDecoration: 'none' }} target='_blank' rel="noreferrer"><span>News</span></a>
                    <div className='dropdown'>
                        <a href='#' style={{ textDecoration: 'none' }}><span>My account</span></a>
                        <div className="dropdown-content">
                            <Link href='/operator/my-account'>Profile</Link>
                            <Link href='/'>Log-out</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='second-head'>
                <Link href='/operator/dashboard' style={{ textDecoration: 'none' }}><span>Dashboard</span></Link>
                <Link href='/operator/projects' style={{ textDecoration: 'none' }}><span>Projects</span></Link>
                <Link href='/operator/rfqs' style={{ textDecoration: 'none' }}><span>My RFQs</span></Link>
                <Link href='/operator/bids' style={{ textDecoration: 'none' }}><span>Bids</span></Link>
            </div>
            <main>{children}</main>
        </div>

    );
};