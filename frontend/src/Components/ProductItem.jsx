
import React from 'react';

const ProductItem = ({ product, onEdit, onDelete }) => {
  const { _id, imageUrl, type, brand, model, description, price, quantity } = product;

  const handleEdit = () => {
    onEdit(product);
  };

  const handleDelete = () => {
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

