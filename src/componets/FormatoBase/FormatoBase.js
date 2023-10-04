import Cabecera from "../Cabecera/Cabecera";
import DatosEdificio from "../DatosEdificio/DatosEdificio";
import Descripcion from "../Descripcion/Descripcion";
import Firma from "../Firma/Firma";
import Monto from "../Monto/Monto";
import Proveedor from "../Proveedor/Proveedor";
import Referencia from "../Referencia/Referencia";
import SaltoDePagina from "../SaltoDePagina/SaltoDePagina";
import "./FormatoBase.css";
import { useSelector } from "react-redux";

const FormatoBase = ({ formato }) => {

  const {
    CabeceraTitulo,
    ReferenciaTitulo,
    DescripcionTitulo,
    MontoProvedor,
    DescripcionContenido,
    cliente,
  } = formato;

  return (
    <div className="FormatoBase">
      <Cabecera titulo={CabeceraTitulo} />
      <Referencia titulo={ReferenciaTitulo} />
      <DatosEdificio cliente={cliente} />
      {MontoProvedor ? <Proveedor /> : null}
      <Descripcion
        titulo={DescripcionTitulo}
        contenido={DescripcionContenido}
      />
      {MontoProvedor ? <Monto cliente={cliente} /> : null}
      <Firma />
      <SaltoDePagina />
    </div>
  );
};

export default FormatoBase;
