import React, { useState,useContext } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserContext from '../../context/userContext';
import classes from './ProfilUser.module.css';
import { LOAD_USER_BY_ID } from '../../services/userServices/QueryUser'
import { useQuery } from '@apollo/client';
import EditProfil from '../EditProfil/EditProfil';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { LOAD_USERS } from '../../services/userServices/QueryUser'
import TopUsers from '../TopUsers/TopUsers';
function UserInformation() {
    const ApiUrl = 'http://localhost:1337'
    const userConecte = localStorage.getItem("USER_ID");
  
    const { availablePoints } = useContext(UserContext);
    const [openModal, setOpenModal] = useState(false);
    const { loading, data } = useQuery(LOAD_USER_BY_ID, { variables: { id: userConecte } })
    const showModal = (item) => {
        setOpenModal(true);
      };
      const { loading: loadingUser, data: dataUser } = useQuery(LOAD_USERS)
      
  if ( loadingUser) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }
      const totalPoints = data?.user?.user_rewards?.reduce((acc, curr) => {
        acc = acc + curr?.type_rewards[0]?.PointNumber ?? 0
        return acc;
      }, 0)
      if ( loading) {
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
   <> 
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
                <span style={{    fontSize: '1.0rem'}} >Total Points</span>
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
              
        <div className={classes.courseTime}>
<Container style={{maxWidth:'1280px'}}>
{data?.user?.user_rewards?.map((item,index) => {
  console.log('aa',data)
                return (
                  <div >
                    {item?.type_rewards.map((iteem) => {
                      return (
                        
                        <div className={classes.timeContent}>
  <div className={classes.timeContentSuper}>
<div className={classes.timeContentTitleContainer}>

<font  style={{verticalAlign: 'inherit',    marginLeft: '10px'
}}>{index+1} </font>


</div>
<div className={classes.timeContentTitle}>{iteem?.Title}</div>

  </div>
  <div className={classes.timeContentDesciption}>
    <div>
      <p style={{marginTop: '8px',fontSize: '16px'}}>{item?.Description} </p>
     
    </div>
  </div>
  
</div>
                      )
                    })}
                  </div>
                )
              })}

<div>
</div>
<div>
</div>
<div>
</div>
</Container>
        </div>
            </div>
          </div>
        </div>
      
        {openModal && (
        <EditProfil
          isModalVisible={openModal}
          setIsModalVisible={setOpenModal}
        />
      )}
      
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
   
   </>
    
  )
}

export default UserInformation

