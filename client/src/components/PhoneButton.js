import React, { Component } from 'react'

class PhoneButton extends Component {

	render() {
	  
    return (
		<div id={ this.props.phoneDisplay }><button 
			onClick={ this.props.openPopup }
			className="Phone is-animating"
			aria-label='заказать обратный звонок'></button> </div>
      	
    );
  }
}



export default PhoneButton


