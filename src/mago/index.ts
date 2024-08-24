import CriarPersonagem from "../CriarPersonagem";

export default class Mago extends CriarPersonagem {
  constructor(nome: string, inteligencia: number) {
    super(nome);
    this.inteligencia = inteligencia;
  }

  atacar(): void {
    console.log(
      `Mago ${this.nome} atacou com inteligência: ${this.inteligencia}`
    );
  }
  defender(): void {
    console.log(
      `Mago ${this.nome} defendeu com inteligência: ${this.inteligencia}`
    );
  }
}
