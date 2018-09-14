import React, { Component } from 'react'
import ContactForm from './main-slide-content/ContactForm.js'

class MessageForm extends Component {
  

	render() {
	  
    return (
       <div className='message-form'>
		{(this.props.messageView) ? (!this.props.formSubmitted ? (

			<ContactForm 
				closePopup = { this.props.closePopup }
				toggleForm = { this.props.toggleForm }
				messageView = { this.props.messageView }
				/>
		) : <div className="contact-div contact-div-popup">	
				<p 
				onClick= { this.props.closePopup   }
				className='close-message-form'
				>
					<i className="fas fa-window-close"></i>
			</p>
				<p>Ваш запрос успешно отправлен,<br/>
					мы свяжемся с Вами в ближайшее время</p>
		</div>) 
									 : 

			<ContactForm 
				closePopup = { this.props.closePopup }
				toggleForm = { this.props.toggleForm }
				messageView = { this.props.messageView }					 
				/>
		
		}
		
		

      </div>
    );
  }
}

export default MessageForm


