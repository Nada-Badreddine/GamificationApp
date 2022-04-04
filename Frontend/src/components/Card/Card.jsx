import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import AddOrRemoveFromCart from '../AddOrRemoveFromCart';
import AddOrRemoveFromFavoriteList from '../AddOrRemoveFromFavoriteList';

export default function RecipeReviewCard({ item, refetch, listFav }) {
  return (
    <Card sx={{ width: 230 }}>
      <CardMedia
        component="img"
        height="194"
        image={'http://localhost:1337' + item?.Img[0]?.formats?.thumbnail?.url}
        alt="Paella dish"
        width="194"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
        {item?.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
        {item?.Description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{ justifyContent: 'space-between'}}>
        <AddOrRemoveFromFavoriteList refetch={refetch} listFav={listFav} gift={item} />
        <AddOrRemoveFromCart item={item} />
      </CardActions>
    </Card>
  );
}
