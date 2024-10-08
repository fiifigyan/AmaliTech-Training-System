import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../../reusable-components/shared/button/button.component";
import { FormFieldComponent } from '../../reusable-components/shared/form-field/form-field.component';
import { LogoComponent } from "../../reusable-components/shared/logo/logo.component";
import { TitleParagraphComponent } from "../../reusable-components/shared/title-paragraph/title-paragraph.component";

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, RouterModule, 
    ReactiveFormsModule, 
    ButtonComponent, 
    FormFieldComponent, 
    LogoComponent, 
    TitleParagraphComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.changePasswordForm = this.fb.group({
      // your form controls here
    });
  }
  onSubmit() {
    if (this.changePasswordForm.valid) {
      console.log('Form Submitted!', this.changePasswordForm.value);
    }
  }
  ngOnInit(): void {
    this.setupPasswordToggle();
  }
  private setupPasswordToggle(): void {
    const eyeIcon = document.getElementById('hide-password') as HTMLElement | null;
    const passwordInput = document.querySelector('#password') as HTMLInputElement | null;

    if (eyeIcon && passwordInput) {
      eyeIcon.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          eyeIcon.classList.toggle('fa-eye');
          eyeIcon.classList.toggle('fa-eye-slash');
        } else {
          passwordInput.type = 'password';
          eyeIcon.classList.toggle('fa-eye-slash');
          eyeIcon.classList.toggle('fa-eye');
        }
      });
    } else {
      console.error('Element not found');
    }
  }
  onBackToLogin(){
    // Navigate to login page
    this.router.navigate(['/login']);
  }
}