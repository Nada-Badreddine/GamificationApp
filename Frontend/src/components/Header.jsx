import React from 'react'
import LocalStorageService from './../utils/localStorageService'

const Header = () => {
    const logoutBtn=()=>{
        LocalStorageService.clearToken("TOKEN")


    }
  return (
    <div>

<button onClick={logoutBtn}>logout</button>



    </div>
  )
}

export default Header