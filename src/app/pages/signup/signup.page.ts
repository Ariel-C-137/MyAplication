import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email!: string
  value!: string 
  username!: string
  validationMessages: string [] = [];
  validation = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.validationMessages = [];
      if (this.username.length <= 9) {
        this.validationMessages.push("Nombre con largo insuficiente");
      }
      if (this.value.length < 9) {
        this.validationMessages.push("Password con largo insuficiente");
      }
      if (!/[A-Z]/.test(this.value)) {
        this.validationMessages.push("No contiene un caracter mayúscula");
      }
      if (!/[0-9]/.test(this.value)) {
        this.validationMessages.push("No contiene un número");
      }

      if (!this.email) {
        this.validationMessages.push("El campo de correo electrónico está vacío");
      } else if (!emailRegex.test(this.email)) {
        this.validationMessages.push("Formato de correo electrónico no válido");
      }
  }

  validationResult = () => {
    this.validation()
    if(this.validationMessages.length > 0){
      console.log(this.validationMessages)
    }else{
      console.log("Validaciones completadas")
      this.router.navigate(['/landing'])
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
