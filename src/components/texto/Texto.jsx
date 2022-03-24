import { useState } from "react";
import CopiaResultado from "./CopiaResultado";
import Resultado from "./Resultado";
import Retangulo from "./Retangulo";
import "./texto.css";
import Valores from "./Valores";

export default function Texto() {
  const [valor1, setValor1] = useState("0");
  const [valor2, setValor2] = useState("0");
  const [valor3, setValor3] = useState("0");
  const [valor4, setValor4] = useState("0");

  return (
    <>
      <header>
        <div>
          <h1 className="titulo">Border Radius Generator</h1>
        </div>
      </header>
      <body className="container">
        <div className="valores">
          <Valores
            lado={"esquerda"}
            alteraValor1={setValor1}
            alteraValor2={setValor2}
            alteraValor3={setValor3}
            alteraValor4={setValor4}
          />
          <Retangulo
            borderRadiusTopEsq={valor1}
            borderRadiusTopDir={valor2}
            borderRadiusBaiDir={valor3}
            borderRadiusBaiEsq={valor4}
            alteraValor1={setValor1}
            alteraValor2={setValor2}
            alteraValor3={setValor3}
            alteraValor4={setValor4}
          />
          <Valores
            lado={"direita"}
            alteraValor1={setValor1}
            alteraValor2={setValor2}
            alteraValor3={setValor3}
            alteraValor4={setValor4}
          />
        </div>
        <div className="resultado">
          <Resultado
            borderRadiusTopEsq={valor1}
            borderRadiusTopDir={valor2}
            borderRadiusBaiDir={valor3}
            borderRadiusBaiEsq={valor4}
          />
        </div>
        <CopiaResultado className="botao-copia"
          borderRadiusTopEsq={valor1}
          borderRadiusTopDir={valor2}
          borderRadiusBaiDir={valor3}
          borderRadiusBaiEsq={valor4}
        />
      </body>
    </>
  );
}
