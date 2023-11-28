import "./Mantenimiento.css";
import FormatoBase from "../FormatoBase/FormatoBase";
import ListaDeVerificacion from "../ListaDeVerificacion/ListaDeVerificacion";
import { useSelector, useDispatch } from "react-redux";
import { setCliente } from "../../modules/slices/states";
import { useEffect } from "react";

const Mantenimiento = (props) => {
  const { tipo } = props;
  const estados = useSelector((state) => state.states);
  const dispatch = useDispatch();
  const { ListaClientes, listaEdificio, ListaTitulosFormatos } = estados;

  return (
    <>
      {tipo === "Mantenimiento"
        ? ListaTitulosFormatos.map((Formato, indice) => (
            <FormatoBase formato={Formato} key={indice} />
          ))
        : null}
      {tipo === "Mantenimiento" ? <ListaDeVerificacion /> : null}
      {tipo === "Cuenta de cobro" ? (
        <FormatoBase formato={ListaTitulosFormatos[0]} k />
      ) : null}
    </>
  );
};

export default Mantenimiento;
