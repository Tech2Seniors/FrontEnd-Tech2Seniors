import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'projects/tech2seniors/src/lib/pages/home/home.component';
import { BasePaginaPadraoComponent } from 'projects/tech2seniors/src/lib/shared/base-pagina-padrao/base-pagina-padrao.component';
import { Tech2seniorsModule } from 'projects/tech2seniors/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Tech2seniorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
