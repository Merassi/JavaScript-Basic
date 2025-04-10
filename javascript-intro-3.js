// cuando hay que evaluar varias condiciones con una sentencia if - else, se sugiere o es más eficiente utilizar la sentencia switch case

const weekDay = prompt("Entre el día de la semana", "Viernes")

switch (weekDay) {
    case "lunes":
        console.log("hoy es lunes")
        break;

    case "martes":
        console.log("hoy es martes")
        break;
    
    case "miercoles":
        console.log("hoy es miercoles")
        break;

    case "jueves":
        console.log("hoy es jueves")
        break;

    case "viernes":
        console.log("hoy es viernes")
        break;

    case "sabado":
    case "domingo":
        console.log("Es fin de semana")
        break;

    default:
        console.log("Dia de la semana incorrecto")
        break;
}