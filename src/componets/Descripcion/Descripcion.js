import './Descripcion.css'
import { useSelector } from 'react-redux'

const Descripcion = (pr) => {
    const estados = useSelector((state) => state.states)
    const { Mes } = estados
    const {titulo, contenido} = pr
    
    const contenidoDescripcion = contenido.includes("MANTENIMIENTO") ? contenido + Mes.toUpperCase() : contenido


    return (
      <div>
        <div className="borde3">
          <p> {titulo} </p>
        </div>
        <div className="borde2">
          <div className="texto_descripcion">
            <p id="concepto_factura" className="concepto">
              {contenidoDescripcion}
            </p>
          </div>
        </div>
        <p> </p>
      </div>
    );
}

export default Descripcion