import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complaints-form',
  templateUrl: './complaints-form.component.html',
  styleUrls: ['./complaints-form.component.css']
})
export class ComplaintsFormComponent implements OnInit {
  complaintsForm!: FormGroup; // Usamos '!' para indicar que será inicializada antes de su uso
  formSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.complaintsForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      menorEdad: [false],
      montoReclamado: ['', Validators.required],
      bienContratado: ['', Validators.required],
      descripcionBien: ['', Validators.required],
      tipoProblema: ['', Validators.required],
      tipoReclamacion: ['', Validators.required],
      detalleReclamo: ['', Validators.required],
      pedido: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.complaintsForm.valid) {
      this.formSubmitted = true;
      this.complaintsForm.reset();

      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000); // Oculta el mensaje después de 5 segundos
    }
  }
}
