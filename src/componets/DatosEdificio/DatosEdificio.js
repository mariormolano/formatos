import './DatosEdificio.css'
import { useSelector } from 'react-redux';

const DatosEdificio = () => {
    const estados = useSelector((state) => state.states)
    const {cliente} = estados;
    const {edificio, direccion, telefono} = cliente
    return (
        <div>
            <div className="datosEdificio">
                <div className="borde1">
                    <p>EDIFICIO</p>
                </div>
                <div className="borde1">
                    <p>DIRECCIÓN</p>
                </div>
                <div className="borde1">
                    <p>TELÉFONO</p>
                </div>
                <div className="borde2">
                    <p id="edificio_factura">{edificio}</p>
                </div>
                <div className="borde2">
                    <p id="dicreccion_factura">{direccion}</p>
                </div>
                <div className="borde2">
                    <p id="telefono_factura">{telefono}</p>
                </div>
            </div>
            <div className="nit">
                <div className="borde1">
                    <p>NIT:</p>
                </div>
                <div className="borde2"> </div>
            </div>
            <p> </p>
        </div>
    );
}

export default DatosEdificio