class Tabuada {
  multiplicador;

  constructor(multiplicador) {
    this.multiplicador = multiplicador;
  }
  criarTabuada() {
    for (let i = 1; i <= 10; i++) {
      let tabuada = this.multiplicador * i;
      console.log(`--------------`);
      console.log(`| ${this.multiplicador} x ${i} = ${tabuada} |`);
      console.log(`--------------`);
    }
  }
}
const tabuadaDo09 = new Tabuada(9);
tabuadaDo09.criarTabuada();
