function probar_edad() {
    let edad;
    let numeroInvalido = isNaN(
        document.getElementById('edad').value
    );

    if (numeroInvalido) {
        console.log('No es un numero!');
        edad = 0;
    } else {
        console.log('Es un numero');
        edad = Number(document.getElementById('edad').value);
    }

    console.log(edad);
}