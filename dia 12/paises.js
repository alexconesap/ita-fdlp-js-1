class Country {
    #iso_code;
    #name;
    #population;

    constructor(iso_code, name, population = 0) {
        this.#iso_code = iso_code;
        this.#name = name;
        this.#population = population;
    }

    play() {
        let himno = new Audio(this.#iso_code + '.mp3');
        himno.play();
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

    mete (country_obj) {
        if (this.get(country_obj.getIsoCode())) {
            return;
        }
        this.#paises.push(country_obj);
    }

    get (iso_code) {
        return this.#paises.find(
            (e) => e.getIsoCode() == iso_code
        );
    }

    list() {
        return this.#paises;
    }
}

let france = new Country("FR", "France", 59_000_000);
let andorra = new Country("AN", "Andorra", 150_000);

let paises = new Countries();
paises.mete(france);
paises.mete(andorra);
paises.mete(andorra);
paises.mete(andorra);
console.log(paises.list());

console.log(paises.get("FR"));

//france.play();

