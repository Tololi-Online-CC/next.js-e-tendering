import OperatorLayout from "@/components/operatorLayout"

export default function MyAcccount() {
    
        setTimeout(() => {
            document.getElementById('trade_name').value = "Total"
            document.getElementById('vat_number').value = "10012821232"
            document.getElementById('industry').value = "Oil & Gas"
            document.getElementById('place_of_business').value = "Windhoek, Namibia"
            document.getElementById('pysical_address').value = "5 Otto Nitzsche Street, Klein Windhoek"
            document.getElementById('tel_number').value = "+264 61 374 900"
            document.getElementById('fax_number').value = "+264 61 374 911"
            document.getElementById('business_email').value = "total.energy@gmail.com"
            document.getElementById('postal_address').value = "42236 Windhoek"
            document.getElementById('focal_person').value = "Harry Hanstein"
            document.getElementById('focal_person_email').value = "harry.hanstein@totalfinaelf.co.za"
        }, 1500)
    
    
    

    return (
        <OperatorLayout>
            <div className='my-account'>
                <div className='account-side'>
                    <img src="https://logowik.com/content/uploads/images/787_total.jpg" alt="profile" className="circular-img"></img>
                    <h3>Company Name</h3>
                    <p>Total</p>
                    <h3>Company Email</h3>
                    <p><a href='mailto:total.energy@gmail.com'>total.energy@gmail.com</a></p>
                    <h3>Company Phone Number</h3>
                    <p>+264 61 374 900</p>
                </div>
                <form className='my-account-form' target="_blank" onSubmit={[]}>
                    <h3>Business Information</h3>
                    <input type="text" name="trade_name" id="trade_name" placeholder="Company Trade Name" className="input" /><br />
                    <input type="number" name="vat_number" id="vat_number" placeholder="Vat Number" className="input" /><br />
                    <input type="text" name="industry" id="industry" placeholder="Industry/Sector" className="input" /><br />
                    <input type="text" name="place_of_business" id="place_of_business" placeholder="Place of Business" className="input" /><br />
                    <input type="text" name="pysical_address" id="pysical_address" placeholder="Physical Address" className="input" /><br />
                    <input type="text" name="tel_number" id="tel_number" placeholder="Telephone Number" className="input" /><br />
                    <input type="text" name="fax_number" id="fax_number" placeholder="Fax Number" className="input" /><br />
                    <input type="text" name="business_email" id="business_email" placeholder="Business Email" className="input" /><br />
                    <input type="text" name="postal_address" id="postal_address" placeholder="Postal Address" className="input" /><br />
                    <h3>Focal Person Information</h3>
                    <input type="text" name="focal_person" id="focal_person" placeholder="Full Name of Focal Person" className="input" /><br />
                    <input type="text" name="focal_person_email" id="focal_person_email" placeholder="Focal Person Email" className="input" /><br />
                    <h3>Account Information</h3>
                    <input type="text" name="username" placeholder="Username" className="input" value="Total_Energies" readOnly /><br />
                    <input type="password" name="password" id="password" placeholder="Password" className="input" value="Total Password" /><br />
                    <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" className="input" /><br />
                    <button className="btn" type="submit">UPDATE</button>
                </form>
            </div>
        </OperatorLayout>

    )
}
