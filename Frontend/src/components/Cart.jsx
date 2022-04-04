import React, { useContext, useState } from 'react';
import UserContext from '../context/userContext';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { CREATE_ORDER_MUTATION } from './../services/orderServices/MutationOrder';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client'
import CardItem from '../components/Card';
import ConfirmOrderModal from '../components/ConfirmOrderModal'
import { ADD_GIFTS_TO_LINE_MUTATION } from './../services/orderServices/MutationOrderLine';
import { LOAD_FAVORIS_BY_USER_ID } from './../services/favorisServices/QueryFavoris'

// commande =>  total, status,userId, id 1
// commandeItem commandId 1, quantity 3, giftId 1
// commandeItem commandId 1, quantity 4, giftId 2

// gifts/ quantity

const Cart = () => {
  const { cart, resetCart } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [createOrder] = useMutation(
    CREATE_ORDER_MUTATION
  );

  const [createOrderLine] = useMutation(ADD_GIFTS_TO_LINE_MUTATION);
  const userConecte = localStorage.getItem('USER_ID');
  const totalPoints = cart.reduce(
    (ac, cr) => ac + cr?.PointNumber * cr?.quantity,
    0
  );
  const AddOrder = () => {
    createOrder({
      variables: {
        input: {
          data: { TotalCart: totalPoints, users_permissions_user: userConecte },
        },
      },
      onCompleted: async (dataOrder) => {
        Promise.all(
          cart?.map(async (item) => {
            await createOrderLine({
              variables: {
                input: {
                  data: { gift: item?.id, quantity: item?.quantity, order: dataOrder?.createOrder?.order?.id },
                },
              },
            });
          })
        )
      }
    });
  };

  const AddGiftToOrderLine = () => {
    AddOrder();
    resetCart()
  };

  const formatListFavoris = (data) => {
    let favoriteList = []
    data?.forEach(favoris => { favoriteList.push(favoris.gifts[0]) })
    return favoriteList
  }
  const { loading: loadingFavoris, data: dataFavoris, refetch } = useQuery(LOAD_FAVORIS_BY_USER_ID, { variables: { id: userConecte } })
  const listFav = formatListFavoris(dataFavoris?.user?.favorises)

  if (loadingFavoris) {
    return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  )
  }

  return (
    <>
      {cart.length <= 0 && <p>No Item in the Cart!</p>}
      <Box display="flex" gap={1} flexWrap="wrap" px={2}>
        {cart?.map((item) => {
          return (
            <CardItem item={item} listFav={listFav} refetch={refetch} />
          );
        })}
      </Box>
      <ConfirmOrderModal
        AddGiftToOrderLine={AddGiftToOrderLine}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </>
  );
};
export default Cart;
