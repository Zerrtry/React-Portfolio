import React, { useEffect, useState } from 'react';
import Moment from 'moment'
import './style.css';

function Footer() {

  const [time, setTime] = useState ()

  useEffect (() => {
    setInterval(() => {
      setTime (timeC)
    }, 100);
  })
  
  const timeC = () => Moment().format('	HH:mm:ss.S');
    
  return (
    <div className="row justify-content-center bottom">
      <div className="col-sm">
        <div className="downBar">
          <div className="clock">
            <span> { time }</span>
          </div>
        </div>  
      </div>
    </div>

  );
}

export default Footer;
