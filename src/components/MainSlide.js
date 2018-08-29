import React, { Component } from 'react'
import ContactForm from './ContactForm.js'

class MainSlide extends Component {
  render() {
    return (
        <div id="main-slide">
          <div id="main-slide-title">
			  <h1>ЗАКОН И ПРАВО</h1>
			  <h2>Решение дел любой сложности</h2>
			</div>
			<ContactForm />
        </div>

    );
  }
}

export default MainSlide;
