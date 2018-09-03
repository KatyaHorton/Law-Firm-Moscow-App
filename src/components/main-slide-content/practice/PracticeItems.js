import React, { Component } from 'react'


class PracticeItems extends Component {
	
	state= {
		items: [
			{
				name: 'Practice 1',
				text: 'blablabla',
				icon: 'icon1',
				link: 'link1'
			},
			{
				name: 'Practice 2',
				text: 'blablabla',
				icon: 'icon2',
				link: 'link2'
			},
			{
				name: 'Practice 3',
				text: 'blablabla',
				icon: 'icon3',
				link: 'link3'
			},
			{
				name: 'Practice 4',
				text: 'blablabla',
				icon: 'icon3',
				link: 'link3'
			},
			{
				name: 'Practice 7',
				text: 'blablabla',
				icon: 'icon3',
				link: 'link3'
			},
			{
				name: 'Practice 6',
				text: 'blablabla',
				icon: 'icon3',
				link: 'link3'
			}
		]
	}
	
  render() {
    return (
        <div className="items-container">
			<ul>
				{this.state.items.map((item) => (
					<li>
						<h2 className='item-header'>
							{item.name} 
							<span> {item.icon}</span>
						</h2>
						<div className='item-text'>
							{item.text}
							<a href={item.link}>For more info</a>
						</div>
					</li>
				))}
			</ul>
        </div>

    );
  }
}

export default PracticeItems;
