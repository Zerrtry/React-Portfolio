import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Fonts.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { LngProvider } from './utils/LngContext/languageProvider'

function App() {

  return (
    <LngProvider>
      <Router>
        <ScrollToTop />
        <div className="wrapper">
          <div className="container-fluid d-flex h-100 flex-column">
            <Header />
            <Content />
            <Footer />
          </div>
        </div>    
      </Router>
    </LngProvider>
  );
}

export default App;
