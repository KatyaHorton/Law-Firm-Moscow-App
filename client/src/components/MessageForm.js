import React, { Component } from 'react'

class MessageForm extends Component {
  render() {
    return (
      <div className='message-form'>
        <div className='message-form_inner'>
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
		
				<input 
					className='input-form'
					type='text'
					placeholder="Ваше Сообщение"
					aria-label=""
					role="textbox"
				/>
				<br/>
				<button className='submit-contact' 
						>
							Записаться
				</button>
		
			</form>
        	<button  
				onClick={this.props.closePopup}>
					Close me
			</button>
        </div>
      </div>
    );
  }
}




export default MessageForm


