import React, { useState } from 'react';

const ProductForm = ({ vendorId, onSubmit }) => {
  const [formData, setFormData] = useState({
    vendorId: vendorId,
    imageUrl: '',
    type: '',
    brand: '',
    model: '',
    description: '',
    price: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="product-form">
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
        </label>
        <label>
          Type:
          <input type="text" name="type" value={formData.type} onChange={handleChange} required />
        </label>
        <label>
          Brand:
          <input type="text" name="brand" value={formData.brand} onChange={handleChange} required />
        </label>
        <label>
          Model:
          <input type="text" name="model" value={formData.model} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;

















// import React, { useState, useEffect } from 'react';

// const ProductForm = ({ vendorId, product, onSave, onCancel }) => {
//   const [formData, setFormData] = useState({
//     vendorId: vendorId,
//     imageUrl: '',
//     type: '',
//     brand: '',
//     model: '',
//     description: '',
//     price: '',
//     quantity: ''
//   });

//   useEffect(() => {
//     if (product) {
//       setFormData({
//         ...product,
//         vendorId: vendorId
//       });
//     }
//   }, [product, vendorId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <div className="product-form">
//       <h3>{product ? 'Edit Product' : 'Add Product'}</h3>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Image URL:
//           <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
//         </label>
//         <label>
//           Type:
//           <input type="text" name="type" value={formData.type} onChange={handleChange} required />
//         </label>
//         <label>
//           Brand:
//           <input type="text" name="brand" value={formData.brand} onChange={handleChange} required />
//         </label>
//         <label>
//           Model:
//           <input type="text" name="model" value={formData.model} onChange={handleChange} required />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" value={formData.description} onChange={handleChange} required />
//         </label>
//         <label>
//           Price:
//           <input type="number" name="price" value={formData.price} onChange={handleChange} required />
//         </label>
//         <label>
//           Quantity:
//           <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
//         </label>
//         <div className="button-container">
//           <button type="submit">{product ? 'Save Changes' : 'Add Product'}</button>
//           <button type="button" onClick={onCancel}>Cancel</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProductForm;

