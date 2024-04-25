import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-clasico',
  templateUrl: './formulario-clasico.component.html',
  styleUrls: ['./formulario-clasico.component.css']
})
export class FormularioClasicoComponent {

  public registerForm: any = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    cPassword: ""
  }

  handleRegisterForm(){
    const registerFormValues = Object.values(this.registerForm)
    const regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/


    if(registerFormValues.includes("")){
      return alert("Hay campos vacios, asegurate de rellenarlos todos!")
    }

    if(regExp.test(this.registerForm.password)){
      return alert("Debes ingresar una may, una min, un numero y un caracter especial. Debe tener una long minima de 8 carac")
    }

    if(this.registerForm.password !== this.registerForm.cPassword){
      return alert("Las contraseñas no coinciden")
    }

    console.log(this.registerForm)




  }


}
