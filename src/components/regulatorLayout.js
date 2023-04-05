import Sidebar from "./Sidebar";
import Link from "next/link";

export default function RegulatorLayout({ children }) {

  return (
    <div>
      <div className='site-header'>
        <Link href='/regulator/dashboard'><img src='/logo.png' alt='Namcor Logo' /></Link>
        <div>
          <a href='#' style={{ textDecoration: 'none' }}><span>Categories</span></a>
          <a href='https://www.namcor.com.na/' style={{ textDecoration: 'none' }} target='_blank' rel="noreferrer"><span>News</span></a>
          <Link href='/regulator/my-account' style={{ textDecoration: 'none' }}><span>My Account</span></Link>
        </div>
      </div>
      <div className='regulator'>
        <Sidebar />
        <main className='regulator-main'>{children}</main>
      </div>
    </div>
  );
};