import React from "react";
import "./style.css";

function Contacts() {
  return (
    <div className="col-md-3 col-md-offset-1 sidebar">
        <h1>Connect with Me</h1>
        <a href="https://github.com/Zerrtry" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true" ></i></a> 
        <a href="https://www.linkedin.com/in/dmitrii-zverev-577957b7/" target="_blank"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
        <a href="https://stackexchange.com/users/17829973/dmitrii" target="_blank"><i className="fa fa-stack-overflow fa-2x" aria-hidden="true"></i></a>
    </div>
  );
}

export default Contacts;
