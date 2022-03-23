import React, { Component } from "react";

export default class Valores extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.lado === "esquerda") {
      return (
        <div>
          <div className="valores-esquerda">
            <div className="valor1">
              <input
                type="number"
                defaultValue="0"
                onChange={(event) => {
                  if (event.target.value == "") {
                    this.props.alteraValor1("0");
                  } else {
                    this.props.alteraValor1(event.target.value);
                  }
                }}
              />
            </div>
            <div className="valor2">
              <input
                type="number"
                defaultValue="0"
                onChange={(event) => {
                  if (event.target.value == "") {
                    this.props.alteraValor4("0");
                  } else {
                    this.props.alteraValor4(event.target.value);
                  }
                }}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="valores-direita">
          <div className="valor1">
            <input
              type="number"
              defaultValue="0"
              onChange={(event) => {
                if (event.target.value == "") {
                  this.props.alteraValor2("0");
                } else {
                  this.props.alteraValor2(event.target.value);
                }
              }}
            />
          </div>
          <div className="valor2">
            <input
              type="number"
              defaultValue="0"
              onChange={(event) => {
                if (event.target.value == "") {
                  this.props.alteraValor3("0");
                } else {
                  this.props.alteraValor3(event.target.value);
                }
              }}
            />
          </div>
        </div>
      );
    }
  }
}
