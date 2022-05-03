import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useApolloClient } from '@apollo/client';
import UserContext from '../context/userContext';
import LocalStorageService from '../utils/localStorageService';
import { LOGIN_MUTATION } from '../services/loginService/loginMutation';
import { GET_ORDERS_BY_USER } from '../services/orderServices/getOrdersByUser';
import { LOAD_USER_BY_ID } from '../services/userServices/QueryUser'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
const theme = createTheme();
export default function Login() {
  const navigate = useNavigate();
  const { setIsAuth, setUserName, setUserID, setAvailablePoints } = useContext(UserContext);
  const client = useApolloClient();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const { data: { login } } = await client.mutate({
				mutation: LOGIN_MUTATION,
				variables: {
          input: {
            identifier: values.email,
            password: values.password,
          },
				},
			});

      const { data: dataOrders } = await client.query({
				query: GET_ORDERS_BY_USER,
				variables: {
          id: login.user.id
				},
			});

      const { data: dataRewars } = await client.query({
				query: LOAD_USER_BY_ID,
				variables: {
          id: login.user.id
				},
			});

      const totalPointsUsed = dataOrders?.user?.orders?.reduce((acc, curr) => acc+ curr?.TotalCart ?? 0, 0)
      const totalPoints = dataRewars?.user?.user_rewards?.reduce((acc, curr) =>{
        acc = acc + curr?.type_rewards[0]?.PointNumber ?? 0
        return acc;
      }, 0)
      setAvailablePoints(totalPoints - totalPointsUsed)
      setIsAuth(!!login.jwt);
      setUserID(login.user.id);

      setUserName(login.user.username);

      LocalStorageService.setAvailablePoints(totalPoints - totalPointsUsed);
      LocalStorageService.setToken(login.jwt);
      LocalStorageService.setUserId(login.user.id);

      LocalStorageService.setUserName(login.user.username);
      navigate('/');
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
