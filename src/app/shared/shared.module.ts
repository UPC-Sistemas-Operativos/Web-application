import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,        // Asegura que RouterModule esté importado aquí
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
