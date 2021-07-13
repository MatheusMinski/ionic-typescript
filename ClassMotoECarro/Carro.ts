import internal from "stream";

class Carro extends Automovel {
    private portas: number;

    constructor(marca: string, modelo: string, cor: string, potencia: string, portas: number) {
        super(marca, modelo, cor, potencia);

        this.portas = portas;
    }

    public getPortas(): number {
        return this.portas;
    }

    public setPortas(portas: number): void {
        this.portas = portas;
    }


    public ligar() {
        console.log('Carro ligou!');
    }
    public acelerar() {
        console.log('Vrum vrum');

    }
    public frear() {
        console.log('Freiaa, ó a véia atravessando na frente');

    }
    public transportar() {
        console.log('Sofá da mãe ta embarcado, só levar');
    }
}
export { Carro };