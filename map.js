const usuarios = ['Thiare', 'Susana', 'Roxana', 'Jimena'];

const usuariosFormateados = usuarios.map(function (usuario) {
  return {
    nombre: usuario,
    nacionalidad: 'Chilena',
  };
});

console.log('Nuevo array de usuarios:', usuariosFormateados);

const usuariosEstadoCivil = usuarios.map(function (usuario) {
  return `Srta. ${usuario}`;
});

console.log('Con estado civil:', usuariosEstadoCivil);

console.log('Array original', usuarios);

const precios = [9990, 12990, 125000];
const preciosDescuento = precios.map((precio) => precio * 0.9);
console.log(preciosDescuento);
