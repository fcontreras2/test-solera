import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceCardComponent } from "./components/service-card/service-card.component";
import { ServiceFormComponent } from "./components/service-form/service-form.component";
import { ListComponent } from "./pages/list/list.component";
import { ServicesComponent } from "./services.component";
import { FormComponent } from "./pages/form/form.component";
import { ServiceRoutingModule } from "./service-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/';
import { ServiceDeleteComponent } from './components/service-delete/service-delete.component';

@NgModule({
  declarations: [
    ServiceCardComponent,
    ServiceFormComponent,
    ListComponent,
    ServicesComponent,
    FormComponent,
    ServiceDeleteComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModalModule
  ],
  entryComponents: [
    ServiceDeleteComponent
  ]
})
export class ServicesModule {}
