import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complaints-form',
  templateUrl: './complaints-form.component.html',
  styleUrls: ['./complaints-form.component.css']
})
export class ComplaintsFormComponent implements OnInit {
  complaintsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.complaintsForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      menorEdad: [false],
      montoReclamado: ['', Validators.required],
      bienContratado: ['', Validators.required],
      descripcionBien: ['', [Validators.required, Validators.minLength(10)]],
      tipoProblema: ['', Validators.required],
      tipoReclamacion: ['', Validators.required],
      detalleReclamo: ['', [Validators.required, Validators.minLength(10)]],
      pedido: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.complaintsForm.valid) {
      console.log('Reclamo Enviado:', this.complaintsForm.value);
      // Implementa la lógica de envío de datos, como llamar a una API
      this.complaintsForm.reset();
      alert('Tu reclamo ha sido enviado con éxito.');
    }
  }
}
