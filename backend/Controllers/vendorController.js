// controllers/vendorController.js
// const Vendor = require('../Models/Vendor');

// const vendorController = {
//   signup: async (req, res) => {
//     try {
//       const {
//         name,
//         mobileNumber,
//         address,
//         nearestPoliceStation,
//         cityVillage,
//         pincode
//       } = req.body;

//       // Check if the mobile number is already registered
//       const existingVendor = await Vendor.findOne({ mobileNumber });
//       if (existingVendor) {
//         return res.status(400).json({ message: 'Mobile number already exists' });
//       }

//       // Create a new vendor object
//       const newVendor = new Vendor({
//         name,
//         mobileNumber,
//         address,
//         nearestPoliceStation,
//         cityVillage,
//         pincode
//       });

//       // Save the vendor to the database
//       await newVendor.save();

//       res.status(201).json({ message: 'Vendor signed up successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   },
//   login: async (req, res) => {
//     try {
//       const { mobileNumber, password } = req.body;

//       // Find the vendor by mobile number
//       const vendor = await Vendor.findOne({ mobileNumber });
//       if (!vendor) {
//         return res.status(404).json({ message: 'Vendor not found' });
//       }

//       // Check if the password matches
//       if (vendor.password !== password) {
//         return res.status(401).json({ message: 'Invalid password' });
//       }

//       // If everything is correct, send a success message
//       res.status(200).json({ message: 'Login successful', vendor });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   }
// };

// module.exports = vendorController;


const Vendor = require('../Models/Vendor');
const crypto = require('crypto'); // Import the crypto module for OTP generation
//const { ObjectId } = require('mongoose').Types;

const vendorController = {
  signup: async (req, res) => {
    try {
      const {
        name,
        mobileNumber,
        address,
        nearestPoliceStation,
        cityVillage,
        pincode
      } = req.body;

      // Check if the mobile number is already registered
      const existingVendor = await Vendor.findOne({ mobileNumber });
      if (existingVendor) {
        return res.status(400).json({ message: 'Mobile number already exists' });
      }

      // Create a new vendor object
      const newVendor = new Vendor({
        name,
        mobileNumber,
        address,
        nearestPoliceStation,
        cityVillage,
        pincode
      });

      // Save the vendor to the database
      await newVendor.save();

      res.status(201).json({ message: 'Vendor signed up successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    try {
      const { mobileNumber } = req.body;

      // Generate OTP
      const otp = generateOTP(6);

      // Update the vendor document in the database with the new OTP
      await Vendor.findOneAndUpdate({ mobileNumber }, { otp });

      // Send the OTP to the mobile number (implement your logic here)

      res.status(200).json({ message: 'OTP sent successfully',otp });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  verifyOTP: async (req, res) => {
    try {
      const { mobileNumber, otp } = req.body;
        console.log(req.body);

      // Find the vendor by mobile number
      const vendor = await Vendor.findOne({ mobileNumber });
      if (!vendor) {
        return res.status(404).json({ message: 'Vendor not found' });
      }

      // Check if the OTP matches
      if (vendor.otp !== otp) {
        return res.status(401).json({ message: 'Invalid OTP' });
      }

      // If everything is correct, send a success message
      // res.status(200).json({ message: 'OTP verification successful' });
      const responseData = { 
        message: 'OTP verification successful',
        vendor: {
          _id: vendor._id,
          name: vendor.name,
          mobileNumber: vendor.mobileNumber,
          address: vendor.address,
          nearestPoliceStation: vendor.nearestPoliceStation,
          cityVillage: vendor.cityVillage,
          pincode: vendor.pincode,
          otp: vendor.otp
        }
      };
      console.log(responseData); // Print the response data
      res.status(200).json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  // Get vendor by mobile number
// getVendorByMobileNumber: async (req, res) => {
//   try {
//     const mobileNumber = req.params.mobileNumber;
//     const vendor = await Vendor.findOne({ mobileNumber });
//     if (!vendor) {
//       return res.status(404).json({ message: 'Vendor not found' });
//     }
//     res.status(200).json(vendor);
//   } catch (error) {
//     console.error('Error fetching vendor details:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// },

// Update vendor details by mobile number
// updateVendorDetailsByMobileNumber: async (req, res) => {
//   try {
//     const mobileNumber = req.params.mobileNumber;
//     const updatedDetails = req.body;
//     const updatedVendor = await Vendor.findOneAndUpdate({ mobileNumber }, updatedDetails, { new: true });
//     if (!updatedVendor) {
//       return res.status(404).json({ message: 'Vendor not found' });
//     }
//     res.status(200).json(updatedVendor);
//   } catch (error) {
//     console.error('Error updating vendor details:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }
getVendorByVendorID: async (req, res) => {
  try {
    const vendorID = req.params.vendorID;
    const vendor = await Vendor.findById(vendorID);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.status(200).json(vendor);
  } catch (error) {
    console.error('Error fetching vendor details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
},

// Update vendor details by vendorID
updateVendorDetailsByVendorID: async (req, res) => {
  try {
    const vendorID = req.params.vendorID;
    const updatedDetails = req.body;
    const updatedVendor = await Vendor.findByIdAndUpdate(vendorID, updatedDetails, { new: true });
    if (!updatedVendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.status(200).json(updatedVendor);
  } catch (error) {
    console.error('Error updating vendor details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
};

// Function to generate OTP
function generateOTP(length) {
  const chars = '0123456789';
  const charsLength = chars.length;
  let otp = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsLength);
    otp += chars[randomIndex];
  }
  return otp;
}

module.exports = vendorController;


// const Vendor = require('../Models/Vendor');
// const https = require('follow-redirects').https;

// const vendorController = {
//   signup: async (req, res) => {
//     try {
//       const {
//         name,
//         mobileNumber,
//         address,
//         nearestPoliceStation,
//         cityVillage,
//         pincode
//       } = req.body;

//       // Check if the mobile number is already registered
//       const existingVendor = await Vendor.findOne({ mobileNumber });
//       if (existingVendor) {
//         return res.status(400).json({ message: 'Mobile number already exists' });
//       }

//       // Create a new vendor object
//       const newVendor = new Vendor({
//         name,
//         mobileNumber,
//         address,
//         nearestPoliceStation,
//         cityVillage,
//         pincode
//       });

//       // Save the vendor to the database
//       await newVendor.save();

//       res.status(201).json({ message: 'Vendor signed up successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   },

//   login: async (req, res) => {
//     try {
//       const { mobileNumber } = req.body;

//       // Generate OTP using Infobip API
//       const otp = await generateOTP(mobileNumber);

//       // Update the vendor document in the database with the new OTP
//       await Vendor.findOneAndUpdate({ mobileNumber }, { otp });

//       // Send the OTP to the mobile number (implement your logic here)

//       res.status(200).json({ message: 'OTP sent successfully', otp });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   },

//   verifyOTP: async (req, res) => {
//     try {
//       const { mobileNumber, otp } = req.body;

//       // Find the vendor by mobile number
//       const vendor = await Vendor.findOne({ mobileNumber });
//       if (!vendor) {
//         return res.status(404).json({ message: 'Vendor not found' });
//       }

//       // Check if the OTP matches
//       if (vendor.otp !== otp) {
//         return res.status(401).json({ message: 'Invalid OTP' });
//       }

//       // If everything is correct, send a success message
//       res.status(200).json({ message: 'OTP verification successful' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   }
// };

// // Function to generate OTP using Infobip API
// async function generateOTP(mobileNumber) {
//   return new Promise((resolve, reject) => {
//     const options = {
//       'method': 'POST',
//       'hostname': '5yj4zg.api.infobip.com',
//       'path': '/sms/2/text/advanced',
//       'headers': {
//         'Authorization': 'App 117123a2790f0617a4255caec4fdc8cb-f3258f84-79c4-42cb-a878-317ef9f84d6a',
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       'maxRedirects': 20
//     };

//     const postData = JSON.stringify({
//       "messages": [
//         {
//           "destinations": [{ "to": mobileNumber }],
//           "from": "ServiceSMS",
//           "text": "Your OTP is: " + generateRandomNumber(6) // Include the generated OTP in the message
//         }
//       ]
//     });

//     const req = https.request(options, function (response) {
//       let chunks = [];

//       response.on("data", function (chunk) {
//         chunks.push(chunk);
//       });

//       response.on("end", function (chunk) {
//         const body = Buffer.concat(chunks);
//         const responseBody = JSON.parse(body.toString());
//         if (responseBody.messages && responseBody.messages[0].status.groupId === 1) {
//           // OTP sent successfully
//           resolve();
//         } else {
//           reject(new Error('Failed to send OTP'));
//         }
//       });

//       response.on("error", function (error) {
//         reject(error);
//       });
//     });

//     req.write(postData);
//     req.end();
//   });
// }

// // Function to generate random number of given length
// function generateRandomNumber(length) {
//   let otp = '';
//   for (let i = 0; i < length; i++) {
//     otp += Math.floor(Math.random() * 10); // Generate random digit (0-9)
//   }
//   return otp;
// }

// module.exports = vendorController;



// const Vendor = require('../Models/Vendor');
// const fetch = require('node-fetch');

// const vendorController = {
//   signup: async (req, res) => {
//     try {
//       const {
//         name,
//         mobileNumber,
//         address,
//         nearestPoliceStation,
//         cityVillage,
//         pincode
//       } = req.body;

//       // Check if the mobile number is already registered
//       const existingVendor = await Vendor.findOne({ mobileNumber });
//       if (existingVendor) {
//         return res.status(400).json({ message: 'Mobile number already exists' });
//       }

//       // Create a new vendor object
//       const newVendor = new Vendor({
//         name,
//         mobileNumber,
//         address,
//         nearestPoliceStation,
//         cityVillage,
//         pincode
//       });

//       // Save the vendor to the database
//       await newVendor.save();

//       res.status(201).json({ message: 'Vendor signed up successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   },

//   login: async (req, res) => {
//     try {
//       const { mobileNumber } = req.body;

//       // Generate OTP using Infobip API
//       const otp = await generateOTP(mobileNumber);

//       // Update the vendor document in the database with the new OTP
//       await Vendor.findOneAndUpdate({ mobileNumber }, { otp });

//       // Send the OTP to the mobile number (implement your logic here)

//       res.status(200).json({ message: 'OTP sent successfully', otp });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   },

//   verifyOTP: async (req, res) => {
//     try {
//       const { mobileNumber, otp } = req.body;

//       // Find the vendor by mobile number
//       const vendor = await Vendor.findOne({ mobileNumber });
//       if (!vendor) {
//         return res.status(404).json({ message: 'Vendor not found' });
//       }

//       // Check if the OTP matches
//       if (vendor.otp !== otp) {
//         return res.status(401).json({ message: 'Invalid OTP' });
//       }

//       // If everything is correct, send a success message
//       res.status(200).json({ message: 'OTP verification successful' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   }
// };

// // Function to generate OTP using Infobip API
// async function generateOTP(mobileNumber) {
  
//   const myHeaders = new fetch.Headers();
//   myHeaders.append("Authorization", "App 117123a2790f0617a4255caec4fdc8cb-f3258f84-79c4-42cb-a878-317ef9f84d6a");
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Accept", "application/json");

//   const raw = JSON.stringify({
//     "messages": [
//       {
//         "destinations": [{ "to": mobileNumber }],
//         "from": "ServiceSMS",
//         "text": "Your OTP is: " + generateRandomNumber(6) // Include the generated OTP in the message
//       }
//     ]
//   });

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow"
//   };

//   const response = await fetch("https://5yj4zg.api.infobip.com/sms/2/text/advanced", requestOptions);
//   const responseBody = await response.json();
//   if (responseBody.messages && responseBody.messages[0].status.groupId === 1) {
//     // OTP sent successfully
//     return;
//   } else {
//     throw new Error('Failed to send OTP');
//   }
// }

// // Function to generate random number of given length
// function generateRandomNumber(length) {
//   let otp = '';
//   for (let i = 0; i < length; i++) {
//     otp += Math.floor(Math.random() * 10); // Generate random digit (0-9)
//   }
//   return otp;
// }

// module.exports = vendorController;
