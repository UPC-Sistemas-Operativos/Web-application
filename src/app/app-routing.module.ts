import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'perfume', loadChildren: () => import('./modules/perfume/perfume.module').then(m => m.PerfumeModule) },
  { path: 'user-settings', loadChildren: () => import('./modules/user-settings/user-settings.module').then(m => m.UserSettingsModule) },
  { path: 'complaints', loadChildren: () => import('./modules/complaints/complaints.module').then(m => m.ComplaintsModule) },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // Precarga todos los módulos
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
