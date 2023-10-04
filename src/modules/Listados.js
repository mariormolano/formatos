const Listados = {
  ListaClientes: [
    {
      edificio: "ED. PREUX",
      id: "17005",
      direccion: "CARRERA 14 N° 100 - 48",
      telefono: "3112320610",
      montoTexto: "CIENTO SETENTA Y CINCO MIL PESOS MCTE",
      monto: "175.000",
    },
    {
      edificio: "ED. TORREON DEL CHICO",
      id: "17010",
      direccion: "CALLE 101A Nº 11B - 28",
      telefono: "3182743354",
      montoTexto: "DOSCIENTOS CUARENTA Y NUEVE MIL CUATROCIENTOS PESOS MCTE",
      monto: "249.400",
    },
  ],
  ListaDeFormatos: ["Mantenimiento", "Cuenta de cobro", "Cotización"],

  ListaTitulosFormatos: [
    {
      CabeceraTitulo: "CUENTA DE COBRO",
      ReferenciaTirulo: "CUENTA",
      DescripcionTitulo: "POR CONCEPTO DE",
      DescripcionContenido: "MANTENIMIENTO CORRESPONDIENTE AL MES DE ",
      MontoProvedor: true,
    },
    {
      CabeceraTitulo: "COMPROBANTE DE MANTENIEMIENTO",
      ReferenciaTirulo: "COMPROBANTE",
      DescripcionTitulo: "OBSERVACIONES",
      DescripcionContenido: "",
      MontoProvedor: false,
    },
  ],

  ListaVerificacion: {
    ENE: "--------------------------",
    FEB: "--------------------------",
    MAR: "--------------------------",
    ABR: "--------------------------",
    MAY: "--------------------------",
    JUN: "--------------------------",
    JUL: "--------------------------",
    AGO: "--------------------------",
    SEP: "--------------------------",
    OCT: "--------------------------",
    NOV: "--------------------------",
    DIC: "--------------------------",
  },
  ListaMeses: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
};
export default Listados;
