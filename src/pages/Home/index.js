import React from "react";
import "../Home/index.css";
import LogoM from "../../img/IMG_5765.JPG";
import "@fortawesome/fontawesome-free/css/all.css";
import NavBAr from "../../Components/NavBar/nav";
import ImgMain from "../../img/IMG_5856.JPG";

export default class index extends React.Component {
  render() {
    return (
      <div id="a">
        <div id="menues">
          <div className="text-center">
            <div id="DLogoM">
              <img className="LogoM" src={LogoM} alt=""></img>
            </div>
            <h1 className="colornome-logo">Dani Rodrigues</h1>

            <i className="far fa-envelope"></i>
            <span className="email">daniheittorrodrigues@gmail.com</span>
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
            <img className="ImgMain" src={ImgMain} alt=""></img>
            <div id="menuAp">
              <h1>Oii!! Sou Dani</h1> 
              <button>VER CURRICULO</button>
            </div>
          </div>
      
          <div id="seccao2">
            <h2 className="qse1">QUEM SOU EU?</h2>
            <p className="qse">
              Eu sou um estudante em informatica na Universidade do Mindelo.
              Adoro explorar novas tecnologias e muitas vezes impressionado com
              o progresso que nós rodeia e com deseafios que nos são colocados,
              com a cada dia a tecnoligia vai ivoluindo. Aprendendo dia apos dia
              o novos desafio que nos sao posto mas nunka desistido.
            </p>

            <div>
              <h2 className="qse1"> CONHECIMENTOS</h2>
              <div id="MainCard">
                <div id="card">
                  <div id="cardInf">
                    <h3> Web </h3>
                    <p>
                      Tenho experiência na criação de sites e extensões de cromo
                      usando JavaScript, React, HTML, CSS
                    </p>
                  </div>
                </div>

                <div id="card">
                <div id="cardInf">
                    <h3>ESTRUTURAS DE DADOS E ALGORITMOS</h3>
                    <p>
                    Como proveniente do histórico do CS, 
                    tenho uma boa compreensão dos conceitos fundamentais
                    </p>
                  </div>
                </div>

                <div id="card">
                  <div id="cardInf">
                    <h3>REDES AVANCADAS</h3>
                    <p>
                    Tendo disciplinas ligas a Redes,ainda possou um certificado online da cisco-nivel3  
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div id="seccion3">
            <h2 className="qse1"> CRONOLOGIA</h2>
            <div id="mainCrono">
              <div id="mainCronoText">
                <h3>Estagio na Universidade do Mindelo</h3>
                <p className="sca">
                  No estagio montei e progetei dois laboratorio,um de engenheria
                  informatica e de simulacao empresarial. Onde tive conhecimento
                  pratico com Redes de compuatdor, sen falar em ter
                  posteriorizado conhecimentos empresarial que nos demonstram o
                  nosso poder de resolucao em tempo util.
                </p>
              </div>

              <div id="mainCronoText">
                <h3>Desenvolver de Conteudo Multimidia da FCV-Federação caboverdiana Voley</h3>
                <p className="sca">
                  Sou administrador e desenvolvedor de conteudos Digitais da pagina da Federaçāo do voleibol cabo verde.
                  Atendendo sou um supervisor tecnico de Voleibol informatico-VIS.
                </p>
              </div>


              <div id="mainCronoText">
                <h3>Ensino Primario e Secundario</h3>
                <p className="sca">
                  No estagio montei e progetei dois laboratorio,um de engenheria
                  informatica e de simulacao empresarial. Onde tive conhecimento
                  pratico com Redes de compuatdor, sen falar em ter
                  posteriorizado conhecimentos empresarial que nos demonstram o
                  nosso poder de resolucao em tempo util.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
