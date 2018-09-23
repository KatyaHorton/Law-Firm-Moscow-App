import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

class PracticeFamilyLaw extends Component {
	
  render() {
    return (
        <div className="item-container">
			<div></div>
			<h2>Где будет жить ребёнок после развода родителей?</h2>
			<p>
				В "Правовую коллегию" за помощью обратилась молодая женщина. Она рассказала, что у неё есть сын от мужчины, с которым в настоящее время она уже находится в разводе. Бывшие супруги проживают раздельно. Развод был достаточно мирным, экс-супруги общались между собой и процесс воспитания ребенка был согласован. Но однажды отец ребёнка забрал сына погулять и исчез с ним. После чего он перестал отвечать на телефонные звонки, объяснив своё поведение в письме, которое прислал бывшей жене по электронной почте. В нём женщина была поставлена перед фактом: сына она больше не увидит, дальнейшее общение с ним для неё нецелесообразно, т.к. мальчик не хочет её видеть. Заявление в полицию не дало результатов.</p>
<p>Наши юристы предложили женщине инициировать иск в суд для определения места жительства ребенка и взыскать алименты. Потребовалось не одно заседание, чтобы доказать, что 3-х летний ребенок не может проживать отдельно от своей матери. Также потребовались заключения органов опеки, судебно-психологическая экспертиза и другие необходимые юридические доказательства и свидетельства.</p>
<p>Суд полностью удовлетворил требования нашей доверительницы. Рассмотрев апелляционную жалобу бывшего супруга, решение суда первой инстанции было оставлено без изменения.</p>
		
		<p><Link to='.'>Возврат к списку</Link></p>	
        </div>

    );
  }
}

export default PracticeFamilyLaw;
