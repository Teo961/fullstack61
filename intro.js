// formas de crear variables

elNombre = "Juan";

var primerNombre = "Juan"; //var no se está utilizando
let segundoNombre = "Juan";

const apellido = "Quintero";



// array, arreglos, vectores, matrices

let nombres = ["Teo", "Juan", "María", "Luisa"];
let edades = [15, 19, 28, 25, 12];
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

function ejemplosCondicionales(){

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
    let día = "viernes";

// método inusual
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
    case "viernes":
     console.log("Hoy es viernes, que maravilla");
    break;
    case "sábado":
    console.log("Hoy es sábado");
    break;
    case "domingo":
    console.log("Hoy es domingo");
    break;
    default:
    console.log("No es día válido");
    break;

}
//operador ternario

    if(persona.sexoexo == "M"){
    console.log("Eres un hombre");

}   else {
    console.log("Eres mujer");

}
// similar al bloque anterior. Operador ternario.
persona.sexo == "M" ? console.log("Eres hombre") : console.log("Eres mujer");


}

function ciclos(){
    
// ciclo for

for(let contador = 1; contador <= 10; contador ++){
    console.log(contador + " uno, dos, tres, cuatro, sinco, seix, siete, ocho, nueve");

}
for(let i = 0; i< nombres.length; i++){
    console.log(nombres[i]);
    
}
 // while ---mientras

    while(persona.edad < 30){
    console.log("Para cumplir los treinta te faltan " + (30 - persona.edad) + " años");
     persona.edad +=2;  // con ++ incrementa de a uno y con +=2, incrementa de a dos.
 }
// ciclo Do While

let opcion = 3;

do{
    console.log("Bienvenido a Mario Kart");
    console.log("1. jugar");
    console.log("2. configuración");
    console.log("3. multijugador");
    console.log("4. salir");

    opcion ++;

}   while(opcion != 4);


}

//  funciones

    function saludar(){
        console.log("Te doy la bienvenida");
        if(persona.edad >= 18){
            console.log("puede jugar");
        }
    }
    saludar();
    ejemplosCondicionales();
    ciclos();



