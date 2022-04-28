function valida_examen(nota) {
    if (nota < 5) {
        return "Suspès";
    } else if (nota >= 5 && nota < 7) {
        return "Aprovat";
    } else if (nota >= 7 && nota < 8) {
        return "Notable";
    } else {
        return "Excel·lent";
    }
}

function trimestre_segun_el_mes(mes) {
    let trimestre;
    switch (mes) {
        case 1:
        case 2:
        case 3:
            trimestre = 1;
            break;
        case 4:
        case 5:
        case 6:
            trimestre = 2;
            break;
        case 7:
        case 8:
        case 9:
            trimestre = 3;
            break;
        case 10:
        case 11:
        case 12:
            trimestre = 4;
            break;
    }
    return trimestre;
}