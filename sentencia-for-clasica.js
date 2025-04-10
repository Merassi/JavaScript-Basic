/* Crear un array de numeros, recorrerlo y hallar el promedio de los numeros pares

IMPORTANTE!!!

Conceptos de Contador y Acumulador */

const arrayNumeros = [10, 20, 25, 15, 18, 23, 11, 45, 71];

/* Promedio o media es la sumatoria entre el total */

const totalElementosDelArray = arrayNumeros.length;
let acumuladorDePares = 0;
let totalDeParesEncontrados = 0;

for (let index = 0;  index <= totalElementosDelArray - 1; index++) {
    if (arrayNumeros[index] % 2 == 0) {
        // acumular los pares
        // acumuladorDePares = acumuladorDePares + arrayNumeros[index];
        acumuladorDePares += arrayNumeros[index];

        // llevar la cuenta de los pares 
        // totalDeParesEncontrados = totalDeParesEncontrados + 1; 
        totalDeParesEncontrados++;
    }
}

const promedio = acumuladorDePares / totalDeParesEncontrados;

console.log(`Este es el promedio: ${promedio}`);