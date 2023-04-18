import OperatorLayout from '@/components/operatorLayout';
import { OperatorDataGridAll, OperatorDataGridPending, OperatorDataGridRejected, OperatorDataGridApproved } from '../../components/DataGridOperator'
import { useState } from "react";
import addRfq from '@/components/addRfqs';


export default function StatusList() {
    const [selectedComponent, setSelectedComponent] = useState("");

    const handleSelection = (component) => {
        setSelectedComponent(component);
    };
    function NavigateContracts() {
        return (
            <div style={{ paddingLeft: "20px" }}>
                <span className="filter-a" onClick={() => handleSelection("Pending")}>Pending</span>
                <span className="filter-a" onClick={() => handleSelection("Approved")}>Approved</span>
                <span className="filter-a" onClick={() => handleSelection("Rejected")}>Rejected</span>
                <span className="filter-a" onClick={() => handleSelection("AllBids")}>All RFQs</span>
            </div>
        );
    }

    switch (selectedComponent) {
        case "Pending":
            return (
                <OperatorLayout>
                    <div>
                        <div className="bid-header">
                            <h2 className='h2-padding'>RFQs Pending Approval</h2>
                            <button className='add-event-button' onClick={addRfq}>Add New RFQ</button>
                        </div>
                        <NavigateContracts />
                        <OperatorDataGridPending />
                        <br />
                    </div>
                </OperatorLayout>
            );
        case "Approved":
            return (
                <OperatorLayout>
                    <div>
                        <div className="bid-header">
                            <h2 className='h2-padding'>RFQs Approved</h2>
                            <button className='add-event-button' onClick={addRfq}>Add New RFQ</button>
                        </div>
                        <NavigateContracts />
                        <OperatorDataGridApproved />
                        <br />
                    </div>
                </OperatorLayout>
            );
        case "Rejected":
            return (
                <OperatorLayout>
                    <div>
                        <div className="bid-header">
                            <h2 className='h2-padding'>RFQs Rejected</h2>
                            <button className='add-event-button' onClick={addRfq}>Add New RFQ</button>
                        </div>
                        <NavigateContracts />
                        <OperatorDataGridRejected />
                        <br />
                    </div>
                </OperatorLayout>
            );
        case "AllBids":
            return (
                <OperatorLayout>
                    <div>
                        <div className="bid-header">
                            <h2 className='h2-padding'>All RFQs</h2>
                            <button className='add-event-button' onClick={addRfq}>Add New RFQ</button>
                        </div>
                        <NavigateContracts />
                        <OperatorDataGridAll />
                        <br />
                    </div>
                </OperatorLayout>
            );
        default:
            return (
                <OperatorLayout>
                    <div>
                        <div className="bid-header">
                            <h2 className='h2-padding'>RFQs Pending Approval</h2>
                            <button className='add-event-button' onClick={addRfq}>Add New RFQ</button>
                        </div>
                        <NavigateContracts />
                        <OperatorDataGridPending />
                        <br />
                    </div>
                </OperatorLayout>
            );
    }
}

