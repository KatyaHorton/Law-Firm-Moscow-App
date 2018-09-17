import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MainPage from './main-slide-content/MainPage.js'
import Services from './main-slide-content/Services.js'
import Practice from './main-slide-content/Practice.js'
import Us from './main-slide-content/Us.js'
import Contacts from './main-slide-content/Contacts.js'
import Reviews from './main-slide-content/Reviews.js'



class MainSlide extends Component {
  render() {
    return (
        <div id="main-slide-container">
          
		        <Route exact path='/'
					render={() =>
					(<MainPage 
					 	toggleForm = { this.props.toggleForm }
					 	formSubmitted = { this.props.formSubmitted }
					 	messageView = { this.props.messageView }
					 	openPopup = { this.props.openPopup}	
					 />
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
