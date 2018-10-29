import React, { Component } from 'react'
import  ServiceItemsList from './services/ServiceItemsList.js'
import PracticeItemsList from './practice/PracticeItemsList.js'
import Us from './Us.js'
import Cooperation from './Cooperation.js'


class MainPage extends Component {
  render() {
    return (
        <div className="main-slide" id='main-page'>
	<div id='upper-wrap'>
          <div id="main-slide-title"
				alt=''>
			<div id="main-slide-title-div">
			  <p>ЗАКОН И ПРАВО</p>
			  <h1>БЕСПЛАТНАЯ ЮРИДИЧЕСКАЯ КОНСУЛЬТАЦИЯ</h1>
        <h1 id='main-phone'><a href='tel:+7-995-502-55-55'>+7-995-502-55-55</a></h1>
        <p>звонок бесплатный</p>
			</div>
						<button id='main-button'
								onClick={this.props.openPopup}>Записаться на бесплатную консультацию
						</button>
			</div>

		<Us />
		</div>

		<ServiceItemsList showText = { false } />

		<div id='advantages-wrapper'>
		<h2>Наши преимущества</h2>
		<div id='advantages-wrapper-div'>
			<div><img className='advantage-image' alt='' src={require('../images/diploma.svg')}/>
			<p>Опытные юристы</p>
			</div>
			<div><img className='advantage-image' alt='' src={require('../images/wallet.svg')}/>
			<p>Доступные цены</p>
			</div>
            <div><img className='advantage-image' alt='' src={require('../images/auction.svg')}/>
			<p>Не ведем заведомо проигрышные дела</p>
			</div>
            <div><img className='advantage-image' alt='' src={require('../images/employee.svg')}/>
			<p>Работаем как с физическими, так и с юридическими лицами</p>
			</div>
            <div id='last-advantages-div'><img className='advantage-image' alt='' src={require('../images/shopping.svg')}/>
			<p>Оказываем юридические услуги различного характера</p>
			</div>
		</div>
		</div>

		<Cooperation />

		<PracticeItemsList  sliceStart = { 0 }
							sliceEnd = { 3 }   />

        </div>

    );
  }
}

export default MainPage;
