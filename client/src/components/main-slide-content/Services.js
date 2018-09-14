import React, { Component } from 'react'
import ServiceItemsList from './services/ServiceItemsList.js'
import ServiceTransactional from './services/ServiceTransactional.js'
import ServiceFamilyLaw from './services/ServiceFamilyLaw.js'
import ServiceLabourDisputes from './services/ServiceLabourDisputes.js'
import ServiceInheritance from './services/ServiceInheritance.js'
import ServiceCriminalLaw from './services/ServiceCriminalLaw.js'
import ServiceConsumerRights from './services/ServiceConsumerRights.js'
import ServiceHousingDispute from './services/ServiceHousingDispute.js'
import ServiceFinances from './services/ServiceFinances.js'
import ServiceDamages from './services/ServiceDamages.js'
import { Route } from 'react-router-dom'

class Services extends Component {
	
	
  render() {
    return (
        <div className="main-slide">
			
			<Route exact path='/services'
					render={() =>
					(<ServiceItemsList showText = { true }/>
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
