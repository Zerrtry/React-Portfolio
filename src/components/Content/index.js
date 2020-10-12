import React from 'react';
import './style.css';
import ContactBar from '../ContactBar';
import ButtonsOnlend from '../Buttons-on-lend';
import About from '../About';
import ToggleBar from '../ToggleBar';
// import ContactForm from '../ContactForm';

// import { BrowserRouter as Router, Route } from "react-router-dom";

function Content(props) {
  return (
    <div className="row flex-fill d-flex justify-content-center">
      <div className="col-sm-1 toggleBar">
        <ToggleBar toggleSideBar={props.toggleSideBar}/>
      </div>
      <div className="col-sm">
        {/* <Router> */}
          <div className="content-conteiner">
            {/* <Route 
              exact path ="/"
              component = {About, ButtonsOnlend}
            />
            <Route 
              exact path ="contact"
              component = {ContactForm}
            /> */}
            <About/>
            <ButtonsOnlend/>
            <div className="contacts-hidden">
              <ContactBar/>
            </div>
          </div>
        {/* </Router> */}
      </div>
      <div className="col-sm-1 contacts">
        <ContactBar/>
      </div>
    </div>
  );
}

export default Content;