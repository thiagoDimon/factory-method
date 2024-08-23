import CriarPersonagem from "../CriarPersonagem";

export default class Arqueiro extends CriarPersonagem {
  constructor(nome: string, destreza: number) {
    super(nome);
    this.destreza = destreza;
  }

  atacar(): void {
    console.log("Arqueiro atacou com destreza: " + this.destreza);
  }
  defender(): void {
    console.log("Arqueiro defendeu com destreza: " + this.destreza);
  }
}
