console.log("Estoy conectada?")

// Declaramos las dos variables booleanas iniciales

let booleano1 = true;
let booleano2 = false;


// AND lógico (&&) solo es true si ambos son true
let booleanoAnd = booleano1 && booleano2;
console.log(booleanoAnd);  // Resultado: false


// 1. Crear una variable booleanoAnd
let booleanoAnd = booleano1 && booleano2;  // AND lógico: solo es true si ambos son true
console.log(booleanoAnd);  // Resultado: false

// 2. Crear variable booleanoOr
let booleanoOr = booleano1 || booleano2;  // OR lógico: es true si al menos uno es true
console.log(booleanoOr);  // Resultado: true

// 3. Crear variable booleanoNot
let booleanoNot = !booleano1;  // NOT lógico: invierte el valor de booleano1
console.log(booleanoNot);  // Resultado: false

// 4. Crear variable booleanoMix0
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));  
// Evaluamos la expresión compuesta
console.log(booleanoMix0);  // Resultado: true

Dadas 2 variables booleanas:
booleano1 = true;
booleano2 = false;

/* Crear una variable booleanoAnd cuyo valor sea la comparación booleana booleano1 AND booleano2.


Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1.



2. Operadores

Crear variable valorDivision cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado.
Crear variable valorResto cuyo valor sea el resto de 17 entre 7.
3. Lógica de programación
Crea una variable A cuyo valor sea el número 9, y después crea una variable B cuyo valor sea un string con el número 9. Desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”. ¿Qué pasa si en vez de tener A == B, comprobamos que A === B?
Crea una variable mochila que sea un array de elementos. Desarrolla la lógica para que: a) si mochila tiene más de 10 elementos, muestre por consola el mensaje “No puedo cargar con tantas cosas”; b) si mochila contiene entre 10 y 2 elementos, se muestre por consola “Qué bien voy con mi mochila”, y, si no,  muestre por consola “Creo q no necesito una mochila”.
Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10.
Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario en el que si diaFestivo es true devuelva un console.log de ‘Hoy no trabajo’ y, si es false, devuelva ‘Hoy trabajo’.
Crea una variable arrayBucle tipo array vacía y rellénala con números del 4 al 18 utilizando un bucle.
Recorre la variable creada anteriormente arrayBucle, suma todos sus elementos y guárdalos en una variable de nombre resultado.
Dado el siguiente array [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle for of y muestra por consola todos sus elementos. Después, recórrelo utilizando el bucle for in mostrando también por consola todos sus elementos.

Crea un bucle utilizando while que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3.

let booleano1 = true;   // Declaramos la primera variable booleana como true
let booleano2 = false;  // Declaramos la segunda variable booleana como false

// 1. Crear una variable booleanoAnd
let booleanoAnd = booleano1 && booleano2;  // AND lógico: solo es true si ambos son true
console.log(booleanoAnd);  // Resultado: false

// 2. Crear variable booleanoOr

(Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1  OR booleano2.)

let booleanoOr = booleano1 || booleano2;  // OR lógico: es true si al menos uno es true
console.log(booleanoOr);  // Resultado: true

// 3. Crear variable booleanoNot
let booleanoNot = !booleano1;  // NOT lógico: invierte el valor de booleano1
console.log(booleanoNot);  // Resultado: false

// 4. Crear variable booleanoMix0 (Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2).)

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));  

// Evaluamos la expresión compuesta

console.log(booleanoMix0);  // Resultado: true */

// 1. Crear variable valorDivision
let valorDivision = (17 / 3).toFixed(2);  // Dividimos 17 entre 3 y limitamos a 2 decimales
console.log(valorDivision);  // Resultado: 5.67

// 2. Crear variable valorResto
let valorResto = 17 % 7;  // Obtenemos el resto de la división de 17 entre 7
console.log(valorResto);  // Resultado: 3

let A = 9;  // Variable A de tipo número
let B = "9";  // Variable B de tipo string

// Comparación con ==
if (A == B) {
    console.log("Son iguales");  // Resultado: Se muestra porque == compara solo valores
}

// Comparación con ===
if (A === B) {
    console.log("Son estrictamente iguales");
} else {
    console.log("No son estrictamente iguales");  // Resultado: Se muestra porque === compara tipo y valor
}
let mochila = ['libro', 'lápiz', 'goma'];  // Ejemplo de mochila con 3 elementos

// a) Más de 10 elementos
if (mochila.length > 10) {
    console.log("No puedo cargar con tantas cosas");
} 
// b) Entre 2 y 10 elementos
else if (mochila.length >= 2 && mochila.length <= 10) {
    console.log("Qué bien voy con mi mochila");
} 
// c) Menos de 2 elementos
else {
    console.log("Creo que no necesito una mochila");
}
let contarHasta10 = 0;  // Inicializamos la variable en 0

while (contarHasta10 !== 10) {
    contarHasta10++;  // Incrementamos la variable en 1
}

console.log(contarHasta10);  // Resultado: 10

let diaFestivo = true;  // Variable booleana

// Ternario para verificar el día festivo
diaFestivo ? console.log('Hoy no trabajo') : console.log('Hoy trabajo');

let arrayBucle = [];  // Creamos un array vacío

for (let i = 4; i <= 18; i++) {
    arrayBucle.push(i);  // Añadimos números del 4 al 18 al array
}

console.log(arrayBucle);  // Resultado: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

let resultado = 0;  // Inicializamos la variable resultado en 0

for (let numero of arrayBucle) {
    resultado += numero;  // Suma todos los elementos del array
}

console.log(resultado);  // Resultado: Suma de todos los elementos

let palabras = ['Con', 'Sofia', 'aprendiendo', 'bucles'];  // Array de palabras

// Usando for of
for (let palabra of palabras) {
    console.log(palabra);  // Muestra cada palabra
}

// Usando for in
for (let index in palabras) {
    console.log(palabras[index]);  // Muestra cada palabra usando el índice
}

let i = 1;  // Inicializamos el contador

while (i <= 20) {
    if (i % 3 === 0) {  // Comprobamos si i es múltiplo de 3
        console.log("Patata");  // Imprimimos "Patata"
    }
    i++;  // Incrementamos el contador
}


