class Transaccio {
  constructor(data, valor, tipus) {
    this.data = data;
    this.valor = valor;
    this.tipus = tipus;
    this.saldo = 0;
  }
  toString() {
    return this.tipus + " " + this.data + " " + this.valor + " " + this.saldo;
  }
}
class Retirada extends Transaccio {
  constructor(data, valor) {
    super(data, valor, "retirada");
  }
}
class Ingres extends Transaccio {
  constructor(data, valor) {
    super(data, valor, "ingres");
  }
}
class Cuenta {
  constructor() {
    this.transaccions = [];
  }

  getSaldo() {
    if (this.transaccions.length == 0) {
      return 0;
    }
    let darrera_transaccio = this.transaccions[this.transaccions.length - 1];
    return darrera_transaccio.saldo;
  }
  retirar(valor, data) {
    let t = new Retirada(data, valor);
    this.#guardar_transaccion(t, -valor);
  }
  ingressar(valor, data) {
    let t = new Ingres(data, valor);
    this.#guardar_transaccion(t, valor);
  }
  #guardar_transaccion(transaccio, valor) {
    let saldo = this.getSaldo();
    saldo = saldo + valor;
    transaccio.saldo = saldo;
    this.transaccions.push(transaccio);
  }
  llistar(ui) {
    let totes = "";
    this.transaccions.forEach((t) => (totes = totes + " " + t + "<br/>"));
    ui.innerHTML = totes;
  }
}
