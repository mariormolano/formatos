import './DatosAscensor.css'
import { useSelector } from 'react-redux'


const DatosAscensor = () => {
    const estados = useSelector((state) => state.states);
    const {edificio, direccion, id, telefono} = estados.cliente
    return (
      <div className="gl1" id="gl1">
        <div className="ce6">EDIFICIO</div>
        <div className="ce17">
          <p id="edificio_lv">{edificio}</p>
        </div>
        <div className="ce6">AÑO</div>
        <div className="ce17">2023</div>
        <div className="ce6">DIRECCIÓN</div>
        <div className="ce17">
          <p id="direccion_lv">{direccion}</p>
        </div>
        <div className="ce6">ASCENSOR</div>
        <div className="ce17">1</div>
        <div className="ce6">CODIGO CLIENTE</div>
        <div className="ce17">
          <p id="codigo_lv">{id}</p>
        </div>
        <div className="ce6">TELEFONO</div>
        <div className="ce17">
          <p id="telefono_lv">{telefono}</p>
        </div>
        <p> </p>
      </div>
    );
}

export default DatosAscensor