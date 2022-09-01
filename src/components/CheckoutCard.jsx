import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete';


export default function CheckoutCard({product: {product_name, brand, image, price, category, description}}) {


  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <>
          <Typography
            variant='h5'
            color='textSecondary'
          >
              {accounting.formatMoney(price)}
            </Typography></>
        }
        titleTypographyProps={{variant:'p' }}
        title={product_name}
        subheader={brand}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Image"
      />
      
      <CardActions disableSpacing >
        <IconButton>
            <DeleteIcon fontSize='large' />
        </IconButton>
      </CardActions>
      
    </Card>
  );
}
