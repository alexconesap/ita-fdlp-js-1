function comprobar_edad_para_conducir(edad) {
  if (edad > 18) {
    return "Válido para conducir";
  } else {
    return "Te faltan algunos años";
  }
}

let edad_leida = prompt("Entrada una edad");
let mi_edad = Number(edad_leida);

console.log(edad_leida);
console.log(mi_edad);
console.log(comprobar_edad_para_conducir(mi_edad));

function sumar(x, y) {
  return x + y;
}

console.log(sumar(1, 2));
console.log(sumar(4, 4));
