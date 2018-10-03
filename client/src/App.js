import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import NavBar from './components/NavBar';
import MainSlide from './components/MainSlide.js';
import Footer from './components/Footer.js';
import PhoneButton from './components/PhoneButton.js'
import { Route } from 'react-router-dom';
import MessageForm from './components/MessageForm.js'


class App extends Component {
	

   state = {
			links: [
				{path: '/', name:'Главная' },
				{path: '/services', name:'Услуги' },
				{path: '/practice', name:'Практика' },
				{path: '/news', name:'Новости' },
				{path: '/reviews', name:'Отзывы' },
				{path: '/us', name:'О нас' },
				{path: '/contacts', name:'Контакты' }
			],
			showPopup: false,
	   		formSubmitted: false,
	   		messageView: true,
	   		focusedElementBeforePopUp: document.activeElement,
	   		phoneClass: 'Phone is-animating'
		}
	
  openPopup() {
    this.setState({
      showPopup: true,
	  formSubmitted: false,
	  focusedElementBeforePopUp: document.activeElement
		
    }); 
  }

  openPhonePopup() {
	  this.openPopup();
	  this.setState({
		  messageView: false,
		  phoneDisplay: 'hidden-phone'
	  })
  }

  toggleForm() {
    this.setState({
      formSubmitted: !this.state.formSubmitted
    })
  }

    closePopup () {
  			this.setState({ 
				showPopup: !this.state.showPopup,
				formSubmitted: false,
				messageView: true,
				phoneDisplay: 'shown-phone'
			});
		this.setFocusBack(this.state.focusedElementBeforePopUp)
  }

  setFocusBack (element) {
	  element.focus();
  }

  render() {
	  {console.log('Active element:',this.state.focusedElementBeforePopUp)}
    return (
      <div className="App">
			<Header />
			<a href='#main-slide-title' className='skip-link'>
			Перейти к основной части сайта</a>
			<NavBar />
			{this.state.showPopup ? 
          	<MessageForm
				closePopup = { this.closePopup.bind(this) }
				toggleForm = { this.toggleForm.bind(this) }
				formSubmitted = { this.state.formSubmitted }
				messageView = { this.state.messageView }
          	/>
				: null
        	}
			<MainSlide
				toggleForm = { this.toggleForm.bind(this) }
				formSubmitted = { this.state.formSubmitted }
				messageView = { this.state.messageView }
				openPopup = { this.openPopup.bind(this) }
			/>
			<Footer 
				openPopup = { this.openPopup.bind(this) }
			/>
			
			<PhoneButton 
				phoneDisplay = { this.state.phoneDisplay }
				openPopup = { this.openPhonePopup.bind(this) }
			/> 

		</div>
    );
  }
}

export default App;


			//{!this.state.showPopup ? null }