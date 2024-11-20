import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup; // Formulario reactivo
  successMessage: string = ''; // Mensaje de éxito o error
  errorMessage: string = ''; // Mensaje para campos faltantes

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicializar el formulario
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Validar correo electrónico
      password: ['', [Validators.required, Validators.minLength(6)]], // Contraseña con al menos 6 caracteres
      confirmPassword: ['', [Validators.required]], // Confirmación de contraseña
      name: [''], // Campo opcional
      dob: [''], // Campo opcional
      age: [''], // Campo opcional
      gender: [''], // Campo opcional
      phone: [''] // Campo opcional
    });
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    // Resetear mensajes de éxito/error
    this.successMessage = '';
    this.errorMessage = '';

    if (this.registerForm.valid) {
      const { email, password, confirmPassword } = this.registerForm.value;

      // Verificar si las contraseñas coinciden
      if (password !== confirmPassword) {
        this.errorMessage = 'Error: Las contraseñas no coinciden.';
        return;
      }

      // Registro exitoso: Redirigir al home y mostrar mensaje de éxito
      this.successMessage = '¡Usuario creado correctamente!';
      console.log('Usuario registrado:', this.registerForm.value); // Mostrar los datos en la consola

      setTimeout(() => {
        this.router.navigate(['/home']); // Redirigir al home después de 1 segundo
      }, 1000);
    } else {
      // Validar qué campos están faltando
      const controls = this.registerForm.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          this.errorMessage = `Error: Completa correctamente el campo "${name}".`;
          break;
        }
      }
    }
  }
}
