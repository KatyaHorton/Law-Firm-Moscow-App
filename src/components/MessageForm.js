import React, { Component } from 'react'

class MessageForm extends Component {
  render() {
    return (
      <div className='message-form'>
        <div className='message-form_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}




export default MessageForm


