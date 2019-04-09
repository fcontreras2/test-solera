import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceCardComponent } from "./components/service-card/service-card.component";
import { ServiceFormComponent } from "./components/service-form/service-form.component";
import { ListComponent } from "./pages/list/list.component";
import { ServicesComponent } from "./services.component";
import { FormComponent } from "./pages/form/form.component";
import { ServiceRoutingModule } from "./service-routing.module";

@NgModule({
  declarations: [
    ServiceCardComponent,
    ServiceFormComponent,
    ListComponent,
    ServicesComponent,
    FormComponent
  ],
  imports: [CommonModule, ServiceRoutingModule]
})
export class ServicesModule {}
