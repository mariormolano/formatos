import "./App.css";
import Contenido from "./componets/Contenido/Contenido";
import Mantenimiento from "./componets/Mantenimiento/Mantenimiento";
// Redux imports
import { useSelector, useDispatch } from "react-redux";
import {
  setMes,
  setListaTipo,
  setListaEdificio,
  setCliente,
} from "./modules/slices/states";

function App() {
  const estados = useSelector((state) => state.states);

  const { ListaClientes, ListaTitulosFormatos, ListaMeses } = estados;

  const { Mes, listaTipo, listaEdificio } = estados;

  const dispatch = useDispatch();

  const mostrarFormatos = ({ lista, valor }) => {
    if (lista === "formato") dispatch(setListaTipo(valor));
    if (lista === "cliente") {
      dispatch(setListaEdificio(valor));
      const BusquedaCliente = ListaClientes.filter(
        (cli) => cli.edificio === valor
      );
      dispatch(setCliente(BusquedaCliente[0]));
    }
    if (lista === "mes") dispatch(setMes(valor));
  };

  return (
    <div className="App">
      <Contenido mostrarFormatos={mostrarFormatos} />
      {listaTipo === "Mantenimiento" && listaEdificio && Mes ? (
        <Mantenimiento tipo="Mantenimiento" />
      ) : null}

      {listaTipo === "Cuenta de cobro" && listaEdificio && Mes ? (
        <Mantenimiento tipo="Cuenta de cobro" />
      ) : null}
    </div>
  );
}

export default App;
