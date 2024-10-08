import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../reusable-components/shared/button/button.component";
import { FormFieldComponent } from '../../reusable-components/shared/form-field/form-field.component';
import { LogoComponent } from "../../reusable-components/shared/logo/logo.component";
import { TitleParagraphComponent } from "../../reusable-components/shared/title-paragraph/title-paragraph.component";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule,RouterModule, RouterOutlet, ReactiveFormsModule, ButtonComponent, FormFieldComponent, LogoComponent, TitleParagraphComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit{
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      console.log('Form Submitted!', this.forgotPasswordForm.value);
    }
  }

  onBackToLogin(){
    this.router.navigate(['/login']);
  }
}
