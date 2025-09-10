let arreglo = [1, 2, 3, "texto", true];

const arreglo2 = [1, 2, 3, "texto", true];

let arreglo3 = new Array(1, 2, 3);

let arreglo4 = []; 

let arreglo5 = [{}, {}, {}, {}]; 

let arreglo6 = [{"nombre":"Eliab Selva", "edad":19}, {}, {}, {}];

let arreglo7 = [[{},{}], ["A", 1, 2], [true, false]];


let numeros = [1, 2, 3]; 
let longitud = numeros.push(4, 5); 
console.log(numeros); // [1, 2, 3, 4, 5] 
console.log(longitud); // 5 

let letras = ['Selva', 'Cruz']; 

let longitudletras = letras.unshift('Eliab', 'Javier'); 
console.log(letras);
console.log(longitudletras);

let frutas = ['manzana', 'banana', 'naranja', ['kiwi', 'mango']]; 
let ultima = frutas.pop(); 
console.log(frutas); // ['manzana', 'banana'] 
console.log(ultima); // Naranja

let numeros2 = [10, 20, 30, 20, 40]; 

let indice = numeros2.indexOf(20); // 1 
let indiceDesde2 = numeros2.indexOf(20, 2); // 3 
console.log(indice); // 1 
console.log(indiceDesde2); // 3 

let nombres = ["Eliab", "Javier", "Selva", "Cruz"]; 
console.log(nombres.length); // 4

nombres.length = 1; // Trunca
console.log(nombres); // ["Eliab"]


nombres.length = 4; // Extiende a ["Eliab", undefined, undefined, undefined, undefined]
console.log(nombres); // ["Eliab", undefined, undefined, undefined, undefined] 
console.log(nombres.length);


let numeros3 = [3, 1, 4, 2]; 
numeros3.sort((a, b) => a - b); // Orden ascendente 
console.log(numeros3); // [1, 2, 3, 4]

let caracteres = ['z', 'a', 'x', 'm', 'j', 'y'];
caracteres.sort();
console.log(caracteres);

let cadena = ['z', 2, 'a', 10, 'x', 5];
cadena.sort();
console.log(cadena); // [10, 2, 5, 'a', 'x', 'z']

let palabras = [1,2,3,4,5,'hola','mundo']; 
let texto = palabras.join('');
console.log(texto); // 'hola mundo'

let arr1 = [1, 2]; 
let arr2 = [3, 4]; 
let combinado = arr1.concat(arr2, [5, 6, 9], 'Eliab');
arr1.push(arr2, [5, 6, 9], 'Eliab');
console.log(arr1);
console.log(combinado); // [1, 2, 3, 4, 5] 


let colores = ['rojo', 'verde', 'azul']; 
colores.forEach(color => console.log(color)); 
// Imprime: rojo, verde, azul 

for (let color of colores) {
    console.log(color);
}

for(let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
}


let numeros5 = [1, 2, 3]; 
let dobles = numeros5.map(numero => numero * 2); 
console.log(dobles); // [2, 4, 6]

let datos = [53, 21, 22, 51, 37, 88, 1000, 4]; 
let impares = datos.filter(x => x % 2 !== 0); 
console.log(impares); 



let precios = [40, 20, 30, 40]; 
let suma = precios.reduce((acumulador, valorActual) => acumulador + valorActual, 0); 
console.log(suma); // 130












