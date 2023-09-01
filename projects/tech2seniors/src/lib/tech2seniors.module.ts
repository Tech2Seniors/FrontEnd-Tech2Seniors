import { NgModule } from '@angular/core';
import { Tech2seniorsComponent } from './tech2seniors.component';
import { HomeComponent } from './pages/home/home.component';
import { BasePaginaPadraoComponent } from './shared/base-pagina-padrao/base-pagina-padrao.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    Tech2seniorsComponent,
    HomeComponent,
    BasePaginaPadraoComponent,
    NavbarComponent
  ],
  imports: [
  ],
  exports: [
    Tech2seniorsComponent,
    BasePaginaPadraoComponent,
    HomeComponent
  ]
})
export class Tech2seniorsModule { }
