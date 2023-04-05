import { RegulatorDataGridPending, RegulatorDataGridRejected, RegulatorDataGridAwarded } from '@/components/BidDataGridRegulator'
import { useState } from "react";
import RegulatorLayout from '@/components/regulatorLayout';

export default function RegulatorProposals() {
    const [selectedComponent, setSelectedComponent] = useState("");

    const handleSelection = (component) => {
        setSelectedComponent(component);
    };
    function NavigateContracts() {
        return (
            <div style={{ paddingLeft: "20px" }}>
                <a className="filter-a" onClick={() => handleSelection("Pending")}>Pending</a>
                <a className="filter-a" onClick={() => handleSelection("Rejected")}>Rejected</a>
                <a className="filter-a" onClick={() => handleSelection("Awarded")}>Awarded</a>
            </div>
        );
    }
    switch (selectedComponent) {
        case "Pending":
            return (
                <RegulatorLayout>
                    <>
                        <h2 className='h2-padding'>Awards Pending Approval</h2>
                        <NavigateContracts />
                        <RegulatorDataGridPending />
                    </>
                </RegulatorLayout>
            );
        case "Rejected":
            return (
                <RegulatorLayout>
                    <>
                        <h2 className='h2-padding'>Awards Rejected</h2>
                        <NavigateContracts />
                        <RegulatorDataGridRejected />
                    </>
                </RegulatorLayout>
            );
        case "Awarded":
            return (
                <RegulatorLayout>
                    <>
                        <h2 className='h2-padding'>Awarded</h2>
                        <NavigateContracts />
                        <RegulatorDataGridAwarded />
                    </>
                </RegulatorLayout>
            );
        default:
            return (
                <RegulatorLayout>
                    <div>
                        <h2 className='h2-padding'>Awards Pending Approval</h2>
                        <NavigateContracts />
                        <RegulatorDataGridPending />
                    </div>
                </RegulatorLayout>
            );
    }
}

