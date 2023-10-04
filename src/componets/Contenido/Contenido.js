import "./Contenido.css";
import ListaDesplegable from "../ListaDesplegable/ListaDesplegable";
import { useSelector } from "react-redux";

const Contenido = ({ mostrarFormatos }) => {
  const estados = useSelector((state) => state.states);

  const { ListaDeFormatos, ListaClientes, ListaMeses } = estados;

  const LClientes = ListaClientes.map((cliente) => cliente.edificio);

  return (
    <form className="Contenido">
      <ListaDesplegable
        mostrarFormatos={mostrarFormatos}
        tipo="formato"
        lista={ListaDeFormatos}
      />
      <ListaDesplegable
        mostrarFormatos={mostrarFormatos}
        tipo="cliente"
        lista={LClientes}
      />
      <ListaDesplegable
        mostrarFormatos={mostrarFormatos}
        tipo="mes"
        lista={ListaMeses}
      />
    </form>
  );
};

export default Contenido;
