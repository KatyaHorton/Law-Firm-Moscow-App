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
			      showPopup: false
		}
	
   togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  } 

    closePopupLater() {
		setTimeout(() => {
  			this.setState({ showPopup: !this.state.showPopup });
		}, 3000);
  } 

  render() {
    return (
      <div className="App">
			<Header />
			<NavBar />
			{this.state.showPopup ? 
          	<MessageForm
				closePopup= { this.togglePopup.bind(this) }
				closePopupLater = { this.closePopupLater.bind(this) }
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
