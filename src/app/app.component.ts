import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { ResetComponent } from "./auth/reset/reset.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,RouterModule, RouterOutlet, RouterModule, LoginComponent, ForgotPasswordComponent, ResetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
