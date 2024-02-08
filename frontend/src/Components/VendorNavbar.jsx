// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import VendorAccountForm from './VendorAccountForm';

// const VendorNavbar = ({ vendorID }) => {
//   console.log("Navbar : ",vendorID);
//   const [isEditing, setIsEditing] = useState(false);
//   const [vendorDetails, setVendorDetails] = useState({
//     name: "",
//     mobileNumber:"",
//     address:"",
//     nearestPoliceStation:"",
//     cityVillage:"",
//     pincode:""
//   });
//   const [editedDetails, setEditedDetails] = useState({
//     name: "",
//     mobileNumber:"",
//     address:"",
//     nearestPoliceStation:"",
//     cityVillage:"",
//     pincode:""
//   });

//   useEffect(() => {
//     // Fetch vendor details when the component mounts
//     fetchVendorDetails();
//   }, []);

//   const fetchVendorDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/vendors/${vendorID}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch vendor details');
//       }
//       const data = await response.json();
//       setVendorDetails(data);
//       setEditedDetails(data); // Set initial form field values
//     } catch (error) {
//       console.error('Error fetching vendor details:', error);
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };
  
//   const handleSave = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/vendors/${vendorID}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedDetails),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update vendor details');
//       }
//       setVendorDetails(editedDetails); // Update vendorDetails with editedDetails
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error updating vendor details:', error);
//     }
//   };
  
//   const handleCancel = () => {
//     setIsEditing(false);
//     setEditedDetails(vendorDetails); // Reset editedDetails to initial state
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedDetails({ ...editedDetails, [name]: value });
//   };
  

//   return (
//     <nav className="vendor-navbar">
//       <div className="navbar-container">
//         <Link to={`/vendor/dashboard/${vendorID}`} className="navbar-logo">Home</Link>
//         <div className="navbar-actions">
//           {isEditing ? (
//             <div className="navbar-edit-form">
//               <VendorAccountForm
//   details={editedDetails}
//   onChange={handleChange} // Pass the handleChange function
// />
//               <div className="form-buttons">
//                 <button onClick={handleSave}>Save</button>
//                 <button onClick={handleCancel}>Cancel</button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <Link to={`/vendor/account/${vendorID}`} className="navbar-account">{vendorID}</Link>
//               <button onClick={handleEdit}>Edit</button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default VendorNavbar;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import VendorAccountForm from './VendorAccountForm';

// const VendorNavbar = ({ vendorID }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [vendorDetails, setVendorDetails] = useState({
//     name: "",
//     mobileNumber:"",
//     address:"",
//     nearestPoliceStation:"",
//     cityVillage:"",
//     pincode:""
//   });
//   const [editedDetails, setEditedDetails] = useState({
//     name: "",
//     mobileNumber:"",
//     address:"",
//     nearestPoliceStation:"",
//     cityVillage:"",
//     pincode:""
//   });

//   useEffect(() => {
//     // Fetch vendor details when the component mounts
//     fetchVendorDetails();
//   }, [vendorID]); // Ensure useEffect runs whenever vendorID changes
//   useEffect(() => {
//     console.log("Vendor Details:", vendorDetails); // Log the fetched vendor details
// }, [vendorDetails]);

//   const fetchVendorDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/vendors/${vendorID}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch vendor details');
//       }
//       const data = await response.json();
//       setVendorDetails(data);
//       setEditedDetails(data); // Set initial form field values
//     } catch (error) {
//       console.error('Error fetching vendor details:', error);
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };
  
//   const handleSave = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/vendors/${vendorID}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedDetails),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update vendor details');
//       }
//       setVendorDetails(editedDetails); // Update vendorDetails with editedDetails
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error updating vendor details:', error);
//     }
//   };
  
//   const handleCancel = () => {
//     setIsEditing(false);
//     setEditedDetails(vendorDetails); // Reset editedDetails to initial state
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedDetails({ ...editedDetails, [name]: value });
//   };

//   return (
//     <nav className="vendor-navbar">
//       <div className="navbar-container">
//         <Link to={`/vendor/dashboard/${vendorID}`} className="navbar-logo">Home</Link>
//         <div className="navbar-actions">
//           {isEditing ? (
//             <div className="navbar-edit-form">
//               <VendorAccountForm
//                 details={editedDetails}
//                 onChange={handleChange} // Pass the handleChange function
//               />
//               <div className="form-buttons">
//                 <button onClick={handleSave}>Save</button>
//                 <button onClick={handleCancel}>Cancel</button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <Link to={`/vendor/account/${vendorID}`} className="navbar-account">{vendorID}</Link>
//               <button onClick={handleEdit}>Edit</button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default VendorNavbar;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import VendorAccountForm from './VendorAccountForm';

// const VendorNavbar = ({ vendorID }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [vendorDetails, setVendorDetails] = useState({
//     name: "",
//     mobileNumber:"",
//     address:"",
//     nearestPoliceStation:"",
//     cityVillage:"",
//     pincode:""
//   });
//   const [editedDetails, setEditedDetails] = useState({
//     name: "",
//     mobileNumber:"",
//     address:"",
//     nearestPoliceStation:"",
//     cityVillage:"",
//     pincode:""
//   });

//   useEffect(() => {
//     // Fetch vendor details when the component mounts
//     fetchVendorDetails();
//   }, [vendorID]); // Ensure useEffect runs whenever vendorID changes

//   const fetchVendorDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/vendors/${vendorID}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch vendor details');
//       }
//       const data = await response.json();
//       setVendorDetails(data);
//       setEditedDetails(data); // Set initial form field values
//     } catch (error) {
//       console.error('Error fetching vendor details:', error);
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };
  
//   const handleSave = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/vendors/${vendorID}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedDetails),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update vendor details');
//       }
//       setVendorDetails(editedDetails); // Update vendorDetails with editedDetails
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error updating vendor details:', error);
//     }
//   };
  
//   const handleCancel = () => {
//     setIsEditing(false);
//     setEditedDetails(vendorDetails); // Reset editedDetails to initial state
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedDetails({ ...editedDetails, [name]: value });
//   };

//   return (
//     <nav className="vendor-navbar">
//       <div className="navbar-container">
//         <Link to={`/vendor/dashboard/${vendorID}`} className="navbar-logo">Home</Link>
//         <div className="navbar-actions">
//           {isEditing ? (
//             <div className="navbar-edit-form">
//               <VendorAccountForm
//                 initialDetails={vendorDetails} // Pass initial vendor details
//                 onSave={handleSave} // Pass the save function directly
//                 onCancel={handleCancel} // Pass the cancel function directly
//               />
//               <div className="form-buttons">
//                 <button onClick={handleSave}>Save</button>
//                 <button onClick={handleCancel}>Cancel</button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <Link to={`/vendor/account/${vendorID}`} className="navbar-account">{vendorID}</Link>
//               <button onClick={handleEdit}>Edit</button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default VendorNavbar;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VendorAccountForm from './VendorAccountForm';

const VendorNavbar = ({ vendorID }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [vendorDetails, setVendorDetails] = useState({
    name: "",
    mobileNumber:"",
    address:"",
    nearestPoliceStation:"",
    cityVillage:"",
    pincode:""
  });
  const [editedDetails, setEditedDetails] = useState({
    name: "",
    mobileNumber:"",
    address:"",
    nearestPoliceStation:"",
    cityVillage:"",
    pincode:""
  });

  useEffect(() => {
    // Fetch vendor details when the component mounts
    fetchVendorDetails();
  }, [vendorID]); // Ensure useEffect runs whenever vendorID changes

  const fetchVendorDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/vendors/${vendorID}`);
      if (!response.ok) {
        throw new Error('Failed to fetch vendor details');
      }
      const data = await response.json();
      setVendorDetails(filterDetails(data)); // Filter out _id and otp fields
      setEditedDetails(filterDetails(data)); // Set initial form field values
    } catch (error) {
      console.error('Error fetching vendor details:', error);
    }
  };

  // Function to filter out _id and otp fields
  const filterDetails = (details) => {
    const { _id, otp,__v, ...filteredDetails } = details;
    return filteredDetails;
  };

  const handleEdit = () => {
    setIsEditing(true);
  };
  
  const handleSave = async (editedDetails) => {
    try {
      const response = await fetch(`http://localhost:5000/api/vendors/${vendorID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedDetails),
      });
      if (!response.ok) {
        throw new Error('Failed to update vendor details');
      }
      setVendorDetails(editedDetails); // Update vendorDetails with editedDetails
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating vendor details:', error);
    }
  };
  
  const handleCancel = () => {
    setIsEditing(false);
    setEditedDetails(vendorDetails); // Reset editedDetails to initial state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails({ ...editedDetails, [name]: value });
  };

  return (
    <nav className="vendor-navbar">
      <div className="navbar-container">
        <Link to={`/vendor/dashboard/${vendorID}`} className="navbar-logo">Home</Link>
        <div className="navbar-actions">
          {isEditing ? (
            <div className="navbar-edit-form">
              <VendorAccountForm
                initialDetails={vendorDetails} // Pass initial vendor details
                onChange={handleChange}
                onSave={handleSave}
                onCancel={handleCancel} // Pass the handleChange function
              />
              {/* <div className="form-buttons">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div> */}
            </div>
          ) : (
            <>
              <Link to={`/vendor/account/${vendorID}`} className="navbar-account">{vendorID}</Link>
              <button onClick={handleEdit}>Edit</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default VendorNavbar;
