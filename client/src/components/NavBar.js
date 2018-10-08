import React, { Component } from 'react';
import { Link } from 'react-router-dom' 



class NavBar extends Component {
	props
	state = {
		circlePosition: "fas fa-chevron-circle-down",
		navBarShown: false,
		classNavBar: 'nav-bar nav-close',
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
				classNavBar: 'nav-bar nav-close',
				circlePosition:  "fas fa-chevron-circle-down"
			})
		} else {
			this.setState({
				navBarShown: true,
				classNavBar: 'nav-bar nav-open',
				circlePosition: "fas fa-chevron-circle-up"
				
			})
		}

	}
	

	
	render() {
		
		
		return (

			<div id="nav-bar-container">
				<button 
					id='menu-button'
					onClick = { this.handleNavBar }	
					aria-label = 'кнопка меню'
				><i className={ this.state.circlePosition }></i></button>
				<ul className={this.state.classNavBar} >
			{this.state.links.map((link) => (
			
			
			<Link
				to={link.path}
				className='nav-bar-links'	
				key={link.path}
			>
					<li
					onClick={this.handleNavBar}	
						>
							{link.name}
						</li>
				</Link>
		))}

				</ul>
			

			</div>

		);
  }
}

export default NavBar;
