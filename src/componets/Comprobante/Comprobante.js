import Cabecera from '../Cabecera/Cabecera'
import DatosEdificio from '../DatosEdificio/DatosEdificio'
import Descripcion from '../Descripcion/Descripcion'
import Firma from '../Firma/Firma'
import Referencia from '../Referencia/Referencia'
import './Comprobante.css'

const Comprobante = () => {
    return <div id="Comprobante_div" className="layout_div">
        <Cabecera titulo="COMPROBANTE DE MANTENIEMIENTO" />

        <Referencia titulo="COMPROBANTE" />

        <DatosEdificio />

        <Descripcion titulo="OBSERVACIONES" />

        <Firma />
    </div >
}

export default Comprobante