/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from 'src/app/class/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private _lista_contatos: Contato[];

  constructor(private _router: Router, private _contatoService: ContatoService) {
    this._lista_contatos = this._contatoService.getContatos();
  }

  irParaCadastrarPage(): void {
    this._router.navigate(["/cadastrar"]);
  }
}
