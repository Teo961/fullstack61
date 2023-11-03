// formas de crear variables

elNombre = "Juan";

var primerNombre = "Juan"; //var no se está utilizando
let segundoNombre = "Juan";

const apellido = "Quintero";



// array, arreglos, vectores, matrices

let nombre = ["Teo", "Juan", "María", "Luisa"];
let edades = [45, 65, 80, 60, 62];
let baloto = [45, 56, 23, 67];
let datos = [34, "Jorge", "Miguel", true, false, null];

let persona = {
    nombre: "Jorge",
    edad:   25,
    sexo: "M",
    esMayorDeEdd: true,
    puntajeDataCredito: null,
    reporteSisben: undefined,
    cedula: 14243350,
    pasaporte: 14243352,
    coloresFaboritos: ["negro", "amarillo", "blanco"],
    fechaDeNacimiento: {
        día: 12,
        mes: "agosto",
        año: 1961
    },
    fechaExpediciónCédula: "25-06-1981",
    semanasCotizadas: 100,

}
// verificar si la persona puede ingresar al evento

let MayoriaEdad = 18;

let edadPersona = persona.edad;


if(edadPersona>=MayoriaEdad){
    console.log("Puede entrar al bar");
} 
else{
    console.log("No puede ingresar al bar");
}
const edadPensionMasculio = 62;

const edadPensionFemenino = 57;
//condicional con varios casos

if(persona.edad >= edadPensionMasculio && persona.sexo == "M" && persona.semanasCotizadas >= 1300){
    console.log("puede pensionarse");
} 
    else if(
    persona.edad >= edadPensionFemenino && persona.sexo == "F" && persona.semanasCotizadas >= 1300) {
        console.log("Puede pensionarse");
    }
    else{
        console.log("No puede pensionarse");
    }

// condicional con el operador OR, ||

if(persona.cedula || persona.pasaporte){
    console.log("Puede salir del país");

}else{
    console.log("No uede salir del país"); 

}

// suich case

    /* let día = "lunes";
if(día == lunes){
    console.log("Hoy es lunes");
} if(dia == "martes"){
    console-log("hoy es martes");
}*/
switch(día){
    case "lunes":
    console.log("Hoy es lunes");
    break;

    case "martes":
    console.log("Hoy es martes");
    break;

    case "miercoles":
    console.log("Hoy es miercoles");
    break;
    case "jueves":
    console.log("Hoy es jueves");
    break;
    case "virnes":
    console.log("Hoy es viernes");
    break;
    case "sábado":
    console.log("Hoy es sábado");
    break;
    case "domingo":
    console.log("Hoy es domingo");
    break;

}



