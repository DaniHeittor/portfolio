import React from "react";
import "../Home/index.css";
import NavBAr from "../../Components/NavBar/nav";
import Secao1 from "../../Components/seccao1/sec1"
import Secao2 from "../../Components/seccao2/sec2";
import Secao3 from "../../Components/seccao3/sec3";

export default class index extends React.Component {
  render() {
    return (
      <div id="a">
        <div id="menues">
          <div className="text-center">
            <h1 className="colornome-logo">Dani Rodrigues</h1>
            <Info />
              
            <NavBAr
              li1="INTRODUÇÃO"
              li2="SOBRE"
              li3="CRONOLOGIA"
              li4={<i className="fab fa-facebook-square"></i>}
              li5={<i className="fab fa-instagram"></i>}
              li6={<i className="fab fa-github"></i>}
              fb="https://www.facebook.com/heittor.rodrigues7"
              insta="https://www.instagram.com/dani_heittor_rodrigues_acc/"
              git="https://github.com/DaniHeittor"
            />

            <div className="footer">
              <p>
                <strong>DANI HEITTOR RODRIGUES</strong>, todos os direitos
                reservados, 2020 ©
              </p>
            </div>

          </div>
        </div>
        

        <div id="menudih">
          <div id="seccao1">
            <Secao1 />
          </div>

          <div id="seccao2">
            <Secao2 />
          </div>

          <div id="seccion3">
            <Secao3 />
          </div>
        </div>
      </div>
    );
  }
}
