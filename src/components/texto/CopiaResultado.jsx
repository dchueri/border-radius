import React from "react";
import {FaRegCopy} from "react-icons/fa"

const CopiaResultado = (props) => {
  const valor1 = props.borderRadiusTopEsq;
  const valor2 = props.borderRadiusTopDir;
  const valor3 = props.borderRadiusBaiDir;
  const valor4 = props.borderRadiusBaiEsq;

  function copiaOResultado() {
    const resultado = `
        border-top-left-radius: ${valor1}%;
        border-top-right-radius: ${valor2}%;
        border-bottom-right-radius: ${valor3}%;
        border-bottom-left-radius: ${valor4}%;
        `
  
    navigator.clipboard.writeText(resultado);
    alert("Copiado com sucesso!")
  }


  return (
    <div className="botao" onClick={copiaOResultado}>
      <FaRegCopy/>
      <p>Copiar o resultado</p>
    </div>
  );
};

export default CopiaResultado;