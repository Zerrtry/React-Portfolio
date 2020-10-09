import React, { useState } from "react";
// import './style.css';

function ContactForm() {

    const [state, setState] = useState ({})

    handleInputChange = event => {
        event.preventDefault();
        console.log(event);
        const value = event.target.value;
        const name = event.target.name;
        console.log("**********");
        console.log(value);
        console.log(name);
        setState({
            [name]: value
        });
    };

    return (
            <div className="row">
                <div className="col-ms">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Name</label>
                            <input type="text" className="form-control"
                                id="exampleFormControlInput1"
                                onChange={handleInputChange}
                                name="name"
                                placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Subject</label>
                            <input type="text" className="form-control"
                                id="exampleInputPassword1"
                                onChange={handleInputChange}
                                name="subject"
                                placeholder="Subject of Your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1"
                                rows="6"
                                onChange={handleInputChange}
                                name="message"
                                placeholder="Please write your message here">
                            </textarea>
                        </div>
                        <div className="button-container">
                            <a type="submit" className="btn btn-primary" href={`mailto:w@w.us?subject=Message from ${props.name}: ${props.subject}&body=${props.message}`}>Mail Me</a>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default ContactForm
