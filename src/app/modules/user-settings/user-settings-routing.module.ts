import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { PreferencesComponent } from './components/preferences/preferences.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'preferences', component: PreferencesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSettingsRoutingModule { }
