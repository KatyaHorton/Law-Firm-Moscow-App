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
<input 
					id="search-input" 
					type="text" 
					placeholder="What exactly do you fancy?"
					aria-label="Enter the name of the place you search"
					
					onChange = {(event) => this.handleTextChange(event.target.value, event)}
			/>