import "./Mantenimiento.css";
import FormatoBase from "../FormatoBase/FormatoBase";
import ListaDeVerificacion from "../ListaDeVerificacion/ListaDeVerificacion";
import { useSelector, useDispatch } from "react-redux";
import { setCliente } from "../../modules/slices/states";
import { useEffect } from "react";

const Mantenimiento = () => {
  const estados = useSelector((state) => state.states);
  const dispatch = useDispatch();
  const { ListaClientes, listaEdificio, ListaTitulosFormatos } = estados;


  return (
    <>
      {ListaTitulosFormatos.map((Formato, indice) => (
        <FormatoBase formato={Formato} key={indice} />
      ))}
      <ListaDeVerificacion />
    </>
  );
};

export default Mantenimiento;
