import { useState } from "react";
import "./Referencia.css";
import { useSelector } from "react-redux";

const Referencia = ({ titulo }) => {
  const estados = useSelector((state) => state.states);
  const { cliente, Mes, ListaMeses } = estados;
  const { id } = cliente;
  const [fecha, setFecha] = useState("XX/XX/XXXX")

  const numeroMes = ListaMeses.findIndex((indiceMes) => indiceMes === Mes) + 1;
  const mesCodigo =
    numeroMes.toString().length === 1
      ? "0" + numeroMes.toString()
      : numeroMes.toString();

  const cambioFecha = (e) => {
    const fechaEntrada = e.target.value.replaceAll("-", " ");
    const convertirFecha = new Date(fechaEntrada);
    const fechaDia = convertirFecha.getDate().toString();
    const fechaMes = (convertirFecha.getMonth() + 1).toString();
    const fechaAnho = convertirFecha.getFullYear().toString();
    const fechaDiaTexto = fechaDia.length === 1 ? "0" + fechaDia : fechaDia;
    const fechaMesTexto = fechaMes.length === 1 ? "0" + fechaMes : fechaMes;
    setFecha(fechaDiaTexto + "/" + fechaMesTexto + "/" + fechaAnho);
  };
  return (
    <div className="Referencia">
      <div className="borde1">
        <p>FECHA DE REMISIÓN:</p>
      </div>
      <div className="borde2 fecha--container">
        <input type="date" className="fecha" onChange={cambioFecha} />
        <p id="fecha_factura">{fecha}</p>
      </div>
      <div className="borde1">
        <p>{titulo} NUMERO:</p>
      </div>
      <div className="borde2">
        <p id="codigo_factura">
          M{id}-23{mesCodigo}
        </p>
      </div>
      <p> </p>
    </div>
  );
};

export default Referencia;
