import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MainPage from './MainPage.js'
import Services from './Services.js'
import Practice from './Practice.js'
import News from './News.js'
import Us from './Us.js'
import Contacts from './Contacts.js'
import Reviews from './Reviews.js'



class MainSlide extends Component {
  render() {
    return (
        <div id="main-slide-container">
          
		        <Route exact path='/'
					render={() =>
					(<MainPage />
				)}/>
					 
				<Route path='/services'
					render={() =>
					(<Services />
				)}/>
					 
				<Route path='/practice'
					render={() =>
					(<Practice />
				)}/>
					 
				<Route path='/reviews'
					render={() =>
					(<Reviews />
				)}/>	 
					 
				 <Route path='/news'
					render={() =>
					(<News />
				)}/>
					 
				<Route path='/us'
					render={() =>
					(<Us />
				)}/>
					 
				<Route path='/contacts'
					render={() =>
					(<Contacts />
				)}/>
        </div>

    );
  }
}

export default MainSlide;
