import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button, ButtonGroup } from 'reactstrap'
import axios from 'axios'


class ContactForm extends Component {
  	
  constructor(props){
	  super(props);
	  
	  this.state = {
		  name: '',
		  phone: '',
		  message: '', 
		  name: {
			  invalid: false
		  },
		  phone: {
		  	invalid: false
		  }
		  
	  }
	  
// sets the state of the component depending on the change of the input field	  
	  this.handleChange = this.handleChange.bind(this)
	  this.handleSubmit = this.handleSubmit.bind(this)
  } 

//change state everytime input is entered in the field
 handleChange = e => {
	 this.setState({ [e.target.name]: e.target.value })
	 this.handleError(e);
 }
 
 handleError = (e) => {
	 if (e.target.value.length > 0) {
		 this.setState({
			 e: {
				 invalid: false
			 } 
		 })
	 }
 }

 async handleSubmit(e) {
	 e.preventDefault()
	 const form = await this.sendRequest()	
 }

//sends info left by th e user and closes popup window
 async sendRequest() {
	 const { name, phone, message, showForm } = this.state;
	 axios.post('/api/form', {
		  name, 
		  phone,
		  message
	 }) 
	 const closePopup = await this.closeWithDelay()
 }
 
//close form with delay
	closeWithDelay = () => {
		setTimeout(this.props.toggleForm, 2000)
	}
	
	invalidName = () => {
		 this.setState({
			 name: {
				 invalid: true
			 } 
		 })
	}
	
	invalidPhone = () => {
		 this.setState({
			 phone: {
				 invalid: true
			 } 
		 })
	}

  render() {
    return (
        
          <div>
		
			<h2>Записаться на бесплатную юридическую консультацию</h2>
			<Form onSubmit = { this.handleSubmit } >
				<FormGroup>
					<Label for='name'>Имя</Label>
					{this.state.name.invalid && 
					<p className='input-error'>Поле "Имя" обязательно  для заполнения</p>}
					<Input
						type='text'
						name='name'
						required
						onChange={ this.handleChange } 
						onInvalid = { this.invalidName }
					/>
		
				</FormGroup>
				<FormGroup>
					<Label for='phone'>Телефон</Label>
					{this.state.phone.invalid &&
					<p className='input-error'>Поле "Телефон" обязательно  для заполнения</p>}
					<Input
						type='tel'
						name='phone'
						required
						onChange={ this.handleChange } 
						placeholder = '+7 (___)  ___ - __ - __'
						onInvalid = { this.invalidPhone }
					/>
				</FormGroup>
				<FormGroup>
					<Label for='message'>Сообщение</Label>
					<Input
						type='textarea'
						name='message'
						onChange={ this.handleChange } 
					/>
				</FormGroup>
			<ButtonGroup>
				<Button>
					 Отправить запрос
				</Button>
			</ButtonGroup>
			</Form>

			</div>
    );
  }
}

export default ContactForm;

