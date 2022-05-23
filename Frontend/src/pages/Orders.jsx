import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useQuery } from '@apollo/client';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import CircularProgress from '@mui/material/CircularProgress';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NavSection from '../components/NavSection/NavSection';
import Footeer from '../components/Footeer/Footeer';
import { GET_ORDERS_BY_USER } from '../services/orderServices/getOrdersByUser';

import Moment from 'react-moment';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Orders = () => {
  const userConecte = localStorage.getItem('USER_ID');
  const { loading, data } = useQuery(GET_ORDERS_BY_USER, {
    variables: { id: userConecte },
  });

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box backgroundColor="#efece9">
      <NavSection />
      <Box px={5} pb={2}>
       
        <TableContainer component={Paper} style={{width:'86%',marginLeft: 'auto',
    marginRight: 'auto',marginTop: '40px'}}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table"  >
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">id Order</StyledTableCell>
                <StyledTableCell align="center">total Points</StyledTableCell>
                <StyledTableCell align="center">status</StyledTableCell>
                <StyledTableCell align="center">created_at</StyledTableCell>
             
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.user?.orders?.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.TotalCart}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.status}</StyledTableCell>
                  <StyledTableCell align="center">
           
                    <Moment format="YYYY/MM/DD HH:mm" date={row.created_at}/>
                  </StyledTableCell>
               
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Footeer />
    </Box>
  );
};

export default Orders;
