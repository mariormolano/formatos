import { useSelector } from 'react-redux';
import './Monto.css'


const Monto = () => {
    const estados = useSelector((state) => state.states)
    const {cliente} = estados
    const {monto, montoTexto} = cliente
    return (
        <div>
            <div className="borde3">
                <p>LA SUMA DE</p>
            </div>
            <div className="valor">
                <div className="bordeValor">
                    <p>LETRAS</p>
                </div>
                <div className="bordeValor2">
                    <p id="valor_letras_factura">{montoTexto}</p>
                </div>
                <div className="bordeValor">
                    <p>NÚMEROS</p>
                </div>
                <div className="bordeValor2">
                    <p id="valor_factura">$ {monto}</p>
                </div>
            </div>
            <p> </p>
        </div>
    );
}

export default Monto