import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import NavBar from './components/NavBar';
import MainSlide from './components/MainSlide.js';
import Footer from './components/Footer.js';
import { Route } from 'react-router-dom';


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
			]	
		}
	
  render() {
    return (
      <div className="App">

 {/*Creates a path to BooksSearch UI */}			 
		<Route path='/footer'
			render={() =>
			(<Footer />	
		)}/>
			<Header />
			<NavBar />
			<MainSlide />
			<Footer />
      </div>
    );
  }
}

export default App;
