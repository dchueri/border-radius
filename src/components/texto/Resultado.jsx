import React from "react";

const Resultado = (props) => {
  function validaResultado() {
    const valores = [
      props.borderRadiusTopEsq,
      props.borderRadiusTopDir,
      props.borderRadiusBaiDir,
      props.borderRadiusBaiEsq,
    ];
    const gabarito = [
      `border-top-left-radius: ${valores[0]}%;`,
      `border-top-right-radius: ${valores[1]}%;`,
      `border-bottom-right-radius ${valores[2]}%;`,
      `border-bottom-left-radius ${valores[3]}%;`,
    ];
    const resultado = [];
    for (let i = 0; i < valores.length; i++) {
      if (valores[i] > 0) {
        resultado.push(<p>{gabarito[i]}</p>);
      }
    }
    return resultado
  }

  return (validaResultado())
};

export default Resultado;
