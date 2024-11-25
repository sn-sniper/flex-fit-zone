import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../Assets/1.png";
import "../Styles/Style.css";

export default function Home() {
  const navigate = useNavigate();
  const handleJoin = () => {
    navigate('/register');
  }
  return (
    <React.Fragment>
      <div className='body'>
        <nav className='nav'>
          <span className='logo'>
            <img src={logo} alt="logo" />FLEXFITZONE</span>
          <ul>
            <li><Link to='/' className="active">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/offers">OFFERS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>
        <div className='home-text'>
          <h1>BE YOUR <b>BEST</b></h1>
          <button onClick={handleJoin}>
            JOIN TODAY
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
