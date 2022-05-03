import React, { useContext, useState } from 'react';
import UserContext from '../context/userContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { CREATE_ORDER_MUTATION } from './../services/orderServices/MutationOrder';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client'
import ConfirmOrderModal from '../components/ConfirmOrderModal'
import { ADD_GIFTS_TO_LINE_MUTATION } from './../services/orderServices/MutationOrderLine';
import { LOAD_FAVORIS_BY_USER_ID } from './../services/favorisServices/QueryFavoris'
import formatListFavoris from '../utils/formatListFavoris';
import { makeStyles } from '@material-ui/core/styles';
import AddOrRemoveFromFavoriteList from "../components/AddOrRemoveFromFavoriteList"
import AddOrRemoveFromCart from "../components/AddOrRemoveFromCart"
import { useNavigate } from 'react-router-dom';

// commande =>  total, status,userId, id 1
// commandeItem commandId 1, quantity 3, giftId 1
// commandeItem commandId 1, quantity 4, giftId 2

// gifts/ quantity
const useStyles = makeStyles((theme) => ({
  img: {
    border: "0.0625rem solid #e6ddd8",
    height: ' 6.375rem',
    width: '6.375rem',
  },
  name: {
    color: "#1d2424",
    'font-family': 'fantasy',
    'margin-bottom': 0,
    'text-transform': 'uppercase',
    'font-size': ' 1rem',
    'line-height': '1.25rem',
    'margin': 0,
  },
  description: {
    color: ' #1d2424',
    display: 'flex',
    'font-family': 'function-book,Arial,sans-serif',
    'font-size': '1rem',
    'line-height': '1.25rem',
  },
  header: {
    borderBottom: '0.0625rem solid #e6e6e6',
    paddingBottom: '0.9375rem',
    width: ' 100%',
  },
  headerTitle: {
    color: "#1d2424",
    'font-family': 'fantasy',
    'margin-bottom': 0,
    'font-size': ' 1rem',
    'line-height': '1.25rem',
    'margin': 0,
  }

}));
const Cart = () => {
  const { cart, resetCart } = useContext(UserContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
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
  const totalPoints = cart?.reduce(
    (ac, cr) => ac + cr?.PointNumber * cr?.quantity,
    0
  );
  const AddOrder = () => {
      createOrder({
      variables: {
          input: {
            data: { TotalCart: totalPoints, users_permissions_user: userConecte, status: 'inProgress' },
          },
      },
      onCompleted: async (dataOrder) => {
      await Promise.all(
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
// ba3Ed mena3ml add commande tbedel fi localeStorge
  const AddGiftToOrderLine = () => {
    AddOrder();
    resetCart()
    navigate("/confirmationOrder")
  };

  const { loading: loadingFavoris, data: dataFavoris, refetch } = useQuery(LOAD_FAVORIS_BY_USER_ID, { variables: { id: userConecte } })
  // dataFavoris retour query
  const listFav = formatListFavoris(dataFavoris?.user?.favorises ?? [])
  // listFav formatage lil donneés
  if (loadingFavoris) {
    return (
      <Box sx={{ display: 'flex', justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box px={6} >
      {cart?.length <= 0 && <p>No Item in the Cart!</p>}
      <Box>
        {cart?.map((item, index) => {
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
                        <p>
                          {item?.Description}
                        </p>
                      </Box>
                      <Box display='flex' justifyContent="space-between" alignItems="center">
                        <AddOrRemoveFromFavoriteList refetch={refetch} listFav={listFav} gift={item} />
                        <AddOrRemoveFromCart item={item} />
                      </Box>
                    </Box>
                    <Box>
                      <p>
                        {item?.PointNumber} points
                      </p>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box display="flex" justifyContent='space-between' backgroundColor="#fff" p={2} mb={2}>
        <Box>
          <p className={classes.name}>
            Total :
          </p>
        </Box>
        <Box>
          <Box display="flex" flexDirection="row-reverse" mb={2}>
            <p className={classes.name}>
              {totalPoints} points
            </p>
          </Box>

          {cart.length > 0 &&
            <ConfirmOrderModal
              AddGiftToOrderLine={AddGiftToOrderLine}
              open={open}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
            />}
        </Box>
      </Box>
    </Box>
  );
};
export default Cart;
