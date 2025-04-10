// operadores y sentencias de control de flujo

// Operadores aritméticos (+, -, *, /, %)

const op1 = 10;
const op2 = 5;
const op3 = 7;
const op4 = "8";

// Realizamos una pregunta logica para comprobar si el operando 1 (op1) es par.
if (op1 % 2 == 0)
    console.log("El resultado es par");
else
    console.log("El resultado es impar");

// operador === Evalua contenido y tipo de dato
if (op4 === 8) 
    console.log("Verdadero");
else
    console.log("Falso");

// operacion de negacion(evalua si dos valores son desiguales)
if (op1 != "10")
    console.log("Verdadero");
else
    console.log("False")

// Segun el dia de la semana se muestra un mensaje

let today = 4; // jueves

// El ordinal del dia de la semana lo vamos a solicitar por consola
today = prompt("Por fa, entre el ordinal del dia de la semana", "5");

if (today == 1){
    console.log("Hoy es lunes");
} else if (today == 2){
    console.log("Hoy es martes");
} else if (today == 3){
    console.log("Hoy es miércoles");
} else if (today == 4){
    console.log("Hoy es jueves");
} else if (today == 5){
    console.log("Hoy es viernes");
} else if (todat == 6 || 7){
    console.log("Estamos en fin de semana");
} else {
    console.log("Orginal del dia de la semana incorrecto");
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}