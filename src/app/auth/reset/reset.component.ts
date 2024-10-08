import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { ButtonComponent } from "../../reusable-components/shared/button/button.component";
import { FormFieldComponent } from '../../reusable-components/shared/form-field/form-field.component';
import { LogoComponent } from "../../reusable-components/shared/logo/logo.component";
import { TitleParagraphComponent } from "../../reusable-components/shared/title-paragraph/title-paragraph.component";

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, RouterOutlet, RouterModule, FormFieldComponent, LogoComponent, TitleParagraphComponent],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent {
resetPasswordForm: FormGroup;

constructor(private fb: FormBuilder, private router: Router) {
  this.resetPasswordForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
}
onBackToLogin() {
  this.router.navigate(['login'])
}
onSubmit() {
throw new Error('Method not implemented.');
}
}
