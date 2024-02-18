// import React , { useState }from 'react';
// import { useParams } from 'react-router-dom';
// import VendorNavbar from '../Components/VendorNavbar';
// import VendorProducts from '../Components/VendorProducts';
// // import AddProductButton from './AddProductButton';
// // import PastOrdersLink from './PastOrdersLink';
// // import UpcomingOrdersLink from './UpcomingOrdersLink';
// import ProductForm from '../Components/ProductForm'; // Import the ProductForm component here



// const VendorDashboardPage = () => {
//     const { vendorID } = useParams();
//     console.log(vendorID);
//     const [showProductForm, setShowProductForm] = useState(false); // State to manage the visibility of the product form

//   const toggleProductForm = () => {
//     setShowProductForm(!showProductForm);} // Toggle the visibility of the product form

//     const handleSubmit = async (formData) => {
//       try {
//         const response = await fetch('http://localhost:5000/api/product', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });
//         if (!response.ok) {
//           throw new Error('Failed to add product');
//         }
//         // Handle success response
//         console.log('Product added successfully!');
//       } catch (error) {
//         console.error('Error adding product:', error.message);
//       }
//   };
//   return (
//     <div className="vendor-dashboard">
//       <VendorNavbar vendorID={vendorID} /> 
//       <div className="vendor-dashboard-content">
//          <VendorProducts vendorID={vendorID}/> 
//         {showProductForm && <ProductForm vendorId={vendorID} onSubmit={handleSubmit} />}
//         <div className="vendor-dashboard-actions">
//         <button onClick={toggleProductForm}>Add Product</button>
//           {/* <PastOrdersLink />
//           <UpcomingOrdersLink /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorDashboardPage;
