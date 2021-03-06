import React, { Component } from 'react'

class Cooperation extends Component {
	
state  = {
	items: [
		{
			image: require('../images/cooperation/prosecution.png'),
			text: 'Генеральная Прокуратура Российской Федерации'
		},
		{
			image: require('../images/cooperation/taxes.png'),
			text: 'Федеральная Налоговая служба'
		},
		{
			image: require('../images/cooperation/bank.png'),
			text: 'Центральный банк Российской Федерации'
		},
		{
			image: require('../images/cooperation/rights.jpg'),
			text: 'Федеральная служба по надзору в сфере защиты прав потребителей и благополучия человека'
		},
		{
			image: require('../images/cooperation/court.jpg'),
			text: 'Федеральная служба судебных приставов'
		},
		{
			image: require('../images/cooperation/courts.png'),
			text: 'Арбитражные суды'
		}
	]
}	
	
//{this.state.items[0].image} 
  render() {
	  

	  
    return (
        <div className="coop-container">
			<h2>Сотрудничество</h2>
		<div className="coop-container-wrapper">
			{this.state.items.map((item) => (
			<div key={ item.text }>
			
				<img 
			src={ item.image } alt=''/>
			
			<p>
				{ item.text }
			</p>
			</div>	
			))}
		</div>
        </div>

    );
  }
}

export default Cooperation;
