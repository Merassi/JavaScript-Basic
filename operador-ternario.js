// El operador ternario es en ocasiones la unica alternativa posible al uso de sentencias if o switch, cuando se neccesita evaluar condiciones y devolver el resultado en el mismo lugar

// Sintaxis del operador ternario
// condiciones que se evalua? Verdadera : false 

// ejemplo sencillo:

const weekDay = "Jueves";

const resultado = weekDay === "Jueves" ? "Hoy es jueves" : "No es jueves";

console.log(`El resultado es ${resultado}`);