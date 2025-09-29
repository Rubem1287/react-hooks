import React, { useState, useEffect } from "react";

function MudarBotao() {
  const [tamanho, setTamanho] = useState({ width: "18rem", height: "6rem" });

  const AumentarTamanho = () => {
    setTamanho({ width: "20rem", height: "7rem" });
  };

  const VoltarTamanho = () => {
    setTamanho({ width: "18rem", height: "6rem" });
  };

  useEffect(() => {
    console.log("Estado do botão foi modificado.");
  }, [tamanho]);

  return (
    <button
      onMouseOver={AumentarTamanho}
      onMouseOut={VoltarTamanho}
      style={{
        width: tamanho.width,
        height: tamanho.height,
        borderRadius: "100px",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "none",
        padding: 0,
        overflow: "hidden",
      }}
      onClick={() =>
        window.open("https://github.com/Rubem1287?tab=repositories", "_blank")
      }
    >
      <img
        src="/Imagens/botao.svg"
        alt="Imagem botão"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // ou 'contain' se quiser ver toda a imagem
        }}
      />
    </button>
  );
}

export default MudarBotao;
