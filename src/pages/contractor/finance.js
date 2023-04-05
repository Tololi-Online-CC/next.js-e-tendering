import Layout from "@/components/contractorLayout";

export default function Finance() {
  return (
    <Layout>
      <div className='finance-banner'>
        <img src='https://monedainvest.com/wp-content/uploads/2022/04/cropped-Image_20220402_082703-removebg-1-1536x320-1.png' alt="moneda logo" className='moneda-image'></img>
        <h2>We bring over 50 years of combined expertise in energy value chains, corporate finance and structured international trade across the African continent.</h2>
        <a href='https://monedainvest.com/' target='_blank' rel="noreferrer"><button className='btn-finance' o>Apply for Finance</button></a>
      </div>
    </Layout>
  )
}
