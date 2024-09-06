import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  value!: string;
  validationMessages: string [] = [];
  validation = () => {
    if(this.value.length < 9){
      this.validationMessages.push("largo insuficiente" + this.value.length)
    };
    if(/[A-Z]/.test(this.value)!){
      this.validationMessages.push("No contiene un caracter mayuscula")
    }
    if(/[0-9]/.test(this.value)!){
      this.validationMessages.push("No contiene un numero")
    }
  }
  validationResult = () => {
    this.validation()
    if(this.validationMessages.length > 1){
      console.log(this.validationMessages)
    }
  }
  constructor() { }

  ngOnInit() {
  }



}
