import CriarPersonagem from "../CriarPersonagem";

export default class Arqueiro extends CriarPersonagem {
  constructor(nome: string, destreza: number) {
    super(nome);
    this.destreza = destreza;
  }

  atacar(): void {
    console.log(`Arqueiro ${this.nome} atacou com destreza: ${this.destreza}`);
  }
  defender(): void {
    console.log(
      `Arqueiro ${this.nome} defendeu com destreza: ${this.destreza}`
    );
  }
}
