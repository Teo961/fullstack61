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
    esMayorDeEdd: true,
    puntajeDataCredito: null,
    reporteSisben: undefined,
    coloresFaboritos: ["negro", "amarillo", "blanco"],
    fechaDeNacimiento: {
        día: 12,
        mes: "agosto",
        año: 1961
    },
    fechaExpediciónCédula: "25-06-1981"

}
// verificar si la persona puede ingresar al evento

let MayoriaEdad = 18;

let edadPersona = persona.edad;

if(edadPersona>=MayoriaEdad){
    console.log("Puede entrar al bar");

}





