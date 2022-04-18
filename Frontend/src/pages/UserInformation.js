import React, { useState } from 'react';
import './../styles/UserInformation.css';
import RewardsUser from './../components/RewardsUser';
import NavSection from '../components/NavSection/NavSection';
import Footeer from '../components/Footeer/Footeer';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
import { Modal } from 'antd';
import EditProfil from '../components/EditProfil/EditProfil';
import logoPoint from '../../public/assets/logo/logoRecompense';
const UserInformation = () => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = (item) => {
    setOpenModal(true);
  };

  return (
    <>
      <Box>
        <NavSection />
        <div div style={{ backgroundColor: 'white', marginTop: '38px' }}>
          <div
            class="card-container"
            style={{
              width: '50%',
              margin: 'auto',
              backgroundColor: 'rgb(250, 250, 250)',
              boxShadow: 'none',
            }}
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
          <div>
            <img
              class="round"
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="user"
            />
          </div>
          <div>
            <RewardsUser />
          </div>

          {openModal && (
            <EditProfil
              isModalVisible={openModal}
              setIsModalVisible={setOpenModal}
            />
          )}
        </div>
      </Box>
    </>
  );
};

export default UserInformation;
