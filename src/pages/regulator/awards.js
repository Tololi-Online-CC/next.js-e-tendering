import { RegulatorDataGridAll } from '@/components/BidDataGridRegulator'
import RegulatorLayout from '@/components/regulatorLayout'

export default function Awards() {
    return (
        <RegulatorLayout>
            <div>
                <h2 className='h2-padding'>All Awards</h2>
                <RegulatorDataGridAll />
            </div>
        </RegulatorLayout>
    )
}
