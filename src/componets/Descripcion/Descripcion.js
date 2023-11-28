import { useState } from "react";
import "./Descripcion.css";
import { useSelector } from "react-redux";

const Descripcion = (props) => {
  const estados = useSelector((state) => state.states);

  const { Mes } = estados;
  const { titulo, contenido } = props;

  const contenidoDescripcion =
    contenido && contenido.includes("MANTENIMIENTO")
      ? contenido + Mes.toUpperCase()
      : contenido;

  const [concepto, setConcepto] = useState(contenidoDescripcion);
  const [conceptoVentana, setConceptoVentana] = useState(false);

  return (
    <div>
      <div className="borde3">
        <p onClick={() => setConceptoVentana(conceptoVentana ? false : true)}>
          {titulo}
        </p>
      </div>
      <div className="borde2">
        <div className="texto_descripcion">
          <p id="concepto_factura" className="concepto">
            {conceptoVentana && titulo === "OBSERVACIONES" ? (
              <div className="textarea_observaciones">
                <textarea
                  value={concepto}
                  onChange={(e) => setConcepto(e.target.value)}
                />
                <button onClick={() => setConceptoVentana(false)}>
                  Guardar
                </button>
              </div>
            ) : null}
            {concepto}
          </p>
        </div>
      </div>
      <p> </p>
    </div>
  );
};

export default Descripcion;
