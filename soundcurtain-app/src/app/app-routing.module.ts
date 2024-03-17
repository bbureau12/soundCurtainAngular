import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsContainer } from './settings/settings.container';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'settings', component: SettingsContainer }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
