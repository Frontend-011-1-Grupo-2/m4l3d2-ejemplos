/* 
Crear un programa que recorra una matriz bidimensional utilizando un ciclo anidado, y dentro de ese ciclo, implementaremos una estructura de control con continue para omitir ciertos elementos y break para detener el ciclo cuando se cumpla una condición. Al final, se imprimirá un mensaje si se ha encontrado un elemento específico.

1. Crear una matriz bidimensional con números aleatorios(3x3).
2. Iterar sobre la matriz con un ciclo anidado.
3. Aplicar la estructura de control continue dentro del ciclo anidado. (Si un número es mayor que 5, omitir esa iteración.)
*/

// Dimensiones de la matriz (3x3)
const filas = 3;
const columnas = 3;
let matriz = [];
/* 
[
  [1,2,3]
  [1,2,3]
  [1,2,3]
]
*/

for (let i = 0; i < filas; i++) {
  // Recorremos cada fila (piso del edificio)
  matriz[i] = [];
  for (let j = 0; j < columnas; j++) {
    // Recorremos cada columna (departamento del piso)
    matriz[i][j] = Math.floor(Math.random() * (10 - 1) + 1); // numero entre 1 y 10
  }
}

console.log('Matriz generada:');
console.log(matriz[0]);
console.log(matriz[1]);
console.log(matriz[2]);

// Accediendo a elemento central en la matriz
console.log(matriz[1][1]);

for (let i = 0; i < matriz.length; i++) {
  // Filas de la matriz = i
  console.log(`Entrando a fila ${i}`);
  for (let j = 0; j < matriz[i].length; j++) {
    // Columnas de la fila actual = j
    console.log(`Entrando en columna ${j}`);
    console.log(`Evaluando número: ${matriz[i][j]}`);

    if (matriz[i][j] === 7) {
      console.log(`Encontrado el número maldito. HUIR 🏃💨`);
      break; // nos saca del ciclo, no hay más vueltas
    }

    if (matriz[i][j] > 5) {
      console.log(`Saltando vuelta, el número ${matriz[i][j]} es mayor a 5`);
      continue; // salta esta vuelta del ciclo, pero pasa a la siguiente
    }
  }
}
