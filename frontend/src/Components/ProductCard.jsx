import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Link,useNavigate} from "react-router-dom";
import { useCart } from '../Contexts/CartProvider';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  cardContent: {
    flexGrow: 1,
  },
});

const ProductCard = ({ product,farmerId }) => {
  const { addToCart } = useCart();
  const classes = useStyles();
  const navigate = useNavigate();
  const handleAddToCart = async () => {
    const quantity = 1; 
    await addToCart(product._id, product.vendorId, farmerId, quantity);
    navigate(`/cart/${farmerId}`); 
  };
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
      <Link to={`/farmer/products/${farmerId}/${product.type}/${product._id}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          className={classes.cardMedia}
          
          image={product.imageUrl}
          title={product.brand}
        />
        </Link>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.brand} - {product.model}
          </Typography>
          <Typography>
            Type: {product.type}
          </Typography>
          <Typography variant="h6">
            Price: ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={handleAddToCart}>Add to Cart</Button>
          <Button size="small" color="secondary">Rent Now</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
