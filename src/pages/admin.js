import { useRouter } from 'next/router'

export default function Adminregistration() {
  const navigate = useRouter();

  const handleSubmit = event => {
    event.preventDefault();

    navigate.push('/regulator/dashboard');
  };
  
  return (
    <div className='login' style={{padding: "4rem 0"}}> 
       <form className="form" target="_blank" onSubmit={handleSubmit}>
          <h2>REGULATOR LOGIN</h2>
          <input type="email" name="Email" placeholder="Email" className="input" required/><br />
          <input type="password" name="Password" placeholder="Password" className="input" required/><br />
          <button className="btn" type="submit">Submit</button>
        </form>
    </div>
  )
}
