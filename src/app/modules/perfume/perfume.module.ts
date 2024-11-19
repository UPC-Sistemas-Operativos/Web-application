import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importación para [(ngModel)]
import { RouterModule } from '@angular/router'; // Importa RouterModule para enrutamiento interno
import { CatalogComponent } from './components/catalog/catalog.component';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider'; // Importación para sliders

const routes = [
  { path: '', component: CatalogComponent }, // Ruta base para el catálogo
  { path: 'catalog', component: CatalogComponent } // Ruta para /perfume/catalog
];

@NgModule({
  declarations: [
    CatalogComponent,
    // otros componentes si los tienes
  ],
  imports: [
    CommonModule,
    FormsModule, // Necesario para [(ngModel)]
    ReactiveFormsModule, // Necesario para formularios reactivos si los usas
    RouterModule.forChild(routes), // Configuración de rutas para el módulo de perfumes
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSliderModule, // Módulo para sliders de Angular Material
    // otros módulos que necesites
  ],
  exports: [CatalogComponent]
})
export class PerfumeModule { }
