import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Fonts.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-fluid d-flex h-100 flex-column">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
