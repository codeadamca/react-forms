import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
      
      super(props);

      this.state = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
  
    handleInputChange(event) {
      
      const target = event.target;
      const value = target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });

    }

    handleSubmit( event ) {

      event.preventDefault();
      console.log(this.state);

    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Subject:
            <select 
              name="subject" 
              value={this.state.value} 
              onChange={this.handleInputChange}>
              <option></option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
            </select>
          </label>
          <br />
          <label>
            Message:
            <textarea
              name="message"
              value={this.state.value}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <input 
            type="submit"
            value="Submit" />
        </form>
      );
    }
  }

export default ContactForm;
