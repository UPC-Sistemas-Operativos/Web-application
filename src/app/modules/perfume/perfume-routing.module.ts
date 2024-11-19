import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component'; // Ajusta el path si es necesario

const routes: Routes = [
  { path: '', component: CatalogComponent }, // Ruta base para /perfume
  { path: 'catalog', component: CatalogComponent } // Ruta para /perfume/catalog
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfumeRoutingModule { }
