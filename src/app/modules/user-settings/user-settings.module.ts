import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { PreferencesComponent } from './components/preferences/preferences.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PoliciesComponent,
    PreferencesComponent
  ],
  imports: [
    CommonModule,
    UserSettingsRoutingModule
  ]
})
export class UserSettingsModule { }
