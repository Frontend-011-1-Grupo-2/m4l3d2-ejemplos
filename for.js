// Comparando for, map y forEach
const usuarios = ['Thiare', 'Susana', 'Roxana', 'Jimena'];

const usuariosFormateados = [];

for (let i = 0; i < usuarios.length; i++) {
  const nuevoUsuario = {
    nombre: usuarios[i],
    nacionalidad: 'Chilena',
  };
  usuariosFormateados.push(nuevoUsuario);
}

console.log(usuariosFormateados);
console.log(usuarios);
