import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ApiService } from "@core/services/api.service";
import { ServiceService } from "@core/services/service.service";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    SharedModule
  ],
  providers: [ApiService, ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
