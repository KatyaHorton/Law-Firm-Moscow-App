import React, { Component } from 'react';

class NavBar extends Component {
	
	state = {
		navBarShown: false,
		circlePosition: "fas fa-chevron-circle-up"
	}
/*-------------------- functions --------------------*/

	handleNavBar = () => {
		if (this.state.navBarShown === true) {
			this.setState({
				navBarShown: false,
				circlePosition: "fas fa-chevron-circle-up"
			})
		} else {
			this.setState({
				navBarShown: true,
				circlePosition:  "fas fa-chevron-circle-down"
			})
		}
	}
	
	render() {
		
		console.log(this.state.circlePosition )
		return (

			<div id="nav-bar-container">
				<button 
					id='menu-button'
					onClick = { this.handleNavBar }	
				><i className={ this.state.circlePosition }></i></button>

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
