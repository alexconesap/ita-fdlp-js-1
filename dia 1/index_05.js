/* 
   Nótese la apertura de llaves en este script
   de cara a que la declaración de la variable edad
   quede limitada a este 'scope'
   Por su parte, la variable global_1, que incluso ha
   sido definida en el archivo .html se vuelve a 
   redeclarar sin problema y su valor alterado de forma
   global.
*/
{ // tras esta llave empieza el scope
    var global_1 = 3;
    var global_1 = 5;
    let edad = 10;

    console.log("Edad Inicial: " + edad);

    if (true) {
        let edad = 10000;
        console.log("Edad Dentro del if " + edad);
    }

    console.log("Edad Final: " + edad);
} // al cerrar la llave finaliza el scope y las variables 'let' se eliminan