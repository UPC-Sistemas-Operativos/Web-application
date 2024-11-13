// complaints-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintsFormComponent } from './components/complaints-form/complaints-form.component'; // Ruta ajustada

const routes: Routes = [
  { path: '', component: ComplaintsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsRoutingModule {}
