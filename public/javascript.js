"use strict";

const edificio_factura = document.getElementById("edificio_factura");
const edificio_Comprobante = document.getElementById("edificio_Comprobante");
const edificio_lv = document.getElementById("edificio_lv");

const dicreccion_factura = document.getElementById("dicreccion_factura");
const dicreccion_Comprobante = document.getElementById("dicreccion_Comprobante");
const direccion_lv = document.getElementById("direccion_lv");

const telefono_factura = document.getElementById("telefono_factura");
const telefono_Comprobante = document.getElementById("telefono_Comprobante");
const telefono_lv = document.getElementById("telefono_lv");

const codigo_factura = document.getElementById("codigo_factura");
const codigo_Comprobante = document.getElementById("codigo_Comprobante");
const codigo_lv = document.getElementById("codigo_lv");

const valor_letras_factura = document.getElementById("valor_letras_factura");
const valor_factura = document.getElementById("valor_factura");

const cerrarFecha = document.getElementById("cerrarFecha");
const divFecha = document.getElementById("divFecha");
const fecha_factura = document.getElementById("fecha_factura");
const fecha_Comprobante = document.getElementById("fecha_Comprobante");
const fecha_f = document.getElementById("fecha_f");

const cerrarEdificio = document.getElementById("cerrarEdificio");
const divEdificio = document.getElementById("divEdificio");
const edificio_f = document.getElementById("edificio_f");

const cerrarMes = document.getElementById("cerrarMes");
const divMes = document.getElementById("divMes");
const mes_f = document.getElementById("mes_f");

const cerrarObser = document.getElementById("cerrarObser");
const divObser = document.getElementById("divObser");
const concepto_Comprobante = document.getElementById("concepto_Comprobante");
const concepto_factura = document.getElementById("concepto_factura");
const obser_f = document.getElementById("obser_f");


var codigoCliente = 0;

//cerrar la ventana de fecha
function cerrarFechaX(){ 
    divFecha.style.display = "none";
}

//abrir la ventana de fecha
function abrirFechaX(){
    divFecha.style.display = "flex";
}

//establecer la fecha
function fijarFecha(){
    const [year, month, day] = fecha_f.value.split('-');
    let fecha_texto = day + '/' + month + '/' + year
    fecha_factura.innerText = fecha_texto;
    fecha_Comprobante.innerText = fecha_texto;
}

//cerrar la ventana de edificio
function cerrarEdificioX(){
    divEdificio.style.display = "none";
}

//abrir la ventana de edificio
function abrirEdificioX(){
    divEdificio.style.display = "flex";
}

//seleccionar el edificio y colocar los valores
function fijarEdificio(){
    let Clientes= new Array (2) 
    
    let ed = edificio_f.selectedIndex;
    
    codigoCliente = Clientes[ed][0];
    edificio_factura.innerText = Clientes[ed][1];
    edificio_Comprobante.innerText = Clientes[ed][1];
    edificio_lv.innerText = Clientes[ed][1];

    dicreccion_factura.innerText = Clientes[ed][2];
    dicreccion_Comprobante.innerText = Clientes[ed][2];
    direccion_lv.innerText = Clientes[ed][2];

    telefono_factura.innerText = Clientes[ed][3];
    telefono_Comprobante.innerText = Clientes[ed][3];
    telefono_lv.innerText = Clientes[ed][3];

    valor_letras_factura.innerText = Clientes[ed][4];
    valor_factura.innerText = Clientes[ed][5];
    
    fijarMes()
}

//cerrar la ventana de mes
function cerrarMesX(){
    divMes.style.display = "none";
}

//abrir la ventana de mes
function abrirMesX(){
    divMes.style.display = "flex";
}

//agrega el concepto y el consecutivo de la factura
function fijarMes(){
let mesIndex = mes_f.selectedIndex + 1;
let mes_codigo = mesIndex.toString();
    if (mes_codigo.length == 1){mes_codigo = "0"+mes_codigo};
    codigo_factura.innerText = "M" + codigoCliente + "-" + 23 + mes_codigo;
    codigo_Comprobante.innerText = "CM" + codigoCliente + "-" + 23 + mes_codigo;
    codigo_lv.innerText = codigoCliente;
    concepto_factura.innerText = "MANTENIMIENTO CORRESPONDIENTE AL MES DE "+mes_f.value.toUpperCase();
}

//cerrar la ventana de observaciones
function cerrarObserX(){
    divObser.style.display = "none";
}

//abrir la ventana de observaciones
function abrirObserX(){
    divObser.style.display = "flex";
}

//agrega texto a observaciones
function fijarObser(){
    concepto_Comprobante.innerText = obser_f.value.toUpperCase();
}

//eventos
cerrarFecha.addEventListener("click",cerrarFechaX);
fecha_factura.addEventListener("click",abrirFechaX);
fecha_f.addEventListener("input", fijarFecha);

cerrarEdificio.addEventListener("click",cerrarEdificioX);
edificio_factura.addEventListener("click",abrirEdificioX);
edificio_f.addEventListener("input", fijarEdificio);
edificio_f.addEventListener("click", fijarEdificio);

cerrarMes.addEventListener("click",cerrarMesX);
codigo_factura.addEventListener("click",abrirMesX);
mes_f.addEventListener("input", fijarMes);
mes_f.addEventListener("click", fijarMes);

cerrarObser.addEventListener("click",cerrarObserX);
concepto_Comprobante.addEventListener("click",abrirObserX);
obser_f.addEventListener("input", fijarObser);
obser_f.addEventListener("click", fijarObser);