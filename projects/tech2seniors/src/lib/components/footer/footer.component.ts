import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(
    private router: Router
  ) {}

  redirectHome() {
    this.router.navigate(['/'])
  }

  redirectSugestoes() {
    this.router.navigate(['/sugestoes'])
  }

  redirectConteudo() {
    this.router.navigate(['/conteudos'])
  }
}
