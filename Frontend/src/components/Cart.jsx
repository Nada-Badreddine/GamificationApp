import React, { useContext, useState } from 'react';
import UserContext from '../context/userContext';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { CREATE_ORDER_MUTATION } from './../services/orderServices/MutationOrder';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client'
import ConfirmOrderModal from '../components/ConfirmOrderModal'
import { ADD_GIFTS_TO_LINE_MUTATION } from './../services/orderServices/MutationOrderLine';
import { LOAD_FAVORIS_BY_USER_ID } from './../services/favorisServices/QueryFavoris'
import formatListFavoris from '../utils/formatListFavoris';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem/CartItem'
const useStyles = makeStyles((theme) => ({
  img: {
    border: "0.0625rem solid #e6ddd8",
    height: ' 6.375rem',
    width: '6.375rem',
  },
  name: {
    color: "#1d2424",
   
    'margin-bottom': 0,
    'font-weight': 'bold',
    'font-size': ' 1rem',
    'line-height': '1.25rem',
    'margin': 0,
  },
  description: {
    color: ' #1d2424',
    display: 'flex',
  
    'font-size': '17px!important',
    'line-height': '1.25rem',
  },
  header: {
    borderBottom: '0.0625rem solid #e6e6e6',
    paddingBottom: '0.9375rem',
    width: ' 100%',
  },
  headerTitle: {
    color: "#1d2424",
    'font-weight': 'bold',
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

  const AddGiftToOrderLine = () => {
    AddOrder();
    resetCart()
    navigate("/confirmationOrder")
  };

  const { loading: loadingFavoris, data: dataFavoris, refetch } = useQuery(LOAD_FAVORIS_BY_USER_ID, { variables: { id: userConecte } })
 
  const listFav = formatListFavoris(dataFavoris?.user?.favorises ?? [])

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
          <CartItem  item={item} index={index} listFav={listFav} gift={item} refetch={refetch} />
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
