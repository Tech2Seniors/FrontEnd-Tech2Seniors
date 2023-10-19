import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Output() fechar = new EventEmitter();

  constructor() {}

  cliqueFechar() {
    this.fechar.emit();
  }
}
