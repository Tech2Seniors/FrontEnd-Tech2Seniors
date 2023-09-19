import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-conteudos',
  templateUrl: './conteudos.component.html',
  styleUrls: ['./conteudos.component.css']
})
export class ConteudosComponent {
  constructor(
    private router: Router,
  ) {}

  redirectWhatsApp() {
    this.router.navigate(['/whatsapp'])
  }

  redirectBanco() {
    this.router.navigate(['/banco'])
  }
}
