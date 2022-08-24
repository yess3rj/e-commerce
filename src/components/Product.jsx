import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <><IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton><Typography
            variant='h5'
            color='textSecondary'
          >

              {accounting.formatMoney(555)}
            </Typography></>
        }
        title="Product name"
        subheader="Brand"
      />
      <CardMedia
        component="img"
        height="194"
        image=""
        alt="Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Category
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label='Add to Cart' /*onClick={addToBasket}*/>
        <AddShoppingCart fontSize='large' />
      </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Description
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
