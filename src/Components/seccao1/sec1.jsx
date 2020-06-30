import React, { Component } from "react";
import "../../pages/Home/index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import ImgMain from "../../img/IMG_5856.JPG";
import PulseText from 'react-pulse-text';

export default class nav extends Component {
  render() {
    return (
      <>
       <img className="ImgMain" src={ImgMain} alt=" "></img>
            <div id="menuAp">

            <PulseText text="Ola!!! sou Dani" duration={6000} iterationCount={99999}>
                  <h1>Ola sou Dani</h1>
            </PulseText>
              
              <a href="https://docs.google.com/document/d/1aT_dOiy_2vBy78d8vxKJfs-Ff9KXWV3N8ZevKBAvo18/edit?usp=sharing">
                <button className="buttao">VER CURRICULO</button>
              </a>
            </div>
      </>
    );
  }
}
