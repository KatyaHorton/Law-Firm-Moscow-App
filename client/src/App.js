import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import NavBar from './components/NavBar';
import MainSlide from './components/MainSlide.js';
import Footer from './components/Footer.js';
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
	
   togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
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
				togglePopup = { this.togglePopup.bind(this) }
				closePopup = { this.closePopup.bind(this) }
				toggleForm = { this.toggleForm.bind(this) }
				formSubmitted = { this.state.formSubmitted }
          	/>
				: null
        	}
			<MainSlide />
			<Footer 
				togglePopup = { this.togglePopup.bind(this) }
			/>
      </div>
    );
  }
}

export default App;
