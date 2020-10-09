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
    <div className="row footer">
      <div className="col-sm">
        <footer>
          <div className="clock">
            <span> { time }</span>
          </div>
        </footer>
      </div>
    </div>

  );
}

export default Footer;
