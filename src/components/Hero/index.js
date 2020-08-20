import React from "react";
import "./style.css";
import Photo from "../../assets/images/portfolio-photo.png"

function Hero(props) {
  return (
    <div className="hero text-center" >
      <img src={Photo} alt="Logo" />
    </div>
  );
}

export default Hero;
