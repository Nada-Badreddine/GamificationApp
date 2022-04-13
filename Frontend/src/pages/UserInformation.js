import React, { useState } from 'react';
import './../styles/UserInformation.css';
import RewardsUser from './../components/RewardsUser';
import NavSection from '../components/NavSection/NavSection';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
import { Modal } from 'antd';
import EditProfil from '../components/EditProfil/EditProfil';
const UserInformation = () => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = (item) => {
    setOpenModal(true);
  };

  return (
    <Box backgroundColor="#efece9">
      <NavSection />
      <div
        class="card-container"
        style={{ marginLeft: '50px', marginRight: '50px' }}
      >
        <img
          class="round"
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="user"
        />
        <div
          style={{
            color: '#000000b0',
            position: 'absolute',
            right: '39px',
            top: '40px',
          }}
          onClick={() => showModal()}
        >
          <SettingsIcon />
        </div>
      </div>
      <RewardsUser />

      <Footer />

      {openModal && (
        <EditProfil
          isModalVisible={openModal}
          setIsModalVisible={setOpenModal}
        />
      )}
    </Box>
  );
};

export default UserInformation;
