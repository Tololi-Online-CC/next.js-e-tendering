import RegulatorLayout from "@/components/regulatorLayout"

export default function MyAcccount() {
    
        setTimeout(() => {
            document.getElementById('full_name').value = "Edilson Zau"
            document.getElementById('pysical_address').value = "38 Aristotles Street, Academia"
            document.getElementById('tel_number').value = "+264 200 9493"
            document.getElementById('fax_number').value = "N/A"
            document.getElementById('business_email').value = "development@tololishop.com"
            document.getElementById('postal_address').value = "2321 Walvisbay"
        }, 1500)
    
    return (
        <RegulatorLayout>
            <div>
                <form className='my-account-form'>
                    <h3>Regulator Information</h3>
                    <input type="text" name="full_name" id="full_name" placeholder="Full Name" className="input" /><br />
                    <input type="text" name="pysical_address" id="pysical_address" placeholder="Physical Address" className="input" /><br />
                    <input type="text" name="tel_number" id="tel_number" placeholder="Telephone Number" className="input" /><br />
                    <input type="text" name="fax_number" id="fax_number" placeholder="Fax Number" className="input" /><br />
                    <input type="text" name="business_email" id="business_email" placeholder="Business Email" className="input" /><br />
                    <input type="text" name="postal_address" id="postal_address" placeholder="Postal Address" className="input" /><br />
                    <h3>Account Information</h3>
                    <input type="text" name="username" placeholder="Username" className="input" value="Namcor_Reg_001" readOnly /><br />
                    <input type="password" name="password" id="password" placeholder="Password" className="input" value="Tololi Password" /><br />
                    <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" className="input" /><br />
                    <button className="btn" type="submit">UPDATE</button>
                </form>
            </div>
        </RegulatorLayout>

    )
}
