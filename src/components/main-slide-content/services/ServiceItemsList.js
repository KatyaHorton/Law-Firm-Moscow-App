import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

class ServiceItemsList extends Component {
	
	state= {
		items: [
			{
				name: 'Сопровождение сделок',
				text: 'Организации и частные лица, всевозможные компании и индивидуальные предприниматели нередко сталкиваются с заключением различных сделок персонального или коммерческого характ...',
				icon: 'icon1',
				path: '/services/transactional'
			},
			{
				name: 'Семейные споры',
				text: 'Семейная жизнь не всегда является источником стопроцентного позитива и радости. Иногда сложности в отношениях между супругами и ближайшими родственниками доходят до серьезны...',
				icon: 'icon2',
				path: '/services/family'
			},
			{
				name: 'Трудовые споры',
				text: 'Сегодня юридические услуги предоставляются достаточно большим количеством современных компаний. Данные действия могут быть направленны на решение огромного перечня всевозмож...',
				icon: 'icon3',
				path: '/services/labour'
			},
			{
				name: 'Наследственные дела',
				text: 'Наследственные дела являются одними из самых сложных в юриспруденции.  Причем по разным причинам наследникам не всегда удается получить наследство по прошествии определ...',
				icon: 'icon3',
				path: '/services/inheritance'
			},
			{
				name: 'Уголовное право',
				text: 'Услуги юриста по уголовным делам охватывают широкий спектр задач. Такие специалисты востребованы на всех этапах взаимодействия с представителями правоохранительных органов: ...',
				icon: 'icon3',
				path: '/services/criminallaw'
			},
			{
				name: 'Защита прав потребителей',
				text: 'Сегодня проблемы, связанные с некачественными товарами и услугами, встречаются достаточно часто. Потребители, обращаясь за помощью в решении вопросов ненадлежащего качества ...',
				icon: 'icon3',
				path: '/services/consumer'
			},
			{
				name: 'Жилищные споры',
				text: 'На сегодняшний день инвестирование в недвижимость является одним из наиболее популярных способов сохранения капитала, поэтому спрос на услуги юристов быстро растет. Сделки с...',
				icon: 'icon3',
				path: '/services/housingdispute'				
			},
			{
				name: 'Финансовые вопросы',
				text: 'Финансовые вопросы – это одна из основных составляющих сегодняшней жизни. Каждый день человек сталкивается с такими проблемами, как уплата налогов, пошлин, банковские вопросы и мно...',
				icon: 'icon3',
				path: '/services/finances'
			},
			{
				name: 'Возмещение ущерба',
				text: 'Возмещение ущерба, который был причинен человеку в результате деяний других лиц, является стандартной правовой практикой. Юриспруденция рассматривает понятие ущерба как итог действ...',
				icon: 'icon3',
				path: '/services/damages'
			}
		]
	}
	
	
  render() {
    return (
        <div className="items-container">
			<ul className='items-container-ul' >
				{this.state.items.map((item) => (
					<li >
						<div className='item-icon'>{item.icon}</div>
						<h2 className='item-header'>
							{item.name} 
						</h2>
						<div className='item-text'>
							{item.text} <br />
							<Link to={item.path}>Читать далее</Link>
						</div>
					</li>
				))}
			</ul>
        </div>

    );
  }
}

export default ServiceItemsList;