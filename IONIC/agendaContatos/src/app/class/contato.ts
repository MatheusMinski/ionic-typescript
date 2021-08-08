export class Contato {
    private _nome: string;
    private _telefone: number;
    private _sexo: string;
    private _dataNasc: string;

    constructor(nome: string, telefone: number, sexo: string, dataNasc: string) {
        this._nome = nome;
        this._telefone = telefone;
        this._sexo = sexo;
        this._dataNasc = dataNasc;
    }

    public getNome(): string {
        return this._nome;
    }
    public getTelefone(): number {
        return this._telefone;
    }
    public getSexo(): string {
        return this._sexo;
    }
    public getDataNasc(): string {
        return this._dataNasc;
    }

    public setNome(nome: string) {
        this._nome = nome;
    }
    public setTelefone(telefone: number) {
        this._telefone = telefone;
    }
    public setSexo(sexo: string) {
        this._sexo = sexo;
    }
    public setDataNasc(dataNasc: string) {
        this._dataNasc = dataNasc;
    }
}
