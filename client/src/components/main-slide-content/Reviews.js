import React, { Component } from 'react'

class Reviews extends Component {



state= {
		allItems: [
			{
				name: 'Генеральный директор Авдонин С.В.',
				text: '  Общество с ограниченной ответственностью "Оценка и право" выражает слова искренней благодарности компании ООО «Правовая коллегия» за успешное завершение работы по оспариванию кадастровой стоимости земельного участка. Желаем вашей компании дальнейших успехов в работе, экономической стабильности, уверенности в своих силах.',
				imageSmall: require('../images/reviews/review1_small.JPG'),
				imageBig: require('../images/reviews/review1.JPG'),
				date: '01.09.2017',
				showBigImage: false,
				id: 1
				
			},
			{
				name: '  Генеральный директор ООО «Авто Альянс» Прокопчук А.Н.',
				text: 'Выражаем благодарность фирме «Правовая коллегия» за эффективную работу и надеемся на дальнейшее успешное сотрудничество. Специалисты компании продемонстрировали отличное знание права и умение применять новые прогрессивные технологии.',
				imageSmall: require('../images/reviews/review2_small.JPG'),
				imageBig: require('../images/reviews/review2.JPG'),
				date: '10.02.2017',
				showBigImage: false,
				id: 2
			},
			{
				name: 'С уважением, Гришина Наталья Витальевна',
				text: '  Выражаю благодарность Александре Александровне Бойченко за добросовестное исполнение профессиональных обязанностей по защите прав, свобод и законных интересов граждан. Считаю большой удачей, что в своё время обратился именно к Вам!',
				imageSmall: require('../images/reviews/review3_small.JPG'),
				imageBig: require('../images/reviews/review3.JPG'),
				date: '08.02.2017',
				showBigImage: false,
				id: 3
			},
			{
				name: 'Сопровождение сделок',
				text: '  Огромное спасибо! За добросовестный труд, формирование высокой правовой культуры и в связи с профессиональным праздником «Днем юриста».',
				imageSmall: require('../images/reviews/review4_small.JPG'),
				imageBig: require('../images/reviews/review4.JPG'),
				date: '15.12.2016',
				showBigImage: false,
				id: 4
			},
			{
				name: 'А.В. Музюкин',
				text: '  Организации и частные лица, всевозможные компании и индивидуальные предприниматели нередко сталкиваются с заключением различных сделок персонального или коммерческого характ...',
				imageSmall: require('../images/reviews/review5_small.JPG'),
				imageBig: require('../images/reviews/review5.JPG'),
				date: '03.12.2016',
				showBigImage: false,
				id: 5
			},
			{
				name: 'Генеральный директор ООО «Мед-Фарма» Зыбин С.Т.',
				text: '  Уважаемый Алексей Валентинович! Благодарим Вас за оказанную юридическую помощь в разрешении нашего коммерческого спора в досудебном порядке. Отметим Вашу квалифицированность и профессиональную компетентность, внимательность, аккуратность при оформлении документов. Хотелось бы продолжить взаимовыгодные и партнерские отношения и пожелать Вам успехов на профессиональном поприще.',
				imageSmall: require('../images/reviews/review6_small.JPG'),
				imageBig: require('../images/reviews/review6.JPG'),
				date: '28.11.2016',
				showBigImage: false,
				id: 6
			},
			{
				name: 'Сорокин Александр Петрович',
				text: '  Благодарю сотрудников за успешное решение моего жилищного вопроса. Вы показали действительно высокий профессиональный уровень.',
				imageSmall: require('../images/reviews/review7_small.JPG'),
				imageBig: require('../images/reviews/review7.JPG'),
				date: '28.09.2016',
				showBigImage: false,
				id: 7
			},
			{
				name: 'С уважением, Егоров К.М.',
				text: '  ООО «Консалтинг» выражает благодарность адвокату ООО «Правовая коллегия» Смирнову Илье Сергеевичу за долговременное сотрудничество в сфере оказания правовых услуг. Желаю вам успехов в дальнейшем профессиональной деятельности, надеемся на продолжение нашего сотрудничества.',
				imageSmall: require('../images/reviews/review8_small.JPG'),
				imageBig: require('../images/reviews/review8.JPG'),
				date: '04.05.2016',
				showBigImage: false,
				id: 8
			},
			{
				name: 'С уважением, индивидуальный предприниматель Фадеев Никита Олегович',
				text: '  Уважаемый Сергей Борисович, благодарю лично Вас, а также сотрудников компании за профессионализм и индивидуальный подход в решении моего вопроса. Вы по праву заслужили звание надежного защитника. Желаю успехов и дальнейшего развития деятельности.',
				imageSmall: require('../images/reviews/review9_small.JPG'),
				imageBig: require('../images/reviews/review9.JPG'),
				date: '04.02.2015',
				showBigImage: false,
				id: 9
			}
		]
	}	


	
handleSelect(i) {
    //Get Genres
    let items = this.state.allItems;
      items = items.map((val, index) => {
      val.showBigImage = index === i;
      return val;
    });
    //Set State
    this.setState({
      allItems: items
    })
  }

	
/*	onClick={(event) => this.props.handleChildClickEvent(event, location.location, location.id)}*/
	
  render() {
	  
	  const {allItems} = this.state;

	  
	  
    return (
        <div className="reviews-container">
			<ul className='review-container-ul' >
				{ allItems.map((item, i) => (
					<li className='review-div'>
						<button className='review-image-div'
								onClick = { this.handleSelect.bind(this, i)}
						>
							<img  className='review-image-small' src = { item.imageSmall } id={ item.date } />
						</button>
		{item.showBigImage  &&  <div className='big-review-image-container'>
			<img className='review-image-big' src = { item.imageBig } id={ item.date }/></div>}
						<p className='review-text'>
							{item.text} <br />
						</p>
						<p className='review-name'>
							{item.name} 
						</p>
						<p className='review-date'>
							{item.date} 
						</p>	
		
		
				
					</li>
				))}
			</ul>
        </div>

    );
  }
}



export default Reviews;
