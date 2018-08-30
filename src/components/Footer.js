import React, { Component } from 'react';
import logo from './images/moscowSign.jpg'

class Footer extends Component {
  render() {
    return (
        
		<footer id="footer">
          <div className="footer-title">
			<p><i className="fas fa-balance-scale"></i></p>
			<p>© ООО "ЮРИДИЧЕСКАЯ КОЛЛЕГИЯ"<br/> от 3 марта 2017 г.</p>
		<bl/>
			<p>Адрес: город Москва,<br/>станция метро 'Новокузнецкая', <br/>	
				ул. Раушская набережная дом 4/5 кабинет 42
			</p>
			<p><i className="far fa-envelope"></i> fimida888888@gmail.com</p>
			<p><i className="fas fa-phone-square"></i> +7-995-502-55-55</p>
			<p></p>
			</div>
		</footer>

    );
  }
}

export default Footer;
