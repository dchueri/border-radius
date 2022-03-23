import React, { Component } from "react";

export default class Retangulo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="texto">
        <div
          className="retangulo"
          style={{
            borderTopLeftRadius: `${this.props.borderRadiusTopEsq}%`,
            borderBottomLeftRadius: `${this.props.borderRadiusBaiEsq}%`,
            borderTopRightRadius: `${this.props.borderRadiusTopDir}%`,
            borderBottomRightRadius: `${this.props.borderRadiusBaiDir}%`,
          }}
        ></div>
      </div>
    );
  }
}
