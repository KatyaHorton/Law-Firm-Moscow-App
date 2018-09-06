import React, { Component } from 'react';


class ContactForm extends Component {
	
  render() {
    return (
        
          <div id="main-slide-div">
			<h2>Записаться на бесплатную юридическую консультацию</h2>
			<form>
				<input 
					className='input-form'
					type='text'
					placeholder="Имя"
					aria-label=""
					role="textbox"
				/>
		
				<input 
					className='input-form'
					type='text'
					placeholder="Телефон"
					aria-label=""
					role="textbox"
				/>
				<br/>
				<button className='submit-contact'>Записаться</button>
		
			</form>
			</div>
    );
  }
}

export default ContactForm;
