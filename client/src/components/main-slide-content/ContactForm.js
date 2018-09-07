import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import axios from 'axios'


class ContactForm extends Component {
  	
  constructor(){
	  super();
	  
	  this.state = {
		  name: '',
		  phone: '',
		  message: ''
	  }
	  
// sets the state of the component depending on the change of the input field	  
	  this.handleChange = this.handleChange.bind(this)
	  this.handleSubmit = this.handleSubmit.bind(this)
  } 

//change state everytime input is entered in the field
 handleChange = e => {
	 this.setState({ [e.target.name]: e.target.value }) 
 }
 
 async handleSubmit(e) {
	 e.preventDefault()
	 
	 const { name, phone, message } = this.state;
	 
	 const form = await axios.post('/api/form', {
		  name, 
		  phone,
		  message 
	 })
 }
	
  render() {
    return (
        
          <div>
			<h2>Записаться на бесплатную юридическую консультацию</h2>
			<Form onSubmit = { this.handleSubmit } >
				<FormGroup>
					<Label for='name'>Имя</Label>
					<Input
						type='text'
						name='name'
						onChange={ this.handleChange } 
					/>
				</FormGroup>
				<FormGroup>
					<Label for='phone'>Телефон</Label>
					<Input
						type='tel'
						name='phone'
						onChange={ this.handleChange } 
						placeholder = '+7 (___)  ___ - __ - __'
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
		
				<Button 
					onClick={this.props.closePopupLater}
				>
					 Отправить запрос
				</Button>
			</Form>
			</div>
    );
  }
}

export default ContactForm;

