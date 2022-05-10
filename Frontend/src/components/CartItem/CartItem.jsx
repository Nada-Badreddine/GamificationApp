import React from 'react'
import classes from './CartItem.module.css'
import AddOrRemoveFromFavoriteList from "./../AddOrRemoveFromFavoriteList"
import AddOrRemoveFromCart from "./../AddOrRemoveFromCart"
import Box from '@mui/material/Box';
function CartItem({refetch,listFav,gift,item,index}) {
  return (
    <Box mb={3} backgroundColor="#fff" p={1.4}>
    <Box className={classes.header} >
      <p className={classes.headerTitle}>
        Gift: {index + 1}
      </p>
    </Box>
    <Box display="flex" mt={1.4}>
      <img className={classes.img} src={'http://localhost:1337' + item?.Img[0]?.formats?.thumbnail?.url} alt="" />
      <Box width="100%" ml={1}>
        <Box display="flex" justifyContent='space-between'>
          <Box>
            <Box>
              <p className={classes.name}>
                {item?.Name}
              </p>
            </Box>
            <Box className={classes.description}>
              <p style={{fontSize:"17px"}}>
                {item?.Description}
              </p>
            </Box>
            <Box display='flex' justifyContent="space-between" alignItems="center">
              <AddOrRemoveFromFavoriteList refetch={refetch} listFav={listFav} gift={gift} />
              <AddOrRemoveFromCart item={item} />
            </Box>
          </Box>
          <Box>
            <p>
              {item?.PointNumber * item.quantity} points
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default CartItem