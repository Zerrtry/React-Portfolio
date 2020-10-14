import React from 'react';
import './style.css';
import ContactBar from '../ContactBar';
import ButtonsOnlend from '../Buttons-on-lend';
import About from '../About';
import ToggleBar from '../ToggleBar';

function Content(props) {
  return (
    <div className="row flex-fill d-flex justify-content-center">
      <div className="col-sm-1half" id="rightBar">
        <div className="toggleBar">
          <ToggleBar toggleSideBar={props.toggleSideBar}/>
        </div>
      </div>
      <div className="col-sm">
        <div className="toggleBar-hidden">
          <ToggleBar toggleSideBar={props.toggleSideBar}/>
        </div>
        <div className="content-conteiner">
          <About/> 
          <div className="contacts-hidden">
            <ContactBar/>
          </div>
          <ButtonsOnlend/>
        </div>
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