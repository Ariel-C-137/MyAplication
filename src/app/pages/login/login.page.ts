import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  test_password = "123456789pol"
  test_username = "usertest123_"
  password!: string
  username!: string


  validation = () =>{
    if(this.password == this.test_password && this.username == this.test_username){
      console.log("Validacion completada ingresando...")
    }else{
      console.log("Credenciales erroneoas")
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
