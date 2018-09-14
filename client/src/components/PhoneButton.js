import React, { Component } from 'react'
import ContactForm from './main-slide-content/ContactForm.js'

class PhoneButton extends Component {
  	

	render() {
	  
    return (
		<div id='phone-button'><button 
			onClick={this.props.openPopup}
			className="fas fa-phone"></button> </div>
      	
    );
  }
}

export default PhoneButton


