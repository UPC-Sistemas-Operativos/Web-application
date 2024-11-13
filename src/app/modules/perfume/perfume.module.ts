import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfumeRoutingModule } from './perfume-routing.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CustomizationComponent } from './components/customization/customization.component';
import { ReviewsComponent } from './components/reviews/reviews.component';


@NgModule({
  declarations: [
    CatalogComponent,
    CustomizationComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    PerfumeRoutingModule
  ]
})
export class PerfumeModule { }
