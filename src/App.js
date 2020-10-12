import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Fonts.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import ContactForm from './components/ContactForm';

function App() {

  const [toggleState, setToggleState] = useState (false)
  
  const toggleSideBarState = ()=>{
    console.log("toggleSideBarShowed")
    setToggleState(!toggleState)
  }

  return (
    <Router>
      
        <SideBar toggleState={toggleState}>
            <Header/>
            {/* <Content toggleSideBar={toggleSideBarState}/> */}
            <Route 
              exact path="/"
              render={(props) => (
                <Content {...props} toggleSideBar={toggleSideBarState}/>
              )}
            />
            <Route 
              exact path="/contact"
              component = {ContactForm}
                // <ContactForm {...props} toggleSideBar={toggleSideBarState}
            />
              {/* )} 
            /> */}
            <Footer/>
        </SideBar>
      
    </Router>
  );
}

export default App;
