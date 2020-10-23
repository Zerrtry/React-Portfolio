import React, { useState } from "react";
import ContactBar from '../ContactBar';
import Button from '../Button';
import { Link } from "react-router-dom";
import './style.css';
import {useLanguage} from '../../utils/LngContext'

function ContactForm() {
    const activeLanguage = useLanguage()
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
                        <Link to="/" title={activeLanguage.Home}>
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
                            <div className="main-text">{activeLanguage.grettingContact} </div>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control"
                                onChange={handleInputChange}
                                name="subject"
                                placeholder={activeLanguage.subject} 
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                className="form-control"
                                rows="6"
                                onChange={handleInputChange}
                                name="message"
                                placeholder={activeLanguage.message} 
                            />
                        </div>
                        <div className="mail-button-container">
                            <a 
                                href={`mailto:dmitrii.zverev.us@gmail.com?subject=Portfolio: ${state.subject}&body=${state.message}`}>
                                <Button>
                                    {activeLanguage.mailMe} 
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
