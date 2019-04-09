import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesModule } from './modules/services/services.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => ServicesModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
