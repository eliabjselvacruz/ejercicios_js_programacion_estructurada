// 1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola. 

let nombre = 'Eliab Javier Selva Cruz';
console.log(nombre);

// 2. Declara dos variables edad y ciudad y muéstralas juntas en un solo console.log.

let edad = 30;
let ciudad = "Juigalpa";
console.log(`Edad: ${edad}, Ciudad: ${ciudad}`);

// 3. Declara una constante PI con el valor 3.1416 y muéstrala en consola. 
const PI = 3.1416;
console.log("Valor de PI: " + PI);

// 4. Declara tres variables con valores numéricos y calcula su promedio.
let a = 50;
let b = 70;
let c = 90;
let promedio = (a + b + c) / 3;
console.log(promedio);

// 5. Declara una variable esMayorDeEdad con un valor booleano y muéstrala.

let esMayorDeEdad = true;
console.log("¿Es mayor de edad? " + esMayorDeEdad);

// 6. Declara dos números y muestra su suma. 

let n1 = 15;
let n2 = 25;
let suma = n1 + n2;
console.log(suma); 

// 7. Declara dos números y muestra su resta, multiplicación y división. 

let num1 = 100;
let num2 = 20;

let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

console.log(`Resta: ${resta}, Multiplicación: ${multiplicacion}, División: ${division}`);


// 15.  Crea una función esPar que reciba un número y retorne true si es par, false si no lo es.

function esPar(numero) {
  return numero % 2 === 0;
}

console.log(esPar(11));


// 19. Crea una función flecha mayorDeDos que reciba dos números y retorne el mayor. 

let mayorDeDos = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
}

console.log(mayorDeDos(10, 20));

// 16. Crea una función areaRectangulo que reciba base y altura y retorne su área.

function areaRectangulo(base, altura) {
  return base * altura;
} 

console.log(areaRectangulo(5, 10));







let saludoAWalter = (apellido) => {
  return `Hola Walter ${apellido}, ¿cómo estás?`;
}

console.log(saludoAWalter("Himanol"));


let saludoAWalter2 = apellido => `Hola Walter ${apellido} Sequeira, ¿cómo estás?`;

console.log(saludoAWalter2("Himanol"));
