import { useState } from "react";
import "./perguntas.scss";
import seta from '../../../assets/faq/seta.svg'

function Perguntas({pergunta, resposta}) {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  function showResposta() {
    setMostrarResposta(!mostrarResposta);
  }

  return (
    <div className="perguntas-card">
      <div
        className={`pergunta ${mostrarResposta ? "ativa" : ""}`}
        onClick={showResposta}
      >
          <img src={seta} alt="" className={mostrarResposta ? "rotate" : ""}/> 
        <h3>
          {pergunta}
        </h3>
      </div>

      <div className={`resposta ${mostrarResposta ? "mostrar" : ""}`}>
        <p>{resposta}</p>
      </div>
    </div>
  );
}

export default Perguntas;
