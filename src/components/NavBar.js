import React, { Component } from 'react';

class NavBar extends Component {
	
	state = {
		navBarShown: false
	}
/*-------------------- functions --------------------*/

	handleNavBar = () => {
		if (this.state.navBarShown === true) {
			this.setState({
				navBarShown: false
			})
		} else {
			this.setState({
				navBarShown: true
			})
		}
	}
	
	render() {
		return (

			<div id="nav-bar-container">
				<button 
					id='menu-button'
					onClick = { this.handleNavBar }	
				>☰</button>
			
			{(this.state.navBarShown) && (
				<ul id='nav-bar'>
					<li>Главная</li>
					<li>Услуги</li>
					<li>Практика</li>
					<li>Новости</li>
					<li>Отзывы</li>
					<li>О нас</li>
					<li>Контакты</li>
				</ul>
			)}

			</div>

		);
  }
}

export default NavBar;
