import React, { useState } from "react";
import ContactBar from '../ContactBar';
import Button from '../Button';
import { Link } from "react-router-dom";
import './style.css';

function ContactForm() {
   
    const [state, setState] = useState({})
    const handleInputChange = event => {
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
        setState({...state, [name]: value});
    };

    return (
        <div className="row flex-fill d-flex justify-content-center">
            <div className="col-sm-1half">
                <div className="toggleBar">
                    <div className="back-button-container">
                        <Link to="/" title="Home">
                            <div className="github" >
                                <i className="fas fa-arrow-circle-left"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="content-conteiner">
                    <form>
                        <div className="form-group">
                            <div className="main-text">Thanks for taking the time to reach out.</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Subject</label>
                            <input 
                                type="text" 
                                className="form-control"
                                onChange={handleInputChange}
                                name="subject"
                                placeholder="Subject of Your Email" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea 
                                className="form-control"
                                rows="6"
                                onChange={handleInputChange}
                                name="message"
                                placeholder="Please write your message here" 
                            />
                        </div>
                        <div className="mail-button-container">
                            <a 
                                href={`mailto:dmitrii.zverev.us@gmail.com?subject=Portfolio: ${state.subject}&body=${state.message}`}>
                                <Button>
                                   MAIL ME 
                                </Button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-sm-1half">
                <div className="contacts">
                    <ContactBar/>
                </div>      
            </div>
        </div>
    );
}

export default ContactForm
