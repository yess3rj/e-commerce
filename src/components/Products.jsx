import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Product from './Product';
 
 
export default function Products({ value }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    axios
    .get('https://ecomerce-master.herokuapp.com/api/v1/item')
    .then((result) => {
      setProducts(result.data);
    })
    .catch(err => console.log(err));
  }, []);

useEffect(() => {
  if (value) {
    const filterResult = products.filter(
      (product) => product?.product_name?.toLowerCase().includes(value.toLowerCase()) || product?.category?.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredProducts(filterResult)
  } else {
    setFilteredProducts(products)
  }
}, [value, products])
  
  return (
    <Box sx={{ margin: '110px 50px' }}>
      <Grid container spacing={2}>
        {filteredProducts && filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
            <Product  product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
