import React, { Component } from 'react'
import ContactForm from './main-slide-content/ContactForm.js'

class MessageForm extends Component {
  
	
	


	render() {
	  
    return (
      <div className='message-form'>
		
		{ !this.props.formSubmitted ? (
				<div className="contact-div contact-div-popup">	
			<p 
				onClick={this.props.closePopup}
				className='close-message-form'
				>
					<i className="fas fa-window-close"></i>
			</p>
			<ContactForm 
				togglePopup ={ this.props.togglePopup }
				toggleForm = { this.props.toggleForm }
				/>
		</div>
		) : <div className="contact-div contact-div-popup">	Form Submitted</div>}
		
		

      </div>
    );
  }
}

export default MessageForm


