import Guerreiro from "./guerreiro";
import Arqueiro from "./arqueiro";
import Mago from "./mago";

const guerreiro = new Guerreiro("Artron", 10);
guerreiro.atacar();
guerreiro.defender();

console.log("=======================================");

const arqueiro = new Arqueiro("Monbus", 15);
arqueiro.atacar();
arqueiro.defender();

console.log("=======================================");

const mago = new Mago("Gendalf", 20);
mago.atacar();
mago.defender();
