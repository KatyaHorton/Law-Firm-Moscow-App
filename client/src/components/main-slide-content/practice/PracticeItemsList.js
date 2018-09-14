import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

class PracticeItemsList extends Component {
	
	
	state= {
		items: [
			{
				name: 'Завещание недействительно?',
				text: 'Наследница по закону против наследницы по завещанию.',
				path: '/practice/inheritance'
			},
			{
				name: 'Некачественный товар',
				text: 'Защита прав потребителя в суде.',
				path: '/practice/consumer'
			},
			{
				name: 'Где будет жить ребёнок после развода родителей?',
				text: 'Юристы "Правовой коллегии" помогли вернуть женщине сына.',
				path: '/practice/family-law'
			},
			{
				name: 'Автоледи жмёт на газ',
				text: 'О возмещении ущерба после ДТП.',
				path: '/practice/damages'
			},
			{
				name: 'Наследница по закону',
				text: 'Возможно ли восстановить наследственные права?',
				path: '/practice/inheritance-law'
			},
			{
				name: 'Восстановление нарушенных прав при увольнении',
				text: 'Наши юристы помогли получить компенсационные выплаты.',
				path: '/practice/labour'
			},
			{
				name: 'Сотрудник-преступник',
				text: 'В наш центр обратился предприниматель, у которого личный водитель оказался нечистым на руку.',
				path: '/practice/criminallaw'
			},
			{
				name: 'Возможность семейного захоронения',
				text: 'В "Правовую коллегию" обратилась женщина 79 лет с необычной просьбой.',
				path: '/practice/family'
			},
			{
				name: 'Недобросовестные квартиросъёмщики',
				text: 'Последствия сдачи квартиры в найм.',
				path: '/practice/housingdispute'				
			}
		]
	}
	
  render() {
    return (
        <div className="items-container">
			<ul className='items-container-ul' >
				{this.state.items
				.slice(this.props.sliceStart, this.props.sliceEnd).map((item) => (
					<li >
						<div className='item-icon'>{item.icon}</div>
						<h2 className='item-header'>
							{item.name} 
						</h2>
						<div className='item-text'>
							{item.text} <br />
							<Link to={item.path}>Подробнее</Link>
						</div>
					</li>
				))}
			</ul>
        </div>

    );
  }
}

export default PracticeItemsList;
