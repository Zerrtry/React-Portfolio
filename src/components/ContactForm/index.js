import React, { useState } from "react";
import ContactBar from '../ContactBar';
import { Link } from "react-router-dom";
import './style.css';

function ContactForm(props) {

    const [state, setState] = useState({})

    const handleInputChange = event => {
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
        <div className="row flex-fill d-flex justify-content-center">
            <div className="col-sm-1 toggleBar">
                <div className="back-button">
                    <Link to="/">
                        <a className="github" title="Back">
                            <i class="fas fa-arrow-circle-left"></i>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="col-sm">
                <div className="content-conteiner">
                    <form>
                        <div className="form-group">
                            <div className="main-text">Thanks for taking the time to reach out.</div>
                        </div>
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
                            <a type="submit" className="main-button" href={`mailto:dmitrii.zverev.us@gmail.com?subject=Message from ${state.name}: ${state.subject}&body=${state.message}`}>MAIL ME</a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-sm-1 contacts">
                <ContactBar/>
            </div>
        </div>
    );
}

export default ContactForm
