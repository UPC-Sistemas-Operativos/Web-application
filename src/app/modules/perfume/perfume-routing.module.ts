import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CustomizationComponent } from './components/customization/customization.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'customization', component: CustomizationComponent },
  { path: 'reviews', component: ReviewsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfumeRoutingModule { }
