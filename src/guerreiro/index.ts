import CriarPersonagem from "../CriarPersonagem";

export default class Guerreiro extends CriarPersonagem {
  constructor(nome: string, forca: number) {
    super(nome);
    this.forca = forca;
  }

  atacar(): void {
    console.log("Guerreiro atacou com força: " + this.forca);
  }
  defender(): void {
    console.log("Guerreiro defendeu com força: " + this.forca);
  }
}
