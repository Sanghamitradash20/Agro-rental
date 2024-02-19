import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import EditProductForm from "../Components/EditProductForm";

const AddProduct = () => {
  const { vendorID } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    _id: "",
    imageUrl: "",
    type: "",
    brand: "",
    model: "",
    description: "",
    price: "",
    quantity: "",
  });
  const [editMode, setEditMode] = useState({});
  const [editedProduct, setEditedProduct] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productWithVendorId = { ...product, vendorId: vendorID };
      const response = await axios.post(
        "http://localhost:5000/api/product",
        productWithVendorId
      );

      if (response.status === 201) {
        setProduct({
          imageUrl: "",
          type: "",
          brand: "",
          model: "",
          description: "",
          price: "",
          quantity: "",
        });
        fetchVendorProducts();
        console.log("Product added successfully");
      } else {
        throw new Error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const fetchVendorProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/product/${vendorID}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch vendor products");
      }
      const responseData = await response.json();
      setProducts(responseData.data);
      // Initialize editMode state for each product
      const initialEditModeState = {};
      responseData.data.forEach((product) => {
        initialEditModeState[product._id] = false;
      });
      setEditMode(initialEditModeState);
    } catch (error) {
      console.error("Error fetching vendor products:", error);
    }
  };

  useEffect(() => {
    fetchVendorProducts();
  }, []);

  const handleEdit = (productId) => {
    setEditedProduct(products.find((p) => p._id === productId));
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [productId]: true,
    }));
  };

  const handleSave = async (productId) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/product/${productId}`,
        editedProduct
      );
      if (response.status !== 200) {
        throw new Error("Failed to update product");
      }
      console.log("Product updated successfully:", editedProduct);
      setEditMode((prevEditMode) => ({
        ...prevEditMode,
        [productId]: false,
      }));
      fetchVendorProducts(); // Refresh the product list after saving
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleCancel = (productId) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [productId]: false,
    }));
  };

  const handleChange = (event) => {
    setEditedProduct({
      ...editedProduct,
      [event.target.name]: event.target.value,
    });
  };

  const useStyles = makeStyles({
    root: {
      maxWidth: "100%",
      backgroundColor: "#f5f5f5",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      margin: "10px",
    },
    media: {
      height: 200,
    },
    content: {
      fontSize: "1.2em",
    },
  });

  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Vendor Products
      </Typography>
      <Grid container spacing={3}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product._id}>
              <Card className={classes.root}>
                {editMode[product._id] ? (
                  <CardContent>
                    <TextField
                      name="brand"
                      value={editedProduct.brand}
                      onChange={handleChange}
                      label="Brand"
                    />
                    <TextField
                      name="model"
                      value={editedProduct.model}
                      onChange={handleChange}
                      label="Model"
                    />
                    <TextField
                      name="description"
                      value={editedProduct.description}
                      onChange={handleChange}
                      label="Description"
                    />
                    <TextField
                      name="price"
                      value={editedProduct.price}
                      onChange={handleChange}
                      label="Price"
                    />
                    <TextField
                      name="quantity"
                      value={editedProduct.quantity}
                      onChange={handleChange}
                      label="Quantity"
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSave(product._id)}
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleCancel(product._id)}
                    >
                      Cancel
                    </Button>
                  </CardContent>
                ) : (
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={product.imageUrl}
                      title={product.type}
                    />
                    <CardContent className={classes.content}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.brand} {product.model}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {product.description}
                      </Typography>
                      <Typography variant="body1">
                        Price: ${product.price}
                      </Typography>
                      <Typography variant="body1">
                        Quantity: {product.quantity}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleEdit(product._id)}
                      >
                        Edit
                      </Button>
                    </CardContent>
                  </CardActionArea>
                )}
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No products please add one..</Typography>
        )}
      </Grid>
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
    </Container>
  );
};

export default AddProduct;
