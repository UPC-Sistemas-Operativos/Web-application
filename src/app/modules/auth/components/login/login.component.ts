import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Formulario reactivo
  errorMessage: string = ''; // Mensaje de error

  // Credenciales válidas
  private readonly validUsername: string = 'Prueba123@example.com';
  private readonly validPassword: string = 'password123';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], // Validar email
      password: ['', [Validators.required]], // Validar que no esté vacío
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Validar credenciales específicas
      if (username === this.validUsername && password === this.validPassword) {
        this.errorMessage = ''; // Limpiar mensaje de error
        this.router.navigate(['/home']); // Redirigir al home
      } else {
        this.errorMessage = 'Error: Usuario o contraseña incorrectos.';
      }
    } else {
      this.errorMessage = 'Error: Completa todos los campos correctamente.';
    }
  }
}
