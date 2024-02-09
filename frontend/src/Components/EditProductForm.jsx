import React, { useState } from 'react';

const EditProductForm = ({ product, onSave, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedProduct);
  };

  const handleCancel = () => {
    onCancel(); // Call the onCancel function passed from the parent component
  };

  return (
    <div className="edit-product-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input type="text" name="imageUrl" value={editedProduct.imageUrl} onChange={handleChange} required />
        </label>
        <label>
          Type:
          <input type="text" name="type" value={editedProduct.type} onChange={handleChange} required />
        </label>
        <label>
          Brand:
          <input type="text" name="brand" value={editedProduct.brand} onChange={handleChange} required />
        </label>
        <label>
          Model:
          <input type="text" name="model" value={editedProduct.model} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={editedProduct.description} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={editedProduct.price} onChange={handleChange} required />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={editedProduct.quantity} onChange={handleChange} required />
        </label>
        <div className="button-container">
        <button type="submit">Save Changes</button>
          <button type="button" onClick={handleCancel}>Cancel</button> 
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
