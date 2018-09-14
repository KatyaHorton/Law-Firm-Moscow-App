import React, { Component } from 'react'
import ContactForm from './ContactForm.js'
import  ServiceItemsList from './services/ServiceItemsList.js'
import PracticeItemsList from './practice/PracticeItemsList.js'

class MainPage extends Component {
  render() {
    return (
        <div className="main-slide" id='main-page'>
          <div id="main-slide-title">
			  <h1>ЗАКОН И ПРАВО</h1>
			  <h2>Решение дел любой сложности</h2>
			</div>
		  <div className="contact-div contact-div-main">		
			
		{( !this.props.formSubmitted ) ? <ContactForm 
				toggleForm = { this.props.toggleForm }
				messageView = { this.props.messageView }
			/> : <div className="contact-div">	
				<p>Ваш запрос успешно отправлен,<br/>
				мы свяжемся с Вами в ближайшее время </p>
			</div>}
			</div>
	
		<p className='temp'>Services</p>
		<ServiceItemsList showText = { false } />
	
		<p className='temp'>Practice</p>
		
		<PracticeItemsList  sliceStart = { 0 }
							sliceEnd = { 3 }   />
	
		
        </div>

    );
  }
}

export default MainPage;
