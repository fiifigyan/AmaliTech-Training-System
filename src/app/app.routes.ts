import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full'
    },
    { 
        path: 'login', 
        component: LoginComponent, 
        title: 'Login'
    },
    { 
        path: 'forgot-password', 
        component: ForgotPasswordComponent, 
        title: 'Forgot Password'
    },
    { 
        path: 'reset', 
        component: ResetComponent, 
        title: 'Reset Password'
    },
    { 
        path: 'change-password', 
        component: ChangePasswordComponent, 
        title: 'Change Password'
    },
    {
        path: "dashboard", 
        component: DashboardComponent,
        title: "dashboard",
    }
];