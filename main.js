console.log("Estoy conectada?")

let booleano1 = true;
let booleano2 = false;

// 1. Crear una variable booleanoAnd

let booleanoAnd = booleano1 && booleano2; 
console.log(booleanoAnd);  

// 2. Crear variable booleanoOr

let booleanoOr = booleano1 || booleano2;  // OR lógico: es true si al menos uno es true
console.log(booleanoOr); 

// 3. Crear variable booleanoNot

let booleanoNot = !booleano1;  // NOT lógico: invierte el valor de booleano1
console.log(booleanoNot);  // Resultado: false

// 4. Crear variable booleanoMix0

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));  
console.log(booleanoMix0);  // Resultado: true

// 5. Crear variable valorDivision

let valorDivision = (17 / 3).toFixed(2);  // Dividimos 17 entre 3 y limitamos a 2 decimales
console.log(valorDivision);  // Resultado: 5.67

// 6. Crear variable valorResto

let valorResto = 17 % 7;  // Obtenemos el resto de la división de 17 entre 7
console.log(valorResto);  // Resultado: 3

// 7. 

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

// 8.

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

// 9.

let contarHasta10 = 0;  // Inicializamos la variable en 0

while (contarHasta10 !== 10) {
    contarHasta10++;  // Incrementamos la variable en 1
}

console.log(contarHasta10);  // Resultado: 10

// 10.


let diaFestivo = true;  // Variable booleana

// Ternario para verificar el día festivo
diaFestivo ? console.log('Hoy no trabajo') : console.log('Hoy trabajo');

// 11.

let arrayBucle = [];  // Creamos un array vacío

for (let i = 4; i <= 18; i++) {
    arrayBucle.push(i);  // Añadimos números del 4 al 18 al array
}

console.log(arrayBucle);  // Resultado: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

// 12.


let resultado = 0;  // Inicializamos la variable resultado en 0

for (let numero of arrayBucle) {
    resultado += numero;  // Suma todos los elementos del array
}

console.log(resultado);  // Resultado: Suma de todos los elementos

// 13.

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


