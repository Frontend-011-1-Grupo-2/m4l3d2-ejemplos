const arreglo = [20, 24, 56, 22];

let totalFor = 0;
console.log('---- for ----');
for (let i = 0; i < arreglo.length; i++) {
  console.log(`Sumándole ${arreglo[i]} al total actual: ${totalFor}`);
  totalFor += arreglo[i];
}
console.log(totalFor);

let totalForEach = 0;
console.log('---- forEach ----');

arreglo.forEach(function (numero) {
  console.log(`Sumándole ${numero} al total actual: ${totalForEach}`);
  totalForEach += numero;
});
console.log(totalForEach);

let totalMap = 0;
console.log('---- map ----');
arreglo.map((numero) => {
  console.log(`Sumándole ${numero} al total actual: ${totalMap}`);
  totalMap += numero;
});

console.log(totalMap);

// Método reduce()
console.log('---- BONUS del profe: reduce ----');

const totalReduce = arreglo.reduce(function (total, numero) {
  console.log(`Sumándole ${numero} al total actual: ${total}`);
  return (total = total + numero);
}, 0);
console.log(totalReduce);
