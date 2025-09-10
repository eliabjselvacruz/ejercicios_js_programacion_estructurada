//Ejercicio1
let agrearElementoFinal = (arreglo, elementos) => {
  arreglo.push(elementos);
  return arreglo;
}

let numeros = [1, 2, 3];
console.log(agrearElementoFinal(numeros, 8));

//Ejercicio2
let agrearElementoInicio = (arreglo, elementos) => {
  arreglo.unshift(elementos);
  return arreglo;
}

let numeros2 = [1, 2, 3];
console.log(agrearElementoInicio(numeros2, 0));

//Ejercicio3
let eliminarElementoFinal = (arreglo) => {
  let ultimo = arreglo.pop();
  return ultimo;
}

let eliminarElementoFinal2 = arreglo => ultimo = arreglo.pop();

let numeros3 = [24, 32, 89, 51, 1000];
console.log(eliminarElementoFinal(numeros3));

//Ejercicio
let eliminarElementoInicio = (arreglo) => {
  let primerElemento = arreglo.shift();
  return primerElemento;
}

let frutas = ['manzana', 'banana', 'pera', 'kiwi'];
console.log(eliminarElementoInicio(frutas));
console.log(frutas);