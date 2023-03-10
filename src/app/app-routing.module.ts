import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {path : "", redirectTo : "home", pathMatch : "full"},
  {
    path : "home",
    loadChildren : () => import("./modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path : "dashboard",
    loadChildren : () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
