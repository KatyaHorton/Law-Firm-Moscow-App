import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import NavBar from './components/NavBar'
import MainSlide from './components/MainSlide.js'

class App extends Component {
  render() {
    return (
      <div className="App">
			<Header />
			<NavBar />
			<MainSlide />
      </div>
    );
  }
}

export default App;
