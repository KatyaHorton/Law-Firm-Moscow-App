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
	   		formSubmitted: false
		}
	

   openPopup() {
    this.setState({
      showPopup: true,
	  formSubmitted: false	
    });
  }


  toggleForm() {
    this.setState({
      formSubmitted: !this.state.formSubmitted
    })
  }


//closes window after submit bitton pressed 
    closePopup () {
  			this.setState({ 
				showPopup: !this.state.showPopup,
				formSubmitted: false
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
          	/>
				: null
        	}
			<MainSlide
				toggleForm = { this.toggleForm.bind(this) }
				formSubmitted = { this.state.formSubmitted }
			/>
			<Footer 
				openPopup = { this.openPopup.bind(this) }
			/>
		
			<PhoneButton 
				openPopup = { this.openPopup.bind(this) }
			/>
		</div>
    );
  }
}

export default App;
