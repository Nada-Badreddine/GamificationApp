import React from 'react'
import classes from './TopUsers.module.css';

function TopUsers({item,index}) {
    const ApiUrl = 'http://localhost:1337'
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
                  <img src={ApiUrl + item?.ImgProfil[0]?.url} />
                
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
                <span>{item?.job}</span>
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
}

export default TopUsers