// declaracion de variables en java script 

let nombre = "Eva";
let edad = 25;
let salario = 45000.50

// Notacion camel case 

let primerApellido = "Miró";
let tieneOrdenador = true;

// Lo que se sugiere es: 
// Si consideras que la variable declarada no va a cambiar su visualViewport, utiliza const en lugar de let

const segundoApellido = "Lévêque";

// ¿Cómo mostrar informacion en la pantalla (consola del navegador) de los resultados del codigo que estamos desarrollando?
// Tambien en la terminal si tenemos el node js instalado.

// La consola un objeto(como todo en javascript) y los objetos tienen propiedades que
// lo caracterizan a las cuales se acceden a traves del operador punto (.)

console.log("Hola mundo, desde la consola de java script");

// console.log("Mi nombre es: ", nombre);


// Template literal(Entre backtick):

console.log(`Mi nombre es: ${nombre} y mi primer apellido es ${primerApellido}`);

// el tipo Array vamos a ver ahora

const coche1 = "Renault";
const coche2 = "Citroen";

// Array: Es un identificador, una variable, que en lugar de hacer referencia a una ubicacion de memoria hace referencia a una zona de memoria, donde se almacenan valores del mismo tipo

// ¿Cómo se declara el Array?
// Se declara usando una de las palabras reservadas, como:
let coches = ["Ford", "Ferrari", "Mercedez"];

const coches2 = [1, 2, 3, 4];

// ¿Cómo se accede a los elementos del Array?
// Rpta: Utilizando un índice que comienza con el valor de cero:

console.log(`El primer elemento del array de coches es ${coches[0]}`);

// modificar un elemento del array de coches
coches[0] = "BMW";

console.log(`El nuevo primer elemento del array es ${coches[0]}`);

// Funcion(function): Es un bloque (todas las sentencias que estan entre llaves) sentencias que se declara una vez y puede ser llamado todas las veces que sea necesario desde otras partes del código.
// Cada vez que se tenga que repetir un grupo de sentencias/bloque, al menos una vez más, es una buena práctica de programación crear una funcion, que también nos ayuda a la hora de modificar, darle mantenimiento a dicho código.

// existen funciones bluit-in(incluido en el nucleo(core) del lenguaje javascript), es decir, que no has creado tu, el desarrollador, que no sabes ni lo que tienen dentro, pero puedes invocar(llamar) a dicha funcion para que haga su trabajo, ejemplo: la funcion log() del objeto console, que hemos estado utilizando. Cuando las funciones están dentro de un objeto, se les llama metodo

// El desarrollador tambien puede crear sus propias funciones, como veremos a continuación:

// Declaramos la funcion
function sumar1() {
    console.log(3 + 3);
}

// Llamar o invocar a la funcion 

sumar1();

function sumar2(operando1, operando2) {
    let resultado = operando1 + operando2;
    console.log(resultado)
}

sumar2(3, 3);

// funcion que retorna el resultado 

function sumar3(op1, op2) {
    return op1 + op2;
}

const result = sumar3(4, 5);

console.log(`Resultado de la invocacion de la funcion sumar3 es ${result}`);

// objetos: Creacioin de un objeto literal

// ¿Qué es un objeto?

// Es una estructura que simula algun objeto de la vida real, y el objetivo es encapsular todo lo que tiene que ver con el mismo en un solo sitio.

// Lo que caracteriza al objeto se le llama las propiedades del objeto.

// Y lo que puede hacer el objeto, las acciones que puede llevar a cabo, serían los métodos del objeto, que son funciones pero que están dentro del objeto.

const persona = {
    nombre: "Alberto",
    primerApellido: "Martinez",
    segundoApellido: "Gonzales",
    nombreCompleto: function() {
        // this es una palabra reservada
        return this.nombre + primerApellido + segundoApellido;
    }
};

console.log(persona.nombre);
console.log(persona.primerApellido);

console.log(`Nombre completo de la persona es: ${persona.nombreCompleto()}`);
