import React from 'react';
import Navbar from "../Components/Navbar";
import "../Styles/Offers.css";
import { Link } from 'react-router-dom';
export default function Offers() {
  return (
    <React.Fragment>
      <div className='Offers-Container'>
        <Navbar />
        <div className='Offers-Content'>
          <div className='Offers-Title'>
            <h1 className='Offers-Title-header'>
              what we offer
            </h1>
            <p>We're commited to bringing you the best workout experience.</p>
          </div>
          <div className='Offers-Section'>
            <Link className='Offer' id='offer1' to="/Register">best gain results</Link>
            <Link className='Offer' id='offer2' to="/Register">free workout plan</Link>
            <Link className='Offer' id='offer3' to="/Register">effective coaching</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
