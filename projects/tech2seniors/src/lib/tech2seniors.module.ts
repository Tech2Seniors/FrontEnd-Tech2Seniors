import { NgModule } from '@angular/core';
import { Tech2seniorsComponent } from './tech2seniors.component';
import { HomeComponent } from './pages/home/home.component';
import { BasePaginaPadraoComponent } from './shared/base-pagina-padrao/base-pagina-padrao.component';
import { CardComponent } from './components/card/card.component';
import { RouterOutlet, Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SugestoesComponent } from './pages/sugestoes/sugestoes.component';
import { ConteudosComponent } from './pages/conteudos/conteudos.component';
import { WhatsappComponent } from './pages/whatsapp/whatsapp.component';
import { BancoComponent } from './pages/banco/banco.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { AgradecimentoComponent } from './pages/agradecimento/agradecimento.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sugestoes', component: SugestoesComponent },
  { path: 'conteudos', component: ConteudosComponent },
  { path: 'whatsapp', component: WhatsappComponent },
  { path: 'banco', component: BancoComponent },
  { path: 'agradecimento', component: AgradecimentoComponent }
];

@NgModule({
  declarations: [
    Tech2seniorsComponent,
    HomeComponent,
    BasePaginaPadraoComponent,
    CardComponent,
    FooterComponent,
    SugestoesComponent,
    ConteudosComponent,
    WhatsappComponent,
    BancoComponent,
    AlertComponent,
    AgradecimentoComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  exports: [
    Tech2seniorsComponent,
    BasePaginaPadraoComponent,
    HomeComponent,
    RouterModule
  ]
})
export class Tech2seniorsModule { }
