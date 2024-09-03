import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetPasswordPage } from './reset-password.page';
import { PasswordModule } from 'primeng/password';


describe('ResetPasswordPage', () => {
  let component: ResetPasswordPage;
  let fixture: ComponentFixture<ResetPasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
