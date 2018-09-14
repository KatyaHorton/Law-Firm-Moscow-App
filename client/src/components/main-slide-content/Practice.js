import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PracticeItemsList from './practice/PracticeItemsList.js' 
import PracticeFamily from './practice/PracticeFamily.js'
import PracticeFamilyLaw from './practice/PracticeFamilyLaw.js'
import PracticeLabourDisputes from './practice/PracticeLabourDisputes.js'
import PracticeInheritance from './practice/PracticeInheritance.js'
import PracticeCriminalLaw from './practice/PracticeCriminalLaw.js'
import PracticeConsumerRights from './practice/PracticeConsumerRights.js'
import PracticeHousingDispute from './practice/PracticeHousingDispute.js'
import PracticeInheritanceLaw from './practice/PracticeInheritanceLaw.js'
import PracticeDamages from './practice/PracticeDamages.js'


class Practice extends Component {
  render() {
    return (
        <div className="main-slide">
    		
			 <Route exact path='/practice'
					render={() =>
					(<PracticeItemsList sliceStart = { 0 }
										sliceEnd = { 9 } />
				)}/>

					 
			<Route path='/practice/family'
					render={() =>
					(<PracticeFamily />
				)}/>
					 
			<Route path='/practice/family-law'
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
					 
			<Route path='/practice/inheritance-law'
					render={() =>
					(<PracticeInheritanceLaw />
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
