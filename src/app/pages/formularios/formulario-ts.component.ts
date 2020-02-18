import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Persona } from '../../interfaces/interfaces';

@Component({
  selector: 'app-formulario-ts',
  templateUrl: './formulario-ts.component.html',
  styles: []
})
export class FormularioTsComponent implements OnInit {

  formulario: FormGroup;

  persona: Persona = {
    nombre: '',
    email : '',
    recuerdame: false,
  };

  constructor() {

    this.formulario = new FormGroup({
      nombre: new FormControl('' , [
                                    Validators.required,
                                    Validators.minLength(3)
      ]),
      email:  new FormControl(''  ),
      password1: new FormControl('' ),
      password2: new FormControl('' )
    });


  }

  ngOnInit() {
  }


  validar() {
    console.log( this.formulario);
  }




}
