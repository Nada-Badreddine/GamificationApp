import React, { useContext } from 'react';
import UserContext from '../context/userContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CREATE_ORDER_MUTATION } from './../services/orderServices/MutationOrder';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client'
import CardItem from '../components/Card';

import { ADD_GIFTS_TO_LINE_MUTATION } from './../services/orderServices/MutationOrderLine';
import { LOAD_FAVORIS_BY_USER_ID } from './../services/favorisServices/QueryFavoris'

// commande =>  total, status,userId, id 1
// commandeItem commandId 1, quantity 3, giftId 1
// commandeItem commandId 1, quantity 4, giftId 2

// gifts/ quantity

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Cart = () => {
  const { cart, removeFromCart } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [createOrder, { data, error: errorOrder, loading }] = useMutation(
    CREATE_ORDER_MUTATION
  );

  console.log('a', data?.createOrder?.order?.id);
  const [createOrderLine, { error }] = useMutation(ADD_GIFTS_TO_LINE_MUTATION);
  const userConecte = localStorage.getItem('USER_ID');
  const totalPoints = cart.reduce(
    (ac, cr) => ac + cr?.PointNumber * cr?.quantity,
    0
  );
  const x = data?.createOrder?.order?.id;
  const AddOrder = () => {
    createOrder({
      variables: {
        input: {
          data: { TotalCart: totalPoints, users_permissions_user: userConecte },
        },
      },
    });
  };

  const AddGiftToOrderLine = () => {
    AddOrder();
    cart?.map((item) => {
      return createOrderLine({
        variables: {
          input: {
            data: { gift: item?.id, quantity: item?.quantity, order: x },
          },
        },
      });
    });
  };

  const formatListFavoris = (data) => {
    let favoriteList = []
    data?.forEach(favoris => { favoriteList.push(favoris.gifts[0]) })
    return favoriteList
  }
  const { loading: loadingFavoris, data: dataFavoris, refetch } = useQuery(LOAD_FAVORIS_BY_USER_ID, { variables: { id: userConecte } })
  const listFav = formatListFavoris(dataFavoris?.user?.favorises)

  return (
    <>
      {cart.length <= 0 && <p>No Item in the Cart!</p>}
      <Box display="flex" gap={1} flexWrap="wrap" px={2}>
        {cart?.map((item) => {
          return (
            <CardItem item={item} listFav={listFav} refetch={refetch}/>
          );
        })}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Vous etes sure de confirmer votre commande?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button onClick={AddGiftToOrderLine}>Oui</button>
            <button onClick={handleClose}>Non</button>
          </Typography>
        </Box>
      </Modal>
      <Button onClick={handleOpen}>Commander</Button>
    </>
  );
};
export default Cart;
