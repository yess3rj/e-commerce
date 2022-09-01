import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Product from './Product';
 
//https://ecomerce-master.herokuapp.com/api/v1/item
 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
 
export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://ecomerce-master.herokuapp.com/api/v1/item')
      .then((result) => {
        //console.log(result);
        setProducts(result.data);
      });
  }, []);

  return (
    <Box sx={{ margin: '110px 50px' }}>
      <Grid container spacing={2}>
        {products && products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Product key={product._id} product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
