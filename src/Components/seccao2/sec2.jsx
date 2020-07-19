import React, { Component } from "react";
import "../../pages/Home/index.css";

export default class nav extends Component {
  render() {
    return (
      <>
        <h2 className="qse1">QUEM SOU EU?</h2>
            <p className="qse">
              Sou estudante em informatica na Universidade do Mindelo.
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
                      Tenho experiência na criação de sites com ferramentas JavaScript, React, HTML, CSS
                    </p>
                  </div>
                </div>

                <div id="card">
                  <div id="cardInf">
                    <h3>ESTRUTURAS DE DADOS E ALGORITMOS</h3>
                    <p>
                      Como proveniente do histórico de disciplinas ligadas ao mesmo, tenho uma boa  compreensão dos conceitos fundamentais
                    </p>
                  </div>
                </div>

                <div id="card">
                  <div id="cardInf">
                    <h3>REDES AVANCADAS</h3>
                    <p>
                      Tendo disciplinas ligas a Redes,ainda possou um
                      certificado online da cisco-nivel3.
                    </p>
                  </div>
                </div>
              </div>
            </div>
      </>
    );
  }
}
