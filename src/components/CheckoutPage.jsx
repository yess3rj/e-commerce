import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { Typography } from '@mui/material';
import CheckoutCard from './CheckoutCard';
import { Total } from './Total';
 
 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
 
const CheckoutPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://ecomerce-master.herokuapp.com/api/v1/item')
      .then((result) => {
        //console.log(result);
        setProducts(result.data);
      });
  }, []);

  function FormRow(){
    return (
        <React.Fragment>
  <Box sx={{ margin: '110px 50px' }}>
          <Grid container spacing={2}>
            {products && products.map((product) => (
              <Grid item xs={12} sm={8} md={6} lg={4}>
                <CheckoutCard key={product._id} product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        </React.Fragment>
      
      );
  }

  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography align='center' gutterBottom variant='h4'>
                Shopping Cart
            </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
            <FormRow />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
            <Typography align='center' gutterBottom variant='h4'>
                <Total />
            </Typography>
        </Grid>
    </Grid>
  )
 
}
export default CheckoutPage
