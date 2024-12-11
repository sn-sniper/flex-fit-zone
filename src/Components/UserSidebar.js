import React from 'react'
import "../Styles/UserSidebar.css"
import logo from "../Assets/1.png";
import { useNavigate } from 'react-router-dom';
export default function UserSidebar({ plantype, username }) {
  const navigate = useNavigate();

  const dashboardNavigate = (e) => {
    navigate('/dashboard');
  }
  const ExploreNavigate = (e) => {
    navigate('./explore');
  }
  return (
    <React.Fragment>
      <div className='UserSidebar-Container'>
        <h1 className='usersidebar-title'>
          <img src={logo} alt='logo' />
          FLEXFITZONE
        </h1>
        <div className='sidebar-rows'>
          <div className='sidebar-item' onClick={dashboardNavigate}><ion-icon name="pricetags-outline"></ion-icon><span>Lessons</span></div>
          <div className='sidebar-item' onClick={ExploreNavigate}><ion-icon name="compass-outline"></ion-icon><span>Explore</span></div>
        </div>
        <div className='sidebar-profile'>
          <ion-icon name="person-circle-outline"></ion-icon>
          <span>{username} <b>{plantype}</b></span>
        </div>
      </div>
    </React.Fragment>
  )
}
