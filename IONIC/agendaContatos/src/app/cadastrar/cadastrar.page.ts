import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  private _nome: string;
  private _telefone: string;

  constructor(public alertController: AlertController) {

  }

  ngOnInit() {

  }

  private cadastrar(): void {
    if (this.validar(this._nome) && this.validar(this._telefone)) {
      this.presentAlert("Agenda", "Cadastrar", "Cadastro efetuado com sucesso!");
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
