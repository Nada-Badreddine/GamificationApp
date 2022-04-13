import React, { useState } from 'react';
import { Modal } from 'antd';
import classes from './EditProfil.module.css';
import { Button } from 'antd';

const EditProfil = (props) => {
  const handleCancel = () => {
    props.setIsModalVisible(false);
  };

  const [oldPass, setOldPass] = useState('');
  const [newPassFirst, setNewPassFirst] = useState('');
  const [newPassSecond, setNewPassSecond] = useState('');
  const [messageError, setMessageError] = useState('');

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
              src="assets/images/avatarProfil.jpg"
              alt="imgProfil"
              className={classes.profileImg}
            />
          </div>
          <div>
            <h5 style={{ textAlign: 'center', padding: '15px' }}>
              Nada Badreddine
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

          <button onClick={handleClick}>Click me</button>
        </div>
      </Modal>
    </>
  );
};

export default EditProfil;
