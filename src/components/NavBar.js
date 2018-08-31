import React, { Component } from 'react';
import { Link } from 'react-router-dom' 

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
					<li><Link to='/'> Главная </Link></li>
					<li><Link to='/services'> Услуги </Link></li>
					<li><Link to='/practice'> Практика </Link></li>
					<li><Link to='/news'> Новости </Link></li>
					<li><Link to='/reviews'> Отзывы </Link></li>
					<li><Link to='/us'> О нас </Link></li>
					<li><Link to='/contacts'> Контакты </Link></li>
				</ul>
			)}

			</div>

		);
  }
}

export default NavBar;
