import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'


class ContactForm extends Component {
	
  render() {
    return (
        
          <div id="main-slide-div">
			<h2>Записаться на бесплатную юридическую консультацию</h2>
			<Form>
				<FormGroup>
					<Label for='name'>Name</Label>
					<Input
						type='text'
						name='name'
						onChange={ this.handleChange } 
					/>
				</FormGroup>
				<FormGroup>
					<Label for='phone'>Phone</Label>
					<Input
						type='tel'
						name='phone'
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

