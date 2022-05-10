import React, { useState } from 'react';
import { Modal } from 'antd';
import classes from './EditProfil.module.css';
import { Button } from 'antd';
import { LOAD_USER_BY_ID } from './../../services/userServices/QueryUser'
import { useQuery } from '@apollo/client';




const EditProfil = (props) => {
  const handleCancel = () => {
    props.setIsModalVisible(false);
  };

  const [oldPass, setOldPass] = useState('');
  const [newPassFirst, setNewPassFirst] = useState('');
  const [newPassSecond, setNewPassSecond] = useState('');
  const [messageError, setMessageError] = useState('');
  const userConecte = localStorage.getItem("USER_ID");
  const { loading, data} = useQuery(LOAD_USER_BY_ID, { variables: { id: userConecte } })
  const ApiUrl = 'http://localhost:1337'  



  const handleChangeOldPass = (e) => {
    setOldPass(e.target.value);
  };
  const handleChangeFirstPass = (e) => {
    setNewPassFirst(e.target.value);
  };
  const handleChangeSecondPass = (e) => {
    setNewPassSecond(e.target.value);
  };

  const handleClick = () => {
    if (newPassFirst !== newPassSecond) {
      setMessageError('New password and retype new password do not match');
    } else {
      setMessageError('they match');
    }
  };
  console.log('d', messageError);
  return (
    <>
      <Modal
        title="Information parameter"
        visible={props.isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <div>
            <img
              src={ ApiUrl + data?.user?.ImgProfil[0]?.formats?.thumbnail?.url}
              alt="imgProfil"
              className={classes.profileImg}
            />
          </div>
          <div>
            <h5 style={{ textAlign: 'center', padding: '15px' }}>
            {data?.user?.username}
            </h5>

            <div style={{ paddingBottom: '20px' }}>
              <input
                type="password"
                placeholder="Current Password"
                className={classes.password}
                value={oldPass}
                onChange={handleChangeOldPass}
              />
            </div>
            <div style={{ paddingBottom: '20px' }}>
              <input
                type="password"
                placeholder="New Password"
                className={classes.password}
                value={newPassFirst}
                onChange={handleChangeFirstPass}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="retype the new password"
                className={classes.password}
                value={newPassSecond}
                onChange={handleChangeSecondPass}
              />
            </div>
          </div>
          <Button
            style={{ margin: 'auto', display: 'block', marginTop: '16px' }}
            type="primary"
          >
            Update
          </Button>

        
        </div>
      </Modal>
    </>
  );
};

export default EditProfil;
