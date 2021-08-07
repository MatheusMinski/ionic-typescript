import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lista_contatos: any[];

  constructor() {
    this.lista_contatos = [
      { nome: "Carlos", telefone: 1111111111 },
      { nome: "Lucas", telefone: 222222222 },
      { nome: "Leo", telefone: 333333333 },
      { nome: "Maria", telefone: 4444444 },
      { nome: "Júlia", telefone: 5555555 },
      { nome: "Karen", telefone: 6666666 }
    ]
  }

}
