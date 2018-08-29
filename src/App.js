import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import MainSlide from './components/MainSlide.js'

class App extends Component {
  render() {
    return (
      <div className="App">
			<Header />
			<MainSlide />
      </div>
    );
  }
}

export default App;
