import React, { Component } from "react";
import "../../pages/Home/index.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default class nav extends Component {
  render() {
    return (
      <>
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
                <h3>
                  Desenvolver de Conteudo Multimidia da FCV-Federação
                  caboverdiana Voley
                </h3>
                <p className="sca">
                  Sou administrador e desenvolvedor de conteudos Digitais da
                  pagina da Federaçāo do voleibol cabo verde. Atendendo sou um
                  supervisor tecnico de Voleibol informatico-VIS.
                </p>
              </div>

              <div id="mainCronoText">
                <h3>Ensino Primario e Secundario</h3>
                <p className="sca">
                  Concluí meu ensino médio com disciplinas importantes como
                  Física, Utilização e Matemática. Durante meu tempo na escola,
                  desenvolvi interesse em resolver problemas complexos da física
                  fundamental que me ajudaram a melhorar minha compreensão de
                  qualquer problema e também minhas habilidades matemáticas para
                  realmente resolvê-los.
                </p>
              </div>
            </div>
      </>
    );
  }
}