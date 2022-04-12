import React from 'react';
import './../styles/UserInformation.css';
import RewardsUser from './../components/RewardsUser';
import NavSection from '../components/NavSection/NavSection';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';

const UserInformation = () => {
  return (
    <Box backgroundColor="#efece9">
      <NavSection />
      <div class="card-container">
        <img
          class="round"
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="user"
        />
      </div>
      <RewardsUser />
      <Footer />
    </Box>
  );
};

export default UserInformation;
