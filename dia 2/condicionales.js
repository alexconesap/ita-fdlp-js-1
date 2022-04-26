let edad = 40;
let experiencia = 3;

let valido = (edad >= 25 && experiencia >= 1 && experiencia <= 3) || edad >= 40;

if (valido) {
  console.log("Es valido");
}
