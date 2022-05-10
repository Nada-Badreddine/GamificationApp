import React, { useState,useContext } from 'react';
import classes from './../styles/UserInfo.module.css';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import NavSection from '../components/NavSection/NavSection';
import Footeer from '../components/Footeer/Footeer';
import SettingsIcon from '@mui/icons-material/Settings';
import EditProfil from '../components/EditProfil/EditProfil';
import { LOAD_USER_BY_ID } from '../services/userServices/QueryUser'
import { useQuery } from '@apollo/client';
import { LOAD_USERS } from '../services/userServices/QueryUser'
import UserContext from '../context/userContext';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopUsers from '../components/TopUsers/TopUsers';
const UserInformation = () => {

  const [openModal, setOpenModal] = useState(false);
  const userConecte = localStorage.getItem("USER_ID");
  const { loading, data } = useQuery(LOAD_USER_BY_ID, { variables: { id: userConecte } })
  const { loading: loadingUser, data: dataUser } = useQuery(LOAD_USERS)
  const showModal = (item) => {
    setOpenModal(true);
  };
  const ApiUrl = 'http://localhost:1337'
  const { availablePoints } = useContext(UserContext);
  

  const totalPoints = data?.user?.user_rewards?.reduce((acc, curr) => {
    acc = acc + curr?.type_rewards[0]?.PointNumber ?? 0
    return acc;
  }, 0)

  if (loading || loadingUser) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const usersWithTotalPoints = dataUser?.users.map((user) => {
    return {
      ...user, 
      totalPoints: user?.user_rewards?.reduce((acc, curr) => {
        acc = acc + (curr?.type_rewards[0]?.PointNumber ?? 0)
        return acc;
      }, 0)
    }
  })

  const sortedUsers = usersWithTotalPoints.sort((a, b) => b.totalPoints - a.totalPoints);

const slicedUsers= sortedUsers.slice(0,3)
  return (
    <div>
      <NavSection />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', marginTop: '50px'
      }}>
        <div className={classes.employeePerformance}>
          <div className={classes.settingInfo}
            onClick={() => showModal()}
          >
            <SettingsIcon />
          </div>
          <div style={{ marginBottom: '35px' }}>
            <div className={classes.avatarWithBadge} >
              <div>
                <img
                  src={ApiUrl + data?.user?.ImgProfil[0]?.formats?.thumbnail?.url}
                  alt="imgProfil"
                  className={classes.avatarUser}
                />
              </div>
              <a href="/">
                <img className={classes.userBadge} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" alt="star" />
              </a>
            </div>
          </div>
          <div className={classes.infoUserName}>{data?.user?.username}</div>
          <div className={classes.infoUserJob}>{data?.user?.job}</div>
          <div style={{ textAlign: 'center' }}>
            <div className={classes.performanceTotalPoints}>
              <div className={classes.performanceTotalPointsTitle}>
                <span >Total Points</span>
              </div>
              <div >
                <div>
                  <p style={{ fontSize: '13px' }}> You have {availablePoints} Points</p>
                </div>
              </div>
            </div>
            <div className={classes.dashboardRecompenses}>
              <div className={classes.dashboardRecompensesTitle}> Achivements and Recompenses </div>
              <div className={classes.dashboardRecompensesContent}></div>
              {data?.user?.user_rewards?.map((item) => {
                return (
                  <div >
                    {item?.type_rewards.map((iteem) => {
                      return (
                        <Container>
                          <Row style={{display:"flex",justifyContent:"space-between"}}>       
                          <Col>{iteem?.Title}</Col>
                          <Col>{iteem?.PointNumber} Points</Col>
                          <Col>{item?.Description}</Col>
                          </Row>

                        </Container>
                        
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.dashboardTopPerformingEmployee}>
        <div className={classes.dashboardTopPerformingEmployeeTitle}>
          <span> Top performing employee</span>
        </div>
        {
          slicedUsers.map((item, index) => {
        
            return (
              <>
<TopUsers item={item} index={index}/>
              </>
            )
          })
        }
      </div>
      <Footeer />
      {openModal && (
        <EditProfil
          isModalVisible={openModal}
          setIsModalVisible={setOpenModal}
        />
      )}
    </div>
  );
};

export default UserInformation;
