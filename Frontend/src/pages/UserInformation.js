import React from 'react'
import "./../styles/UserInformation.css"
import RewardsUser from './../components/RewardsUser';
import Header from './../components/Header';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';

const UserInformation = () => {
  return (
    <Box backgroundColor='#efece9'>
      <Header />
      <div class="card-container">
        <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
      </div>
      <RewardsUser />
      <Footer />
    </Box>
  )
}

export default UserInformation