import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() clickIcone = new EventEmitter();
  constructor() {}

  clickIconeBotao() {
    this.clickIcone.emit();
  }
}
