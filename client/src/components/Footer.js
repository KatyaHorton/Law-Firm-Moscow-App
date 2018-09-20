import React, { Component } from 'react';
import logo from './images/moscowSign.jpg'

class Footer extends Component {
  render() {
	  	  
    return (
        
		<footer id="footer">
          <div className="footer-title">
			<div id='footer-question'>
				<p>Появились вопросы?</p>
				<button className="open-form" 
						onClick={this.props.openPopup}>
						Получить консультацию</button>
			</div>	
			<div id='footer-info'>
			<p id='footer-first-p'>© ООО "ЮРИДИЧЕСКАЯ КОЛЛЕГИЯ"<br/> от 3 марта 2017 г.</p>
			<p><i className="fas fa-map-marker-alt"></i> город Москва,<br/>станция метро 'Новокузнецкая', <br/>	
				ул. Раушская набережная дом 4/5 кабинет 42
			</p>
			<p><a className='footer-link' href='mailto:fimida888888@gmail.com'><i className="fas fa-envelope"></i> fimida888888@gmail.com</a></p>
			<p><a className='footer-link' href='tel:+7-995-502-55-55'><i className="fas fa-phone-square"></i> +7-995-502-55-55</a></p>
			</div>
		</div>
		</footer>
    );
  }
}

export default Footer;
