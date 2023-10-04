import { createSlice } from "@reduxjs/toolkit";
import Listados from "../Listados";

const {
  ListaClientes,
  ListaTitulosFormatos,
  ListaDeFormatos,
  ListaMeses,
} = Listados;

const name = "states"

const initialState = {
  // Estados
  Mes: null,
  listaTipo: "",
  listaEdificio:"",
  cliente:null,
  //Listados
  ListaClientes,
  ListaTitulosFormatos,
  ListaDeFormatos,
  ListaMeses,
};

export const statesStore = createSlice({
  name: name,
  initialState,
  reducers: {
    setMes: (state, action) => {
      state.Mes = action.payload;
    },
    setListaTipo: (state, action) => {
      state.listaTipo = action.payload;
    },
    setListaEdificio: (state, action) => {
      state.listaEdificio = action.payload;
    },
    setCliente: (state, action) => {
      state.cliente = action.payload
    }
    
  },
});

export const { setMes, setListaTipo, setListaEdificio, setCliente } =
  statesStore.actions;

export default statesStore.reducer;
