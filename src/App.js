import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/discover" component={Discover} /> */}
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
        <Contacts />
      </div>
    </Router>
  );
}

export default App;
