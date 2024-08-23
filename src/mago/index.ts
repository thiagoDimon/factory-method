import CriarPersonagem from "../CriarPersonagem";

export default class Mago extends CriarPersonagem {
  constructor(nome: string, inteligencia: number) {
    super(nome);
    this.inteligencia = inteligencia;
  }

  atacar(): void {
    console.log("Guerreiro atacou com inteligência: " + this.inteligencia);
  }
  defender(): void {
    console.log("Guerreiro defendeu com inteligência: " + this.inteligencia);
  }
}
