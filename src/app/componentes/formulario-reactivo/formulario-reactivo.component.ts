import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {

  public registerForm!: FormGroup;

  public usuarios: any = []

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [ Validators.maxLength(12), Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]]
    })
  }



  handleRegisterForm(){

    if(this.registerForm.valid){
      alert("Se ha registrado exitosamente")
      this.usuarios.push(this.registerForm.value)
      this.registerForm.reset()
    } else {
      alert('No se ha rellenado correctamente el formulario')
    }

  }


}
