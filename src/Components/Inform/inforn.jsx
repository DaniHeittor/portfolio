import React, { Component } from "react";
import "../../pages/Home/index.css";
import LogoM from "../../img/IMG_5765.JPG";
import "@fortawesome/fontawesome-free/css/all.css";


export default class nav extends Component {
  render() {
    return (
      <>
        <div id="DLogoM">
              <img className="LogoM" src={LogoM} alt=""></img>
            </div>
             <h1 className="colornome-logo">Dani Rodrigues</h1>
            <div>
              <i className="far fa-envelope"></i>
              <span className="email">daniheittorrodrigues@gmail.com</span>
            </div>
            <div>
              <i class="fas fa-phone-alt"></i>
              <span className="tel">(238)5951771</span>
            </div>
      </>
    );
  }
}