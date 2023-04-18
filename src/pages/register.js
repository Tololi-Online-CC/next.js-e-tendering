import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head';

export default function Registrationpage() {
  const navigate = useRouter();

  const handleSubmit = event => {
    event.preventDefault();

    navigate.push('/contractor/dashboard');
  };

  return (
    <div className='login'>
      <Head>
        <title>E-Tendering System || Namcor</title>
      </Head>
      <form className="form" target="_blank" onSubmit={handleSubmit}>
        <h2>REGISTER</h2>
        <h3>Business Information</h3>
        <input type="text" name="trade_name" placeholder="Company Trade Name" className="input" required /><br />
        <input type="number" name="vat_number" placeholder="Vat Number" className="input" required /><br />
        <input type="text" name="industry" placeholder="Industry/Sector" className="input" required /><br />
        <input type="text" name="place_of_business" placeholder="Place of Business" className="input" required /><br />
        <input type="text" name="pysical_address" placeholder="Physical Address" className="input" required /><br />
        <input type="text" name="tel_number" placeholder="Telephone Number" className="input" required /><br />
        <input type="text" name="fax_number" placeholder="Fax Number" className="input" required /><br />
        <input type="text" name="business_email" placeholder="Business Email" className="input" required /><br />
        <input type="text" name="postal_address" placeholder="Postal Address" className="input" required /><br />
        <h3>Focal Person Information</h3>
        <input type="text" name="focal_person" placeholder="Full Name of Focal Person" className="input" required /><br />
        <input type="text" name="focal_person_email" placeholder="Focal Person Email" className="input" required /><br />
        <h3>Account Information</h3>
        <input type="text" name="username" placeholder="Username" className="input" required /><br />
        <input type="password" name="password" placeholder="Password" className="input" required /><br />
        <input type="password" name="confirm_password" placeholder="Confirm Password" className="input" required /><br />
        <button className="btn" type="submit">Submit</button>
      </form>
      <Link href='/' className='link' style={{ margin: '0 0 20px' }}>Login</Link>
    </div>
  )
}
