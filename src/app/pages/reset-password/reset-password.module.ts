import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PasswordModule } from 'primeng/password';
import { ResetPasswordPageRoutingModule } from './reset-password-routing.module';
import { ResetPasswordPage } from './reset-password.page';
import { DividerModule } from 'primeng/divider';

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
