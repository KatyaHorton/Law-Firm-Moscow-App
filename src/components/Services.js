import React, { Component } from 'react'
import ServiceItemsList from './ServiceItemsList.js'
import ServiceTransactional from './ServiceTransactional.js'
import ServiceFamilyLaw from './ServiceFamilyLaw.js'
import ServiceLabourDisputes from './ServiceLabourDisputes.js'
import ServiceInheritance from './ServiceInheritance.js'
import ServiceCriminalLaw from './ServiceCriminalLaw.js'
import ServiceConsumerRights from './ServiceConsumerRights.js'
import ServiceHousingDispute from './ServiceHousingDispute.js'
import ServiceFinances from './ServiceFinances.js'
import ServiceDamages from './ServiceDamages.js'





import { Route } from 'react-router-dom'

class Services extends Component {
	
	state
	
  render() {
    return (
        <div className="main-slide">
			
			<Route exact path='/services'
					render={() =>
					(<ServiceItemsList />
				)}/>
					 
			<Route path='/services/transactional'
					render={() =>
					(<ServiceTransactional />
				)}/>
					 
			<Route path='/services/family'
					render={() =>
					(<ServiceFamilyLaw />
				)}/>
					 
			<Route path='/services/labour'
					render={() =>
					(<ServiceLabourDisputes />
				)}/>
					 
		   <Route path='/services/inheritance'
					render={() =>
					(<ServiceInheritance />
				)}/>
					 
					 
			<Route path='/services/criminallaw'
					render={() =>
					(<ServiceCriminalLaw />
				)}/>
					 
			<Route path='/services/consumer'
					render={() =>
					(<ServiceConsumerRights />
				)}/>
					 
			<Route path='/services/housingdispute'
					render={() =>
					(<ServiceHousingDispute />
				)}/>
					 
			<Route path='/services/finances'
					render={() =>
					(<ServiceFinances />
				)}/>
					 
			<Route path='/services/damages'
					render={() =>
					(<ServiceDamages />
				)}/>
					 
		
        </div>

    );
  }
}

export default Services;
