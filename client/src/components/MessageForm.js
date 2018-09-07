import React, { Component } from 'react'
import ContactForm from './main-slide-content/ContactForm.js'

class MessageForm extends Component {
  render() {
    return (
      <div className='message-form'>
		<div className="contact-div contact-div-popup">	
			<button 
				onClick={this.props.closePopup}>
					Close me
			</button>
			<ContactForm />
		</div>
      </div>
    );
  }
}

export default MessageForm


