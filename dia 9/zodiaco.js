function get_zodiac(dia, mes) {
  let el_mes_en_el_array = mes - 1;
  var signos = [
    "Capricornio", // 1
    "Acuario",
    "Piscis",
    "Aries",
    "Tauro",
    "Geminis",
    "Cáncer",
    "Leo",
    "Virgo",
    "Libra",
    "Escorpion",
    "Sagitario", // 12
    "Capricornio",
  ];

  var ultimo_dia = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];

  return dia > ultimo_dia[el_mes_en_el_array]
    ? signos[el_mes_en_el_array * 1 + 1]
    : signos[el_mes_en_el_array];
}

console.log(get_zodiac(6, 8));
console.log(get_zodiac(1, 1));
console.log(get_zodiac(30, 12));

// '' 0
// 1 Capricorn-Capricornio (22.12 — 19.01)
// 2 Aquari-Acuario (20.01 — 18.02)
// 3 Peixos-Piscis (19.02 — 20.03)
// 4 Àries-Aries (21.03 — 19.04)
// 5 Taure-Tauro (20.04 — 20.05)
// 6 Bessons-Géminis (21.05 — 20.06)
// 7 Cranc-Cáncer (21.06 — 22.07)
// 8 LLeó-Leo (23.07 — 22.08)
// 9 Verge-Virgo (23.08 — 22.09)
// 10 Balança-Libra (23.09 — 22.10)
// 11 Escorpi-Escorpio (23.10 — 21.11)
// 12 Sagitario-Sagitario (22.11 — 21.12)
