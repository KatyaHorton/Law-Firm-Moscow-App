import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ServiceItemsList extends Component {

	state= {
		items: [
			{
				name: 'Сопровождение сделок',
				text: 'Организации и частные лица, всевозможные компании и индивидуальные предприниматели нередко сталкиваются с заключением различных сделок персонального или коммерческого характ...',
				classN: 'service-item-container contract',
				path: '/services/transactional'
			},
			{
				name: 'Семейные споры',
				text: 'Семейная жизнь не всегда является источником стопроцентного позитива и радости. Иногда сложности в отношениях между супругами и ближайшими родственниками доходят до серьезны...',
				classN: 'service-item-container family',
				path: '/services/family'
			},
			{
				name: 'Трудовые споры',
				text: 'Сегодня юридические услуги предоставляются достаточно большим количеством современных компаний. Данные действия могут быть направленны на решение огромного перечня всевозмож...',
				classN: 'service-item-container labour',
				path: '/services/labour'
			},
			{
				name: 'Наследственные дела',
				text: 'Наследственные дела являются одними из самых сложных в юриспруденции.  Причем по разным причинам наследникам не всегда удается получить наследство по прошествии определ...',
				classN: 'service-item-container inheritance',
				path: '/services/inheritance'
			},
			{
				name: 'Уголовное право',
				text: 'Услуги юриста по уголовным делам охватывают широкий спектр задач. Такие специалисты востребованы на всех этапах взаимодействия с представителями правоохранительных органов: ...',
				classN: 'service-item-container criminallaw',
				path: '/services/criminallaw'
			},
			{
				name: 'Защита прав потребителей',
				text: 'Сегодня проблемы, связанные с некачественными товарами и услугами, встречаются достаточно часто. Потребители, обращаясь за помощью в решении вопросов ненадлежащего качества ...',
				classN: 'service-item-container consumer',
				path: '/services/consumer'
			},
			{
				name: 'Жилищные споры',
				text: 'На сегодняшний день инвестирование в недвижимость является одним из наиболее популярных способов сохранения капитала, поэтому спрос на услуги юристов быстро растет. Сделки с...',
				classN: 'service-item-container housingdispute',
				path: '/services/housingdispute'
			},
			{
				name: 'Финансовые вопросы',
				text: 'Финансовые вопросы – это одна из основных составляющих сегодняшней жизни. Каждый день человек сталкивается с такими проблемами, как уплата налогов, пошлин, банковские вопросы и мно...',
				classN: 'service-item-container finances',
				path: '/services/finances'
			},
			{
				name: 'Возмещение ущерба',
				text: 'Возмещение ущерба, который был причинен человеку в результате деяний других лиц, является стандартной правовой практикой. Юриспруденция рассматривает понятие ущерба как итог действ...',
				classN: 'service-item-container damages',
				path: '/services/damages'
			}
		]
	}


  render() {
    return (
        <div className="services-container">
		<h2>Наши услуги</h2>
			<ul>
				{this.state.items.map((item) => (

		!this.props.showText ?

		<li key={item.path}>
						<Link to={item.path}>
						<div className={ item.classN }
							alt = ''
						>
						<div className='service-item-box'>
						<h3 className='service-item-header'>
							{item.name}
						</h3>
						</div>
						</div>
					</Link></li>
		:

				<li key={item.path}><Link to={ item.path }
						className='services-link'>
					<div className={ item.classN }
						  alt = ''>
						<div className='service-item-box'>
								<h3 className='service-item-header'>
							{item.name}
						</h3>
						</div>
						</div>
						<div className='service-item-text'>
						{ item.text }
					<span>Читать далее</span>
						</div></Link>
					</li>
				))}
			</ul>
        </div>

    );
  }
}

export default ServiceItemsList;

/*url(/static/media/contract.35f2453e.jpg);
*/
