import RegulatorDataGridAll from '@/components/BidDataGridRegulator'


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
