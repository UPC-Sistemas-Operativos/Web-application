import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;  // Usamos el operador `!`

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      stayConnected: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log("Formulario enviado:", this.loginForm.value);
      // Lógica de autenticación
    }
  }
}
