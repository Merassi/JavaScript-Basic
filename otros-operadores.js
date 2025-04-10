// operadores de auto incremento y auto decremento

let a = 1;

// incrementar el valor de la variable a en uno 
a++; // a = a + 1;
++a; // a = a + 1;

// Rpta: Cuando el operador de auto incremento o auto decremento está solito en una sentencia, da exactamente igual que se incremente/decremente antes o después.

function sumar(op1, op2) {
    return op1 + op2;
}

let x = 4, y = 4;

const resultado = sumar(++x, ++y);
console.log("Utilizando el operador de auto incremento antes");
console.log(`x: ${x} y: ${y} resultado: ${resultado}`);

x = 10;
y = 10;

resultado2 = sumar(x++, y++);
console.log("Utilizando el operador de auto incremento antes");
console.log(`x: ${x} y: ${y} resultado: ${resultado2}`);