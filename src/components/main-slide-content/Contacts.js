import React, { Component } from 'react'

class Contacts extends Component {
  render() {
    return (
        <div >
			<map><iframe src="https://yandex.ru/map-widget/v1/-/CBBU6Ec58D" width="90%" height="400" frameborder="1" allowfullscreen="true"></iframe></map>
			<p>© ООО "ЮРИДИЧЕСКАЯ КОЛЛЕГИЯ"<br/> от 3 марта 2017 г.</p>
			<p><i className="fas fa-map-marker-alt"></i> город Москва,<br/>станция метро 'Новокузнецкая', <br/>	
				ул. Раушская набережная дом 4/5 кабинет 42
			</p>
			<p><i className="fas fa-envelope"></i> fimida888888@gmail.com</p>
			<p><i className="fas fa-phone-square"></i> +7-995-502-55-55</p>
        </div>

    );
  }
}

export default Contacts;