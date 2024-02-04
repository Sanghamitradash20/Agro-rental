// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Agricultural Equipment Rental Portal</h1>
      <div>
        <Link to="/login/farmer">
          <button>Farmer</button>
        </Link>
        <Link to="/login/admin">
          <button>admin</button>
        </Link>
        <Link to="/login/vendor">
          <button>Vendor</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
