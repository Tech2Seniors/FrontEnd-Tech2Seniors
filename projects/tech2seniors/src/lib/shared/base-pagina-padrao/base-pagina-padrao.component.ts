import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: ' base-pagina-padrao',
  templateUrl: './base-pagina-padrao.component.html',
  styleUrls: ['./base-pagina-padrao.component.css']
})
export class BasePaginaPadraoComponent {
  alert = false;
  constructor() {}

  clickIconeNavbar() {
    this.alert = true;
  }

  clicouFechar() {
    this.alert = false;
  }
}
