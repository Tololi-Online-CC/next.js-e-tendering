import OperatorLayout from '@/components/operatorLayout';
import { OperatorDataGridBids, OperatorDataGridBidRejected, OperatorDataGridBidApproved } from '../../components/DataGridOperator'
import { useState } from "react";
import addRfq from '@/components/addRfqs';


export default function BidList() {
  const [selectedComponent, setSelectedComponent] = useState("");

  const handleSelection = (component) => {
    setSelectedComponent(component);
  };
  function NavigateContracts() {
    return (
      <div style={{ paddingLeft: "20px" }}>
        {/* <span className="filter-a" onClick={() => handleSelection("Pending")}>Pending</span> */}
        <span className="filter-a" onClick={() => handleSelection("Approved")}>Approved</span>
        <span className="filter-a" onClick={() => handleSelection("Rejected")}>Rejected</span>
        <span className="filter-a" onClick={() => handleSelection("AllBids")}>All Bids</span>
      </div>
    );
  }

  switch (selectedComponent) {
    case "Approved":
      return (
        <OperatorLayout>
          <div>
            <div className="bid-header">
              <h2 className='h2-padding'>Bids Approved</h2>
              {/* <button className='add-event-button' onClick={addRfq}>Add New RFQ</button> */}
            </div>
            <NavigateContracts />
            <OperatorDataGridBidApproved />
            <br />
          </div>
        </OperatorLayout>
      );
    case "Rejected":
      return (
        <OperatorLayout>
          <div>
            <div className="bid-header">
              <h2 className='h2-padding'>Bids Rejected</h2>
              {/* <button className='add-event-button' onClick={addRfq}>Add New RFQ</button> */}
            </div>
            <NavigateContracts />
            <OperatorDataGridBidRejected />
            <br />
          </div>
        </OperatorLayout>
      );
    case "AllBids":
      return (
        <OperatorLayout>
          <div>
            <div className="bid-header">
              <h2 className='h2-padding'>All Bids</h2>
              {/* <button className='add-event-button' onClick={addRfq}>Add New RFQ</button> */}
            </div>
            <NavigateContracts />
            <OperatorDataGridBids />
            <br />
          </div>
        </OperatorLayout>
      );
    default:
      return (
        <OperatorLayout>
          <div>
            <div className="bid-header">
              <h2 className='h2-padding'>All Bids</h2>
              {/* <button className='add-event-button' onClick={addRfq}>Add New RFQ</button> */}
            </div>
            <NavigateContracts />
            <OperatorDataGridBids />
            <br />
          </div>
        </OperatorLayout>
      );
  }
}

