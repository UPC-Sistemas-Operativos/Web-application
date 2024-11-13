import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsFormComponent } from './components/complaints-form/complaints-form.component';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Importación de MatCheckboxModule

@NgModule({
  declarations: [
    ComplaintsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComplaintsRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule // Añadido para soporte de mat-checkbox
  ]
})
export class ComplaintsModule {}
