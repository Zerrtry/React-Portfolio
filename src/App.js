import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Fonts.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import ContactForm from './components/ContactForm';
import ScrollToTop from './components/ScrollToTop';
import { LngProvider } from './utils/LngContext/languageProvider'


function App() {

  const [sideBarState, setSideBarState] = useState(false)

  const toggleSideBarState = () => {
    console.log("toggleSideBarShowed")
    setSideBarState(!sideBarState)
  }

  return (

    <LngProvider>
      <Router>
        <ScrollToTop />
        <SideBar toggleState={sideBarState}>
          <Header />
          <Route
            exact path="/"
            render={(props) => (
              <Content {...props} toggleSideBar={toggleSideBarState}/>
            )}/>
          <Route
            exact path="/contact"
            component={ContactForm}/>
          <Footer />
        </SideBar>
      </Router>
    </LngProvider>
  );
}

export default App;
