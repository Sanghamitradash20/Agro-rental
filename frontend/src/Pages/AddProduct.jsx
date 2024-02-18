import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import EditProductForm from '../Components/EditProductForm';

const AddProduct = () => {
  const { vendorID } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    imageUrl: '',
    type: '',
    brand: '',
    model: '',
    description: '',
    price: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Product submitted:', product);
    // Reset form fields after submission
    setProduct({
      imageUrl: '',
      type: '',
      brand: '',
      model: '',
      description: '',
      price: '',
      quantity: '',
    });
  };

  const fetchVendorProducts = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/product/${vendorID}`);
      if (!response.ok) {
        throw new Error('Failed to fetch vendor products');
      }
      const responseData = await response.json();
      setProducts(responseData.data);
    } catch (error) {
      console.error('Error fetching vendor products:', error);
    }
  };
   
  useEffect(() => {
    fetchVendorProducts();
  }, []);

  const handleEditProduct = (editedProduct) => {
    // Handle edit product logic here, e.g., send edited product to backend
    console.log('Edited Product:', editedProduct);
  };

  const handleCancelEdit = () => {
    // Handle cancel edit logic here, e.g., reset product state or close edit form
    console.log('Edit cancelled');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Image URL"
              fullWidth
              name="imageUrl"
              value={product.imageUrl}
              onChange={handleInputChange}
            />
          </Grid>
          {/* Add other input fields for product details */}
          <Grid item xs={12}>
          <TextField
            label="Type"
            fullWidth
            name="type"
            value={product.type}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Brand"
            fullWidth
            name="brand"
            value={product.brand}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Model"
            fullWidth
            name="model"
            value={product.model}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            fullWidth
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Price"
            fullWidth
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Quantity"
            fullWidth
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
          />
        </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="h4" gutterBottom>
        Edit Product
      </Typography>
      {products.map((product) => (
        <EditProductForm
          key={product.id}
          product={product}
          onSave={handleEditProduct}
          onCancel={handleCancelEdit}
        />
      ))}
    </Container>
  );
};

export default AddProduct;
