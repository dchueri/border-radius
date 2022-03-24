import React, { Component } from "react";
import CopiaResultado from "./CopiaResultado";

export default class Retangulo extends Component {
  render() {
    const valor1 = this.props.borderRadiusTopEsq;
    const valor2 = this.props.borderRadiusTopDir;
    const valor3 = this.props.borderRadiusBaiDir;
    const valor4 = this.props.borderRadiusBaiEsq;
    return (
      <div className="texto">
        <div
          className="retangulo"
          style={{
            borderTopLeftRadius: `${valor1}%`,
            borderBottomRightRadius: `${valor2}%`,
            borderTopRightRadius: `${valor3}%`,
            borderBottomLeftRadius: `${valor4}%`,
          }}
        ></div>
      </div>
    );
  }
}
