import React, { useState } from 'react';
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


const UserInformation = () => {

  const [openModal, setOpenModal] = useState(false);
  const userConecte = localStorage.getItem("USER_ID");
  const { loading, data } = useQuery(LOAD_USER_BY_ID, { variables: { id: userConecte } })
  const { loading: loadingUser, data: dataUser } = useQuery(LOAD_USERS)
  const showModal = (item) => {
    setOpenModal(true);
  };
  const ApiUrl = 'http://localhost:1337'


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
        acc = acc + curr?.type_rewards[0]?.PointNumber ?? 0
        return acc;
      }, 0)
    }
  })

  const sortedUsers = usersWithTotalPoints.sort((a, b) => b.totalPoints - a.totalPoints);

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
                  <p style={{ fontSize: '13px' }}> You have {totalPoints} Points</p>
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
                        <div className={classes.rewards}>
                          <span>{iteem?.Title}</span>
                          <span>{iteem?.PointNumber} Points</span>
                          <span>{item?.Description}</span>

                        </div>
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
          sortedUsers.map((item, index) => {
            return (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }} className={classes.dashboardTopPerformingEmployeeContent}>
                <div className={index === 0 ? classes.topRankedEmployee : index === 1 ? classes.topRankedtwoEmployee : classes.topRankedthreeEmployee}>
                  <div className={classes.topRankedEmployeeInfo}>
                    <div className={classes.userAvatarWithBadge}>
                      <div className={classes.userAvatar} >
                        <span className={classes.antAvatarImage} >
                          <img src="https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&w=179&h=179" />
                        </span>
                      </div>
                      <div>
                        <a href="/">
                          <img className={classes.userBadgeTopEmployee} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" alt="star" />
                        </a>
                      </div>
                    </div>
                    <div className={classes.topRankedStudentsCardEmployeeInfo}>
                      <div className={classes.topRankedUserName}> {item?.username} </div>
                      <div className={classes.topRankedUserJob}>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.scoreInfo}>
                    <div className={classes.BadgescoreInfo}>
                      <div className={index === 0 ? classes.cercle : index === 1 ? classes.cercletwo : classes.cerclethree}> </div>
                      <div className={classes.scoreInfoRank}>{index + 1}</div>
                    </div>
                    <div className={classes.scoreTotalPoint}>{item.totalPoints}<span style={{ marginLeft: '5px' }}>Points</span></div>
                  </div>
                </div>
              </div>
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
