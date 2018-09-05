import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import NavBar from './components/NavBar';
import MainSlide from './components/MainSlide.js';
import Footer from './components/Footer.js';
import { Route } from 'react-router-dom';
import PopUp from './components/ContactFromPopUp.js'


class App extends Component {
	

  render() {
    return (
      <div>
        <p>
			</p>
        {this.state.showPopup ? 
          <PopUp
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
	
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




  render() {
    return (
      <div className="App">

 {/*Creates a path to BooksSearch UI */}			 
			<Header />
			    <button onClick={this.togglePopup.bind(this)}>show popup</button>
        		<button onClick={() => {alert('woooooooot?');}}>try me when popup is open</button>
			<NavBar />
			
{this.state.showPopup ? 
          <PopUp
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
  

			<MainSlide />
			<Footer />
      </div>
    );
  }
}

export default App;
