import Sidebar from "./Sidebar";
import Link from "next/link";

export default function RegulatorLayout({ children }) {

  return (
    <div style={{ height: '100vh', overflow: "hidden", margin: 0 }}>
      <div className='site-header' id="reg">
        <Link href='/regulator/dashboard'><img src='/logo.png' alt='Namcor Logo' /></Link>
        <div>
          <a href='#' style={{ textDecoration: 'none' }} ><span>Categories</span></a>
          <a href='https://www.namcor.com.na/' style={{ textDecoration: 'none' }} target='_blank' rel="noreferrer"><span>News</span></a>
          <div className='dropdown'>
            <a href='#' style={{ textDecoration: 'none' }}><span>My account</span></a>
            <div className="dropdown-content">
              <Link href='/regulator/my-account'>Profile</Link>
              <Link href='/'>Log-out</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='regulator'>
        <Sidebar />
        <main className='regulator-main'>{children}</main>
      </div>
    </div>
  );
};