import Cabecera from "../Cabecera/Cabecera";
import BaseLista from "./BaseLista/BaseLista";
import DatosAscensor from "./DatosAscensor/DatosAscensor";
import Listado from "./Listado";
import "./ListaDeVerificacion.css";
import meses from "./ListadoMeses";

function ValidarListado(e) {

  console.log(e);
  const valor = e.target.innerText;

  if (valor === "-") e.target.innerText = "O";
  if (valor === "O") e.target.innerText = "V";
  if (valor === "V") e.target.innerText = "-";
}

const ListaDeVerificacion = ({ cliente }) => {
  return (
    <div id="chkls">
      <Cabecera titulo="LISTA DE VERIFICACIÓN" />

      <DatosAscensor cliente={cliente} />

      <BaseLista />

      {Listado.map((Dato, Index) => {
        return (
          <div className="BaseLista" key={Index}>
            <div className="ce5 num">
              {Index + 1}
            </div>
            <div className="ce10 item" key={Dato}>
              {Dato}
            </div>
            {meses.map((mes, indice) => {
              return (
                <div className="ce14 mes chkList" key={indice}>
                  <div
                    className={mes}
                    onClick={ValidarListado}
                    id={mes + "_" + Index + "_" + 1}
                  >
                    -
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      <p> </p>
      <div className="ce6 def" id="leerDatos">
        DEFINICIÓN
      </div>
      <div className="ce7 def" id="escribirDatos">
        V = VERIFICADO
      </div>
      <div className="ce7 def">O = OBSERVACIÓN</div>
    </div>
  );
};

export default ListaDeVerificacion;
