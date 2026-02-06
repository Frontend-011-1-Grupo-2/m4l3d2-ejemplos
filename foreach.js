const frutas = ['Manzana', 'Pera', 'Uva'];

const quePasa = frutas.forEach((fruta) => fruta);

console.log(quePasa);

// Comparando for, foreach y map
const usuarios = ['Thiare', 'Susana', 'Roxana', 'Jimena'];
const usuariosFormateados = [];

usuarios.forEach(function (usuario) {
  const nuevoUsuario = {
    nombre: usuario,
    nacionalidad: 'Chilena',
  };
  usuariosFormateados.push(nuevoUsuario);
});

console.log(usuariosFormateados);
console.log('Array original', usuarios);
