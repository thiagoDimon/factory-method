export default abstract class CriarPersonagem {
  protected nome: string;
  protected forca: number = 0;
  protected inteligencia: number = 0;
  protected destreza: number = 0;

  constructor(nome: string) {
    this.nome = nome;
  }

  abstract atacar(): void;
  abstract defender(): void;
}
