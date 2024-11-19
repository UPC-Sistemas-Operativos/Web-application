import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

// Importación directa de los módulos y componentes necesarios
import { AuthModule } from './modules/auth/auth.module';
import { HomeModule } from './modules/home/home.module';
import { PerfumeModule } from './modules/perfume/perfume.module';
import { UserSettingsModule } from './modules/user-settings/user-settings.module';
import { ComplaintsModule } from './modules/complaints/complaints.module';
import { ContactModule } from './modules/contact/contact.module';
import { CatalogComponent } from './modules/perfume/components/catalog/catalog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth', children: [{ path: '', loadChildren: () => AuthModule }] },
  { path: 'home', children: [{ path: '', loadChildren: () => HomeModule }] },
  { path: 'perfume', children: [{ path: '', loadChildren: () => PerfumeModule }] },
  { path: 'perfume/catalog', component: CatalogComponent },
  { path: 'user-settings', children: [{ path: '', loadChildren: () => UserSettingsModule }] },
  { path: 'complaints', children: [{ path: '', loadChildren: () => ComplaintsModule }] },
  { path: 'contact', children: [{ path: '', loadChildren: () => ContactModule }] },
  { path: '**', component: NotFoundComponent } // Ruta para 404
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
