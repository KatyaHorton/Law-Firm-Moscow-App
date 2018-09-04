import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PracticeItemsList from './practice/PracticeItemsList.js' 
import PracticeTransactional from './practice/PracticeTransactional.js'
import PracticeFamilyLaw from './practice/PracticeFamilyLaw.js'
import PracticeLabourDisputes from './practice/PracticeLabourDisputes.js'
import PracticeInheritance from './practice/PracticeInheritance.js'
import PracticeCriminalLaw from './practice/PracticeCriminalLaw.js'
import PracticeConsumerRights from './practice/PracticeConsumerRights.js'
import PracticeHousingDispute from './practice/PracticeHousingDispute.js'
import PracticeFinances from './practice/PracticeFinances.js'
import PracticeDamages from './practice/PracticeDamages.js'


class Practice extends Component {
  render() {
    return (
        <div className="main-slide">
    		
			 <Route exact path='/practice'
					render={() =>
					(<PracticeItemsList />
				)}/>

					 
			<Route path='/practice/transactional'
					render={() =>
					(<PracticeTransactional />
				)}/>
					 
			<Route path='/practice/family'
					render={() =>
					(<PracticeFamilyLaw />
				)}/>
					 
			<Route path='/practice/labour'
					render={() =>
					(<PracticeLabourDisputes />
				)}/>
					 
		   <Route path='/practice/inheritance'
					render={() =>
					(<PracticeInheritance />
				)}/>
					 
					 
			<Route path='/practice/criminallaw'
					render={() =>
					(<PracticeCriminalLaw />
				)}/>
					 
			<Route path='/practice/consumer'
					render={() =>
					(<PracticeConsumerRights />
				)}/>
					 
			<Route path='/practice/housingdispute'
					render={() =>
					(<PracticeHousingDispute />
				)}/>
					 
			<Route path='/practice/finances'
					render={() =>
					(<PracticeFinances />
				)}/>
					 
			<Route path='/practice/damages'
					render={() =>
					(<PracticeDamages /> 
				)}/>
        </div>

    );
  }
}

export default Practice;
