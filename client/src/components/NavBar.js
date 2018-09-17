import React, { Component } from 'react';
import { Link } from 'react-router-dom' 



class NavBar extends Component {
	props
	state = {
		navBarShown: false,
		circlePosition: "fas fa-chevron-circle-up", 
		links: [
			{path: '/', name:'главная' },
			{path: '/services', name:'услуги' },
			{path: '/practice', name:'практика' },
			{path: '/reviews', name:'отзывы' },
			{path: '/us', name:'о нас' },
			{path: '/contacts', name:'контакты' }
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
				<ul id='nav-bar' >
			{this.state.links.map((link) => (
			
			
			<Link
				to={link.path}
				className='nav-bar-links'	
			>
					<li key={link.path}
					onClick={this.handleNavBar}	
						>
							{link.name}
						</li>
				</Link>
		))}

				</ul>
			)}

			</div>

		);
  }
}

export default NavBar;
