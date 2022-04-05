import React from 'react'
import "./../styles/UserInformation.css"
import RewardsUser from './../components/RewardsUser';
import Header from './../components/Header';

const UserInformation = () => {
  return (
    <div>
      <Header />
      <div class="card-container">
        <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
      </div>
      <RewardsUser />
    </div>
  )
}

export default UserInformation