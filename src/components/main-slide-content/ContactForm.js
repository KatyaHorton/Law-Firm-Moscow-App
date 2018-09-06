import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'


class ContactForm extends Component {
  	
  constructor(){
	  super();
	  
	  this.state = {
		  name: '',
		  email: '', 
		  message: ''
	  }
	  
// sets the state of the component depending on the change of the input field	  
	  this.handleChange = this.handleChange.bind(this)	
  } 

//change state everytime input is entered in the field
 handleChange = e => {
	 this.setState({ [e.target.name]: e.target.value }) 
 }
 
 handleSubmit(e) {
	 e.preventDefault()
	 
	 const { name, email, message } = this.state;
 }
	
  render() {
    return (
        
          <div id="main-slide-div">
			<h2>Записаться на бесплатную юридическую консультацию</h2>
			<Form onSubmit = { this.handleSubmit } >
				<FormGroup>
					<Label for='name'>Name</Label>
					<Input
						type='text'
						name='name'
						onChange={ this.handleChange } 
					/>
				</FormGroup>
				<FormGroup>
					<Label for='email'>Email</Label>
					<Input
						type='text'
						name='email'
						onChange={ this.handleChange } 
					/>
				</FormGroup>
				<FormGroup>
					<Label for='message'>Message</Label>
					<Input
						type='textarea'
						name='message'
						onChange={ this.handleChange } 
					/>
				</FormGroup>
		
				<Button>
					Submit
				</Button>
			</Form>
			</div>
    );
  }
}

export default ContactForm;

