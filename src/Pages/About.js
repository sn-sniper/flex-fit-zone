import React from 'react'
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import "../Styles/About.css";
import About1 from "../Assets/About1.jpg"
import About2 from "../Assets/About2.jpg"

export default function About() {
  return (
    <React.Fragment>
      <div className='About-Container'>
        <Navbar />
        <div className='About-Content'>
          <section className='About-Text'>
            <h1 className='About-Text-Title'>
              online coaching
            </h1>
            <p>Physical fitness is not only one of the <br/> 
            most important keys to a healthy body, it<br/>
            is the basis of the dynamic and creative <br/>
            intellectual activity.</p>
            <Link className='learn-more' to='/contact'>Learn More</Link>
          </section>
          <section className='About-img'>
            <img src={About1} id='AboutImg1' alt='about1'/>
            <img src={About2} id='AboutImg2' alt='about2'/>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}