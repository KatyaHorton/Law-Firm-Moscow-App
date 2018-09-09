import React, { Component } from 'react'
import ContactForm from './main-slide-content/ContactForm.js'

class MessageForm extends Component {
  render() {
	  
    return (
      <div className='message-form'>
		<div className="contact-div contact-div-popup">	
			<p 
				onClick={this.props.togglePopup}
				className='close-message-form'
				>
					<i className="fas fa-window-close"></i>
			</p>
			<ContactForm 
				togglePopup ={ this.props.togglePopup }
				/>
		</div>
      </div>
    );
  }
}

export default MessageForm


