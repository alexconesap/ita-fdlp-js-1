let a = 0;
a = "hola";
a = true;

console.log(a);

{
  let hola = "Hola";
  hola = hola + " Mundo!";

  console.log(hola);
}

{
  let hola = "Hola";
  hola += " Mundo!";

  console.log(hola);
}

{
  let x = 0;

  x += 2;
  console.log(x);

  x -= 2;
  console.log(x);

  x = 2;
  console.log(x);

  x *= 5;
  console.log(x);

  x **= 2;
  console.log(x);
}

{
  let edad = 40;
  let experiencia = 3;

  let valido =
    (edad >= 25 && experiencia >= 1 && experiencia <= 3) || edad >= 40;

  // Opción larga y fea
  let a = "";
  if (valido) {
    a = "Cierto";
  } else {
    a = "Falso";
  }
  console.log(a);

  // Opción corta y bonita
  let b = valido ? "Cierto" : "Falso";
  console.log(b);
}
