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
    switch (mes) {
        case 1:
        case 2:
        case 3:
            return 1;
        case 4:
        case 5:
        case 6:
            return 2;
        case 7:
        case 8:
        case 9:
            return 3;
        case 10:
        case 11:
        case 12:
            return 4;
    }
}