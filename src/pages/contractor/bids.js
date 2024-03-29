import Layout from '@/components/contractorLayout';
import { ContractorDataGridAll, ContractorDataGridPending, ContractorDataGridRejected, ContractorDataGridApproved } from '../../components/DataGridContractor'
import { useState } from "react";

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
                <span className="filter-a" onClick={() => handleSelection("AllBids")}>All Bids</span>
            </div>
        );
    }
    switch (selectedComponent) {
        case "Pending":
            return (
                <Layout>
                    <div>
                        <h2 className='h2-padding'>Bids Pending Approval</h2>
                        <NavigateContracts />
                        <ContractorDataGridPending />
                        <br />
                    </div>
                </Layout>
            );
        case "Approved":
            return (
                <Layout>
                    <div>
                        <h2 className='h2-padding'>Bids Approved</h2>
                        <NavigateContracts />
                        <ContractorDataGridApproved />
                        <br />
                    </div>
                </Layout>
            );
        case "Rejected":
            return (
                <Layout>
                    <div>
                        <h2 className='h2-padding'>Bids Rejected</h2>
                        <NavigateContracts />
                        <ContractorDataGridRejected />
                        <br />
                    </div>
                </Layout>
            );
        case "AllBids":
            return (
                <Layout>
                    <div>
                        <h2 className='h2-padding'>All Bids</h2>
                        <NavigateContracts />
                        <ContractorDataGridAll />
                        <br />
                    </div>
                </Layout>
            );
        default:
            return (
                <Layout>
                    <div>
                        <h2 className='h2-padding'>Bids Pending Approval</h2>
                        <NavigateContracts />
                        <ContractorDataGridPending />
                        <br />
                    </div>
                </Layout>
            );
    }
}

