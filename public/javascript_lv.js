"use strict";

const leerDatos = document.getElementById("leerDatos");
const escribirDatos = document.getElementById("escribirDatos");
//const edificio_f = document.getElementById("edificio_f");
const listMes = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SET", "OCT", "NOV", "DIC"];

var mesSeleccionado = "";
var chequeo = [];

function selecMes(index){
    mesSeleccionado = `chkList${listMes[index]}`;
    console.log(mesSeleccionado + edificio_f.selectedIndex);
    leerDatosLocal();
}

function EleClick(event){
    
    const IdElement = event.id+"";
    const NameDiv = IdElement.substring(0,IdElement.length-1) //.substring(0, IdElement.length -1);
    const e1 = document.getElementById(NameDiv + "1");
    const e2 = document.getElementById(NameDiv + "2");
    const e3 = document.getElementById(NameDiv + "3");
    let e1_style = getComputedStyle(e1).display;
    let e2_style = getComputedStyle(e2).display;
    let e3_style = getComputedStyle(e3).display;
    
    let e1_status = () => {if (e1_style == "none" && e3_style == "none") { return "flex" } else { return "none" }};
    let e2_status = () => {if (e2_style == "none" && e1_style == "none") { return "flex" } else { return "none" }};
    let e3_status = () => {if (e3_style == "none" && e2_style == "none") { return "flex" } else { return "none" }};

    e1.style.display = e2_status();
    e2.style.display = e3_status();
    e3.style.display = e1_status();
}

function escribirDatosLocal(){
    let e2 = "";
    let e3 = "";
    let e1 = "";
    let e1_style = "";
    let e2_style = "";
    let e3_style = "";
    
    if (mesSeleccionado.length > 0){
        for (let i = 0; i < 36; i++) {
            e1 = document.getElementById(mesSeleccionado+(i+1)+"_1");
            e2 = document.getElementById(mesSeleccionado+(i+1)+"_2");
            e3 = document.getElementById(mesSeleccionado+(i+1)+"_3");
            e1_style = getComputedStyle(e1).display;
            e2_style = getComputedStyle(e2).display;
            e3_style = getComputedStyle(e3).display;
        
            if (e1_style == 'flex') {
                chequeo[i] = 0;
            }
            if (e2_style == 'flex') {
                chequeo[i] = 1;
            }
            if (e3_style == 'flex') {
                chequeo[i] = 2;
            }
        }
        localStorage.setItem(mesSeleccionado + edificio_f.selectedIndex,chequeo);
    }
    console.log(chequeo);
}

function leerDatosLocal(){
    let varioEdificios2 = [];
    let chequeoTemp = "";
    
    let e2 = "";
    let e3 = "";
    let e1 = "";
    
    let i2 = 0;
    varioEdificios2 = localStorage.getItem("edificio");
    
    if (mesSeleccionado.length > 0){
        chequeoTemp = localStorage.getItem(mesSeleccionado + edificio_f.selectedIndex);
        if (chequeoTemp != null) {
            chequeo = chequeoTemp.split(",");
            if (chequeo.length == 36) {
                for (const i in chequeo) {
                    i2 = parseInt(i) + 1;
                    e1 = document.getElementById(mesSeleccionado+i2+"_1");
                    e2 = document.getElementById(mesSeleccionado+i2+"_2");
                    e3 = document.getElementById(mesSeleccionado+i2+"_3");
                    switch (parseInt(chequeo[i])) {
                        case 0:
                            e1.style.display = "flex";
                            e2.style.display = "none";
                            e3.style.display = "none";
                            break;
                        case 1:
                            e1.style.display = "none";
                            e2.style.display = "flex";
                            e3.style.display = "none";
                            break;
                        case 2:
                            e1.style.display = "none";
                            e2.style.display = "none";
                            e3.style.display = "flex";
                            break;
                    }
                }
            }
        }
    }
}

leerDatos.addEventListener("click",escribirDatosLocal)
escribirDatos.addEventListener("click",leerDatosLocal)