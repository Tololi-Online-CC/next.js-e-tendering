import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Sidebar() {
  let navigate = useRouter()
  const buttonClick = () => {
    navigate.push('/admin');
  }
  let background = {
    borderBottom: '1px solid #111111',
  }
  return (
    <div className='regulator-sidebar'>
      <div>
        <Link href='/regulator/dashboard' style={(navigate.pathname === '/regulator/dashboard') ? background = { borderBottom: '1px solid #ffc90a' } : background = { backgroundColor: '#111111' }}>Dashboard</Link>
        <Link href='/regulator/analytics' style={(navigate.pathname === '/regulator/analytics') ? background = { borderBottom: '1px solid #ffc90a' } : background = { backgroundColor: '#111111' }}>Analytics</Link>
        <Link href='/regulator/contracts' style={(navigate.pathname === '/regulator/contracts') ? background = { borderBottom: '1px solid #ffc90a' } : background = { backgroundColor: '#111111' }}>Contracts</Link>
        <Link href='/regulator/proposals' style={(navigate.pathname === '/regulator/proposals') ? background = { borderBottom: '1px solid #ffc90a' } : background = { backgroundColor: '#111111' }}>Awards</Link>
        <Link href='/regulator/users' style={(navigate.pathname === '/regulator/users') ? background = { borderBottom: '1px solid #ffc90a' } : background = { backgroundColor: '#111111' }}>Users</Link>
        {/* <Link to='/regulator/bids'>Administration</Link> */}
      </div>
      <button className="btn" onClick={buttonClick}>Log-Out</button>
    </div>
  )
}
