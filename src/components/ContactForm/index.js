import React from "react"

function ContactForm (props) {
    return ( 
        <form>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input type="text" className="form-control" 
                    id="exampleFormControlInput1" 
                    onChange={props.inputFunction} 
                    name="name"
                    placeholder="Your Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Subject</label>
                <input type="text" className="form-control" 
                    id="exampleInputPassword1"
                    onChange={props.inputFunction} 
                    name="subject" 
                    placeholder="Subject of Your Email"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" 
                    rows="6"
                    onChange={props.inputFunction} 
                    name="message" 
                    placeholder="Please write your message here">
                </textarea>
            </div>

   
            <div className="button-container">
                <a type="submit" className="btn btn-primary" href={`mailto:w@w.us?subject=Message from ${props.name}: ${props.subject}&body=${props.message}`}>Mail Me</a>
            </div> 
        </form>
        )
    }
export default ContactForm