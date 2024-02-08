import React from 'react';
import { useParams } from 'react-router-dom';
import VendorNavbar from '../Components/VendorNavbar';
// import VendorProducts from './VendorProducts';
// import AddProductButton from './AddProductButton';
// import PastOrdersLink from './PastOrdersLink';
// import UpcomingOrdersLink from './UpcomingOrdersLink';

const VendorDashboardPage = () => {
    const { vendorID } = useParams();
    console.log(vendorID);
  return (
    <div className="vendor-dashboard">
      <VendorNavbar vendorID={vendorID} /> 
      {/* <div className="vendor-dashboard-content">
        <VendorProducts />
        <div className="vendor-dashboard-actions">
          <AddProductButton />
          <PastOrdersLink />
          <UpcomingOrdersLink />
        </div>
      </div> */}
    </div>
  );
};

export default VendorDashboardPage;
