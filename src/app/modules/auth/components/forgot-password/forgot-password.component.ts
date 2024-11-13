import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  messageVisible: boolean = false; // Inicializa en false

  onSubmit(event: Event) {
    event.preventDefault();
    // Aquí podrías agregar la lógica para enviar el enlace de recuperación

    // Cambia messageVisible a true para mostrar el mensaje
    this.messageVisible = true;

    // Opcional: Ocultar el mensaje después de unos segundos
    setTimeout(() => {
      this.messageVisible = false;
    }, 5000); // Oculta el mensaje después de 5 segundos
  }
}
