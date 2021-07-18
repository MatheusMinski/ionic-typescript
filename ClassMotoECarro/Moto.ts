import { Automovel } from "./Automovel";

class Moto extends Automovel {
    private passageiros: number;

    constructor(marca: string, modelo: string, cor: string, potencia: string, passageiros: number) {
        super(marca, modelo, cor, potencia);

        this.passageiros = passageiros;
    }

    public getPassageiros(): number {
        return this.passageiros;
    }

    public setPassageiros(passageiros: number): void {
        this.passageiros = passageiros;
    }

    public ligar() {
        console.log('Pai ta on');
        console.log('Atributos da motoca: ', super.get_marca(), super.get_modelo(), super.get_cor(), super.get_potencia(), this.getPassageiros());
    }
    public acelerar() {
        console.log('Nannanananana pá');
    }
    public frear() {
        console.log('Freio só pra dar IRL');
    }
    public darGrau() {
        console.log('Mlk zika d+ slk tiu');
    }
}
export { Moto };