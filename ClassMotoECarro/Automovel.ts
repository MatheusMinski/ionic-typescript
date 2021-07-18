class Automovel {
    private _marca: string;
    private _modelo: string;
    private _cor: string;
    private _potencia: string;


    constructor(marca: string, modelo: string, cor: string, potencia: string) {
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
        this._potencia = potencia;
    }


    public get_marca(): string {
        return this._marca;
    }

    public set_marca(_marca: string): void {
        this._marca = _marca;
    }

    public get_modelo(): string {
        return this._modelo;
    }

    public set_modelo(_modelo: string): void {
        this._modelo = _modelo;
    }

    public get_cor(): string {
        return this._cor;
    }

    public set_cor(_cor: string): void {
        this._cor = _cor;
    }

    public get_potencia(): string {
        return this._potencia;
    }

    public set_potencia(_potencia: string): void {
        this._potencia = _potencia;
    }
}

export { Automovel }