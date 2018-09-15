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
	   		messageView: true 
		}
	

  openPopup() {
    this.setState({
      showPopup: true,
	  formSubmitted: false	
    });
  }

  openPhonePopup() {
	  this.openPopup();
	  this.setState({
		  messageView: false
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
				messageView: true
			})
  } 

  render() {
    return (
      <div className="App">
			<Header />
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
			/>
			<Footer 
				openPopup = { this.openPopup.bind(this) }
			/>
			{!this.state.showPopup ? 
			<PhoneButton 
				openPopup = { this.openPhonePopup.bind(this) }
			/> 
			: null }
		</div>
    );
  }
}

export default App;
