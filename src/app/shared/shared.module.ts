import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '@core/services/service.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoadingComponent, HeaderComponent],
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    RouterModule
  ],
  exports: [
    LoadingComponent,
    HeaderComponent,
    RouterModule
  ],
  providers: [
    ServiceService
  ]
})
export class SharedModule { }
