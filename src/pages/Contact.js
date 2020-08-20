import React, {Component} from "react";

class Contact extends Component {
    state = {
      name: "",
      subject: "",
      message: ""
    };

    handleInputChange = event => {
        event.preventDefault();
        console.log(event);
        const value = event.target.value;
        const name = event.target.name;
        console.log("**********");
        console.log(value);
        console.log(name);
        this.setState({
          [name]: value
        });
    };

    render () {
        return (
            <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>

                <label className="message-name" htmlFor="message-name">Your Name</label>
                <input onChange={this.handleInputChange} 
                       name="name" 
                       className="message-name" 
                       type="text" 
                       placeholder="Your Name"/>

                <label className="message-subject" htmlFor="message-subject">Subject of Your Email</label>
                <input onChange={this.handleInputChange} 
                       name="subject" 
                       className="message-subject" 
                       type="text" 
                       placeholder="Subject of Your Email"/>

                <label className="message" htmlFor="message-input">Your Message</label>
                <textarea onChange={this.handleInputChange} 
                       name="message" 
                       className="message-input" 
                       type="text" 
                       placeholder="Please write your message here"/>

                <div className="button-container">
                    <a type="submit" className="button button-primary" href={`mailto:w@w.us?subject=${this.state.subject}&body=${this.state.message}`}>Mail Me</a>
                </div>
            </form>
        );
    };
}

export default Contact