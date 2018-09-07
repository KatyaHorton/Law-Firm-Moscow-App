import React, { Component } from 'react'
import ContactForm from './ContactForm.js'

class MainPage extends Component {
  render() {
    return (
        <div className="main-slide" id='main-page'>
          <div id="main-slide-title">
			  <h1>ЗАКОН И ПРАВО</h1>
			  <h2>Решение дел любой сложности</h2>
			</div>
			<div className="contact-div contact-div-main">		
			<ContactForm />
			</div>
        </div>

    );
  }
}

export default MainPage;
