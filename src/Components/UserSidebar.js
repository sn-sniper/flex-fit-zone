import React from 'react'
import "../Styles/UserSidebar.css"
import logo from "../Assets/1.png"
export default function UserSidebar() {
  return (
    <React.Fragment>
        <div className='UserSidebar-Container'>
            <h1 className='usersidebar-title'>
                <img src={logo} alt='logo'/>
                FLEXFITZONE
            </h1>
            <div className='sidebar-rows'>
          <div className='sidebar-item'><ion-icon name="pricetags-outline"></ion-icon><span>Lessons</span></div>
          <div className='sidebar-item'><ion-icon name="compass-outline"></ion-icon><span>Explore</span></div>
            </div>
            <div className='sidebar-profile'>
          <ion-icon name="person-circle-outline"></ion-icon>
          <span>Profile</span>
            </div>
        </div>
    </React.Fragment>
  )
}
