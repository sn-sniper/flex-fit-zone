import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../Styles/Style.css";
import Navbar from '../Components/Navbar';

export default function Home() {
  const navigate = useNavigate();
  const handleJoin = () => {
    navigate('/register');
  }
  return (
    <React.Fragment>
      <div className='body'>
        {/* <nav className='nav'>
          <span className='logo'>
            <img src={logo} alt="logo" />FLEXFITZONE</span>
          <ul>
            <li><Link to='/' className="active">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/offers">OFFERS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav> */}
        <Navbar/>
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
