import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/class/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  private _nome: string;
  private _telefone: number;
  private _sexo: string;
  private _dataNasc: string;

  constructor(public alertController: AlertController, private _router: Router, private _contatoService: ContatoService) {

  }

  ngOnInit() {

  }

  private cadastrar(): void {
    this._dataNasc = this._dataNasc.split("T")[0];
    if (this.validar(this._nome) && this.validar(this._telefone) && this.validar(this._sexo) && this.validar(this._dataNasc)) {
      let contato: Contato = new Contato(this._nome, this._telefone, this._sexo, this._dataNasc);
      this._contatoService.inserir(contato);
      this.presentAlert("Agenda", "Cadastrar", "Cadastro efetuado com sucesso!");
      this._router.navigate(["/home", this._nome, this._telefone, this._sexo, this._dataNasc])
    } else {
      this.presentAlert("Agenda", "Cadastrar", "Por favor, preencher todos os campos!");
    }
  }

  private validar(campo: any): boolean {
    if (!campo) {
      return false;
    } else {
      return true;
    }
  }

  async presentAlert(titulo: string, subtitulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      subHeader: subtitulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
