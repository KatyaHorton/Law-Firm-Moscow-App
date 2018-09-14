import React, { Component } from 'react';
import { Link } from 'react-router-dom' 

class NavBar extends Component {
	props
	state = {
		navBarShown: false,
		circlePosition: "fas fa-chevron-circle-up", 
		links: [
			{path: '/', name:'Главная' },
			{path: '/services', name:'Услуги' },
			{path: '/practice', name:'Практика' },
			{path: '/reviews', name:'Отзывы' },
			{path: '/us', name:'О нас' },
			{path: '/contacts', name:'Контакты' }
		]
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
		
		
		return (

			<div id="nav-bar-container">
				<button 
					id='menu-button'
					onClick = { this.handleNavBar }	
				><i className={ this.state.circlePosition }></i></button>

			{(this.state.navBarShown) && (
				<ul id='nav-bar'>
			{this.state.links.map((link) => (
			
				<li key={link.path}
					onClick={this.handleNavBar}
				>
						<Link
							to={link.path}
							className='nav-bar-links'	
						>
							{link.name}
						</Link>
				</li>
		))}

				</ul>
			)}

			</div>

		);
  }
}

export default NavBar;
