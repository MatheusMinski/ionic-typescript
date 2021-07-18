import { Carro } from "./Carro";
import { Moto } from "./Moto";

var moto = new Moto("ducati", "v4", "branca", "180cv", 1);

console.log('La motoquita\n');

moto.ligar();
moto.acelerar();
moto.frear();
moto.darGrau();


console.log('\nEl carrito \n');

var carro = new Carro("R8", "V8", "Branco pérola", "600HP", 2);

carro.ligar();
carro.acelerar();
carro.frear();
carro.transportar();