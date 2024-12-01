import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import "../Styles/Navbar.css";
import logo from "../Assets/1.png";
export default function Navbar() {
    const location = useLocation();
    return (
        <React.Fragment>
            <nav className='nav'>
                <span className='logo'>
                    <img src={logo} alt="logo" />FLEXFITZONE</span>
                <ul>
                    <li><Link to='/' className={location.pathname === '/' ?"active":""}>HOME</Link></li>
                    <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>ABOUT</Link></li>
                    <li><Link to="/offers" className={location.pathname === "/offers" ? "active" : ""}>OFFERS</Link></li>
                    <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>CONTACT</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}
