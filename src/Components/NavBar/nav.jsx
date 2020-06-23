import React, { Component } from "react";
import "../NavBar/nav.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-scroll";

export default class nav extends Component {
  render() {
    return (
      <>
        <nav id="navbar">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="seccao1"
                spy={true}
                smooth={true}
                offset={-400}
                duration={500}
              >
                {this.props.li1}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="seccao2"
                spy={true}
                smooth={true}
                offset={-200}
                duration={300}
              >
                {this.props.li2}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="seccion3"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                {this.props.li3}
              </Link>
            </li>
            <li>
              <a href={this.props.fb}>{this.props.li4}</a>
            </li>
            <li>
              <a href={this.props.insta}>{this.props.li5}</a>
            </li>
            <li>
              <a href={this.props.git}>{this.props.li6}</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
