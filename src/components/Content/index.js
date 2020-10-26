import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './style.css';
import ToggleBar from '../ToggleBar';
import About from '../../Pages/About';
import ContactBar from '../ContactBar';
import ButtonsOnlend from '../Buttons-on-lend';
import ContactForm from '../../Pages/ContactForm'
import Projects from '../../Pages/Projects'

function Content() {
  return (
    <div className="row flex-fill d-flex justify-content-center" >
      <div className="col-sm-1half" id="rightBar">
        <div className="toggleBar">
           {/* <ToggleBar toggleSideBar={props.toggleSideBar}/> */}
        </div>
      </div>
      <div className="col-sm">
        {/* <div className="toggleBar-hidden">
          <ToggleBar toggleSideBar={props.toggleSideBar}/>
        </div> */}
        <Route
          exact path="/contact"
          component={ContactForm}/>
        <Route 
          exact path="/"
          component={About}/>
        {/* <div className="content-conteiner">
          <About/> 
          <div className="contacts-hidden">
            <ContactBar/>
          </div>
          <ButtonsOnlend/>
        </div> */}
        <Route 
          exact path="/projects"
          component={Projects}/>
      </div>
      <div className="col-sm-1half" id="leftBar">
        <div className="contacts">
          <ContactBar/>
        </div>  
      </div>
    </div>
  );
}

export default Content;