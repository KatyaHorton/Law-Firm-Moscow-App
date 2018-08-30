import React, { Component } from 'react';
import logo from './images/moscowSign.jpg'

class Footer extends Component {
  render() {
    return (
        
		<footer id="footer">
          <div className="footer-title">
			<p><i className="fas fa-balance-scale"></i></p>
			<div id='footer-question'>
				<p>Появились вопросы?</p>
				<button className="submit-contact">Получить консультацию</button>
			</div>	
			<p>© ООО "ЮРИДИЧЕСКАЯ КОЛЛЕГИЯ"<br/> от 3 марта 2017 г.</p>
			<p><i className="fas fa-map-marker-alt"></i> город Москва,<br/>станция метро 'Новокузнецкая', <br/>	
				ул. Раушская набережная дом 4/5 кабинет 42
			</p>
			<p><i className="fas fa-envelope"></i> fimida888888@gmail.com</p>
			<p><i className="fas fa-phone-square"></i> +7-995-502-55-55</p>
			</div>
		</footer>

    );
  }
}

export default Footer;
