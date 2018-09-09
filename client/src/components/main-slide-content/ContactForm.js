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
		  
	  }
	 
	 
// sets the state of the component depending on the change of the input field	  
	  this.handleChange = this.handleChange.bind(this)
	  this.handleSubmit = this.handleSubmit.bind(this)
	  
  } 


//change state everytime input is entered in the field
 handleChange = e => {
	 this.setState({ [e.target.name]: e.target.value })
 }
 
 
 togglePopup = () => {
	 this.props.togglePopup
 }


 function1 = () => {
	 const { name, phone, message, showForm } = this.state;
	 axios.post('/api/form', {
		  name, 
		  phone,
		  message
	 })
 }
 
 
 
 async handleSubmit(e) {
	 e.preventDefault()
	 
	 const form = await this.function1()
	
 }
	
  render() {
	  
	  {console.log('Closepopup CONTACTS:')}
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

