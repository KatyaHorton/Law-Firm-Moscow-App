import React, { Component } from 'react'
import ContactForm from './ContactForm.js'
import  ServiceItemsList from './services/ServiceItemsList.js'
import PracticeItemsList from './practice/PracticeItemsList.js'
import Us from './Us.js'
/*		{( !this.props.formSubmitted ) ? <ContactForm
	  
				toggleForm = { this.props.toggleForm }
				messageView = { this.props.messageView }
			/> : <div className="contact-div">	
				<p>Ваш запрос успешно отправлен,<br/>
				мы свяжемся с Вами в ближайшее время </p>
			</div>} */
class MainPage extends Component {
  render() {
    return (
        <div className="main-slide" id='main-page'>
          <div id="main-slide-title">
			<div>
			  <h2>ЗАКОН И ПРАВО</h2>
			  <h2>Решение дел любой сложности</h2>
			</div>
						<button 
								onClick={this.props.openPopup}>Записаться на бесплатную консультацию
						</button>
			</div>	
		
		<div id='advantages-wrapper'>
		<h4>НАШИ ПРЕИМУЩЕСТВА</h4>
			<div><img className='advantage-image' src={require('../images/diploma.svg')}/>
			<p>Опытные юристы</p>
			</div>
			<div><img className='advantage-image' src={require('../images/wallet.svg')}/>
			<p>Доступные цены</p>
			</div>
            <div><img className='advantage-image' src={require('../images/auction.svg')}/>
			<p>Не ведем заведомо проигрышные дела</p>
			</div>													   
            <div><img className='advantage-image' src={require('../images/employee.svg')}/>
			<p>Работаем как с физическими, так и с юридическими лицами</p>
			</div>													   
            <div id='last-advantages-div'><img className='advantage-image' src={require('../images/shopping.svg')}/>
			<p>Оказываем юридические услуги различного характера</p>
			</div>													   													   
		</div>
		
		<Us />	
	
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
