import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PasswordModule } from 'primeng/password';
import { ResetPasswordPageRoutingModule } from './reset-password-routing.module';
import { ResetPasswordPage } from './reset-password.page';
import { DividerModule } from 'primeng/divider';
import { Component } from '@angular/core';


@Component({
    selector: 'password-template-demo',
    templateUrl: './reset-password.page.html',
    standalone: true,
    imports: [FormsModule, PasswordModule, DividerModule]
})
export class PasswordTemplateDemo {
    value!: string;
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswordPageRoutingModule,
    PasswordModule,
    DividerModule
  ],
  declarations: [ResetPasswordPage]
})
export class ResetPasswordPageModule {}
