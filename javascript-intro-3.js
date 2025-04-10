// cuando hay que evaluar varias condiciones con una sentencia if - else, se sugiere o es más eficiente utilizar la sentencia switch case

const weekDay = promt("Entre el día de la semana", "Viernes")

switch (key) {
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

    case "sabado" || "domingo":
        console.log("Es fin de semana")
        break;

    default:
        break;
}