import React, { useState } from 'react';
import classes from './../styles/UserInfo.module.css';
import NavSection from '../components/NavSection/NavSection';
import Footeer from '../components/Footeer/Footeer';
import SettingsIcon from '@mui/icons-material/Settings';
import { Modal } from 'antd';
import EditProfil from '../components/EditProfil/EditProfil';



const UserInformation = () => {

  const [openModal, setOpenModal] = useState(false);

  const showModal = (item) => {
    setOpenModal(true);
  };

  return (
   
<div>
<NavSection />
  <div style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    marginTop: '50px'
  }}>
  <div className={classes.employeePerformance}>
    <div className={classes.settingInfo} 
    onClick={() => showModal()}
>
    <SettingsIcon />

    </div>
<div style={{marginBottom: '35px'}}>

  <div className={classes.avatarWithBadge} >
    <div  className={classes.avatarUser}>
      <span className={classes.avatarUserCircle} >
        <img src="https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&w=179&h=179" />
      </span>
     
    </div>
<a href="/">
  <img  className={classes.userBadge}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" alt="star" />
</a>
  </div>
 

</div>

<div className={classes.infoUserName}>Nada Badreddine</div>
<div style={{textAlign:'center'}}>

<div className={classes.performanceTotalPoints}>
  <div className={classes.performanceTotalPointsTitle}>
    <span >Total Points</span>
  </div>
  <div >
    <div>
    <p style={{fontSize: '13px'}}> You have 1000 Points</p> 
    </div>   
  </div>
</div>
<div className={classes.dashboardRecompenses}>
<div className={classes.dashboardRecompensesTitle}> Achivements and Recompenses </div>
<div className={classes.dashboardRecompensesContent}></div>
<div >
  <span>title</span>
  <span>Description</span>
  <span>Total Points</span>
</div>
<div >
  <span>title</span>
  <span>Description</span>
  <span>Total Points</span>
</div>
<div >
  <span>title</span>
  <span>Description</span>
  <span>Total Points</span>
</div>
<div >
  <span>title</span>
  <span>Description</span>
  <span>Total Points</span>
</div>
</div>

</div>
 </div>      
</div>
<div className={classes.dashboardTopPerformingEmployee}>
  <div className={classes.dashboardTopPerformingEmployeeTitle}>
    <span> Top performing employee</span> 
  </div>
  <div  style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}} className={classes.dashboardTopPerformingEmployeeContent}>
    <div className={classes.topRankedEmployee}>
     <div className={classes.topRankedEmployeeInfo}>
        <div className={classes.userAvatarWithBadge}>
          <div className={classes.userAvatar}>
            <span className={classes.antAvatarImage}>
              <img src="https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&w=179&h=179" />
            </span>
          </div>
        <div>
        <a href="/">
        <img  className={classes.userBadgeTopEmployee}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" alt="star" />
        </a>
      </div>     
       </div>
      <div className={classes.topRankedStudentsCardEmployeeInfo}>
<div className={classes.topRankedUserName}> Feten HajBoubaker </div>
<div className={classes.topRankedUserJob}>
  <span>Web Developer</span>
</div>
      </div>
    </div>
    <div className={classes.scoreInfo}>
<div className={classes.BadgescoreInfo}>
<div className={classes.cercle}> </div>
<div className={classes.scoreInfoRank}>1</div>
</div>
<div className={classes.scoreTotalPoint}>3000<span style={{marginLeft: '5px'}}>Points</span></div>
    </div>
  </div>
   </div>
   <div style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}} className={classes.dashboardTopPerformingEmployeeContent}>
    <div className={classes.topRankedtwoEmployee}>
     <div className={classes.topRankedEmployeeInfo}>
        <div className={classes.userAvatarWithBadge}>
          <div className={classes.userAvatar}>
            <span className={classes.antAvatarImage}>
              <img src="https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&w=179&h=179" />
            </span>
          </div>
        <div>
        <a href="/">
        <img  className={classes.userBadgeTopEmployee}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" alt="star" />
        </a>
      </div>     
       </div>
      <div className={classes.topRankedStudentsCardEmployeeInfo}>
<div className={classes.topRankedUserName}> Nour teber </div>
<div className={classes.topRankedUserJob}>
  <span>Devops</span>
</div>
      </div>
    </div>
    <div className={classes.scoreInfo}>
<div className={classes.BadgescoreInfo}>
<div className={classes.cercletwo}> </div>
<div className={classes.scoreInfoRank}>2</div>
</div>
<div className={classes.scoreTotalPoint}>2000<span style={{marginLeft: '5px'}}>Points</span></div>
    </div>
  </div>
   </div>
   <div  style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}} className={classes.dashboardTopPerformingEmployeeContent}>
    <div className={classes.topRankedthreeEmployee}>
     <div className={classes.topRankedEmployeeInfo}>
        <div className={classes.userAvatarWithBadge}>
          <div className={classes.userAvatar}>
            <span className={classes.antAvatarImage}>
              <img src="https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&w=179&h=179" />
            </span>
          </div>
        <div>
        <a href="/">
        <img  className={classes.userBadgeTopEmployee}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" alt="star" />
        </a>
      </div>     
       </div>
      <div className={classes.topRankedStudentsCardEmployeeInfo}>
<div className={classes.topRankedUserName}> Manel habbassi</div>
<div className={classes.topRankedUserJob}>
  <span>Web Design</span>
</div>
      </div>
    </div>
    <div className={classes.scoreInfo}>
<div className={classes.BadgescoreInfo}>
<div className={classes.cerclethree}> </div>
<div className={classes.scoreInfoRank}>3</div>
</div>
<div className={classes.scoreTotalPoint}>1000<span style={{marginLeft: '5px'}}>Points</span></div>
    </div>
  </div>
   </div>



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
