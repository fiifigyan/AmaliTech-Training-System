import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../../reusable-components/shared/button/button.component";
import { FormFieldComponent } from '../../reusable-components/shared/form-field/form-field.component';
import { LogoComponent } from "../../reusable-components/shared/logo/logo.component";
import { TitleParagraphComponent } from "../../reusable-components/shared/title-paragraph/title-paragraph.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,RouterOutlet, RouterModule,ReactiveFormsModule, 
    ButtonComponent, 
    FormFieldComponent, 
    LogoComponent, 
    TitleParagraphComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onForgotPassword(e: Event) {
e.preventDefault();
    this.router.navigate(['forgot-password']);
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
    }
  }

  ngOnInit(): void {}
}
