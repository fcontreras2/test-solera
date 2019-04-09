import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '@core/services/service.service';

import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoadingComponent, HeaderComponent],
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    LoadingComponent,
    HeaderComponent,
    RouterModule,
    FontAwesomeModule,
  ],
  providers: [
    ServiceService
  ]
})
export class SharedModule { }
