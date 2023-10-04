import Cabecera from '../Cabecera/Cabecera'
import DatosEdificio from '../DatosEdificio/DatosEdificio'
import Descripcion from '../Descripcion/Descripcion'
import Firma from '../Firma/Firma'
import Monto from '../Monto/Monto'
import Proveedor from '../Proveedor/Proveedor'
import Referencia from '../Referencia/Referencia'
import './Factura.css'

const Factura = () => {
    return <div id="factura_div" className="layout_div">
        <Cabecera titulo="CUENTA DE COBRO" />
        
        <Referencia titulo="CUENTA" />

        <DatosEdificio />

        <Proveedor />
        
        <Descripcion titulo="POR CONCEPTO DE" />

        <Monto />
        
        <Firma />
    </div >
}

export default Factura
