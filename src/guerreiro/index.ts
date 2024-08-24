import CriarPersonagem from "../CriarPersonagem";

export default class Guerreiro extends CriarPersonagem {
  constructor(nome: string, forca: number) {
    super(nome);
    this.forca = forca;
  }

  atacar(): void {
    console.log(`Guerreiro ${this.nome} atacou com força: ${this.forca}`);
  }
  defender(): void {
    console.log(`Guerreiro ${this.nome} defendeu com força: ${this.forca}`);
  }
}
