import { NgModule } from '@angular/core';
import { Tech2seniorsComponent } from './tech2seniors.component';
import { HomeComponent } from './pages/home/home.component';
import { BasePaginaPadraoComponent } from './shared/base-pagina-padrao/base-pagina-padrao.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { RouterOutlet, Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];


@NgModule({
  declarations: [
    Tech2seniorsComponent,
    HomeComponent,
    BasePaginaPadraoComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    RouterOutlet,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    Tech2seniorsComponent,
    BasePaginaPadraoComponent,
    HomeComponent,
    RouterModule
  ]
})
export class Tech2seniorsModule { }
