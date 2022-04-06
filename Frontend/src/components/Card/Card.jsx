import * as React from 'react';
import Card from '@mui/material/Card';
import Badge from '@mui/material/Badge';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddOrRemoveFromCart from '../AddOrRemoveFromCart';
import AddOrRemoveFromFavoriteList from '../AddOrRemoveFromFavoriteList';

export default function RecipeReviewCard({ item, refetch, listFav, width }) {
    return (
        <Card sx={{ width: width ?? 230 }}>
            <CardMedia
                component="img"
                height="194"
                image={'http://localhost:1337' + item?.Img[0]?.formats?.thumbnail?.url}
                alt="Paella dish"
                width="194"
            />
            <CardContent>
                <Box display='flex' justifyContent='space-between' alignItems='center' pr={2}>
                    <Typography variant="body2" color="text.primary">
                        {item?.Name}
                    </Typography>
                    <Box>
                    <Badge badgeContent={item?.PointNumber} color="primary" max={1000000}/>
                    </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" mt={1}>
                    {item?.Description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing style={{ justifyContent: 'space-between', paddingLeft: 0, paddingRight: 15 }}>
                <AddOrRemoveFromFavoriteList refetch={refetch} listFav={listFav} gift={item} />
                <AddOrRemoveFromCart item={item} />
            </CardActions>
        </Card>
    );
}
