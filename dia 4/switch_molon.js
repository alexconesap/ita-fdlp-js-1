let nota = 10;

switch (true) {
    case nota < 5:
        alert("suspendido!");
        break;

    case nota < 6:
        alert("suficiente!");
        break;

    case nota < 7:
        alert("bien!");
        break;

    case nota < 9:
        alert("notable!");
        break;

    case nota >= 9 && nota <= 10:
        alert("excelente!");
        break;

    default:
        alert("No entiendo! " + String.fromCodePoint(0x1f590));
        break;
}