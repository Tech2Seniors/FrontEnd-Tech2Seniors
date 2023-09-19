import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: ' base-pagina-padrao',
  templateUrl: './base-pagina-padrao.component.html',
  styleUrls: ['./base-pagina-padrao.component.css']
})
export class BasePaginaPadraoComponent {
  @Output() clickIcone = new EventEmitter<Event>();

  constructor() {}

  clickIconeNavbar() {
    this.clickIcone.emit();
  }
}
