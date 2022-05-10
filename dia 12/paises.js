class Country {
  #iso_code;
  #name;
  #population;
  #playing = false;

  constructor(iso_code, name, population = 0) {
    this.#iso_code = iso_code;
    this.#name = name;
    this.#population = population;
  }

  play_hymn() {
    if (!this.#playing) {
      this.#playing = true;
      let arxiu_so = this.#iso_code + ".ogg";
      let himno = new Audio(arxiu_so);
      himno.play();
    }
  }

  getIsoCode() {
    return this.#iso_code;
  }
}

class Countries {
  #paises;

  constructor() {
    this.#paises = [];
  }

  mete(country_obj) {
    if (this.get(country_obj.getIsoCode())) {
      return;
    }
    this.#paises.push(country_obj);
  }

  get(iso_code) {
    return this.#paises.find(
        (e) => e.getIsoCode() == iso_code
    );
  }

  list() {
    return this.#paises;
  }
}

// Creamos un par de objetos de tipo Country
let france = new Country("FR", "France", 59_000_000);
let it = new Country("IT", "Italy", 50_000_000);

// Creamos una colección de países (Countries)
let paises = new Countries();
paises.mete(france);
paises.mete(it);
paises.mete(it);
console.log(paises.list());

function sample_play_hymn() {
  let fr_obj = paises.get("FR");
  fr_obj && fr_obj.play_hymn();
}
