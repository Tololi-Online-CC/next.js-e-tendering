import { RegulatorDataGridUsers } from '@/components/BidDataGridRegulator'
import RegulatorLayout from '@/components/regulatorLayout';

export default function Users() {
  return (
    <RegulatorLayout>
      <div className="bid-header" style={{ marginTop: 0 }}>
        <h2 className='h2-padding'>All Users</h2>
        {/* <button className='add-event-button' onClick={[]}>Add New User</button> */}
      </div>
      <RegulatorDataGridUsers />
    </RegulatorLayout>
  )
}
