import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,      // Importa ReactiveFormsModule aquí
    MatCardModule,            // Importa MatCardModule para mat-card
    MatIconModule,            // Importa MatIconModule para mat-icon
    MatFormFieldModule,       // Importa MatFormFieldModule para mat-form-field
    MatInputModule,           // Importa MatInputModule para mat-input
    MatCheckboxModule,        // Importa MatCheckboxModule para mat-checkbox
    MatButtonModule,          // Importa MatButtonModule para mat-button
    AuthRoutingModule
  ]
})
export class AuthModule { }
