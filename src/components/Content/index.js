import React from 'react';
import './style.css';
import ContactBar from '../ContactBar';
import ButtonsOnlend from '../Buttons-on-lend';
import SideBar from '../SideBar';
import About from '../About';
import ToggleBar from '../ToggleBar';

function Content() {
  return (
    <div className="row flex-fill d-flex justify-content-start">
     
        <div className="col-sm-1 toggleBar">
        <ToggleBar/>
        </div>
        <div className="col-sm">
           <SideBar>
            <div className="about">
              <About/>
              <ButtonsOnlend/>
              <div className="contacts-hidden">
                <ContactBar/>
              </div>
            </div>
          </SideBar>
        </div> 
      
      <div className="col-sm-1 contacts">
        <ContactBar/>
      </div>
      
    </div>
  );
}

export default Content;