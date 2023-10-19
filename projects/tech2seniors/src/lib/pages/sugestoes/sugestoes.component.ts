import { Component } from '@angular/core';
import { Sugestoes } from '../../model/sugestoes';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'lib-sugestoes',
  templateUrl: './sugestoes.component.html',
  styleUrls: ['./sugestoes.component.css']
})
export class SugestoesComponent {
  formSugestao!: FormGroup;
  alertSucess!: boolean;
  showLoader = false;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.criandoFormSugestoes(new Sugestoes());
  }

  criandoFormSugestoes(sugestoes: Sugestoes) {
    this.formSugestao = this.formBuilder.group({
      sugestao: [sugestoes.sugestao]
    })
  }

  enviarSugestao() {
    this.showLoader = true;
    this.alertSucess = true;    
    setTimeout(() => {
      this.alertSucess = false
    }, 5000)
  }
}
