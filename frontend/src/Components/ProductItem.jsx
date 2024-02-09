// import React from 'react';

// const ProductItem = ({ product }) => {
//   return (
//     <div className="product-item">
//       <img src={product.imageUrl} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       {/* Add more product details as needed */}
//     </div>
//   );
// };

// export default ProductItem;

import React from 'react';

const ProductItem = ({ product, onEdit, onDelete }) => {
  const { _id, imageUrl, type, brand, model, description, price, quantity } = product;

  const handleEdit = () => {
    // Handle edit action for the product
    onEdit(product);
  };

  const handleDelete = () => {
    // Handle delete action for the product
    onDelete(product);
  };

  return (
    <div className="product-item">
      <img src={imageUrl} alt={type} />
      <div className="product-details">
        <h3>{brand} {model}</h3>
        <p>Type: {type}</p>
        <p>Description: {description}</p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <div className="product-actions">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

