import React from 'react'
import Navbar from "../Components/Navbar"
import "../Styles/Contact.css"
import ContactForm from '../Components/ContactForm'
export default function Contact() {
  return (
    <React.Fragment>
      <div className='Contact-Container'>
        <Navbar />
        <div className='Contact-Content'>
          <div className='Contact-Form-Container'>
            <h1 className='Contact-Title'>get in touch <br/>today</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
