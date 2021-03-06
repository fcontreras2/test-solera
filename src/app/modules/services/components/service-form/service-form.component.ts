import { Component, OnInit } from "@angular/core";
import { ICategory } from "@core/models/category";
import { ServiceService } from "@core/services/service.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router"


@Component({
  selector: "app-service-form",
  templateUrl: "./service-form.component.html",
  styleUrls: ["./service-form.component.scss"]
})
export class ServiceFormComponent implements OnInit {
  categories: ICategory[] = [];
  form: FormGroup;
  submitted = false;
  serviceId: Number = null;
  
  constructor(
    private serServi: ServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      id: [""],
      name: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(15)]],
      category: ["", Validators.required]
    });
    
  }
  
  ngOnInit() {
    this.serviceId = Number(this.route.snapshot.paramMap.get("id"));
    this.serServi.categories.subscribe(categories => {
      this.categories = categories;
    });

    if (this.serviceId  && this.serviceId >= 0) {
      this.serServi.getService(this.serviceId).subscribe(service => {
        this.form.setValue(service);
      });
    }
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.valid) {
      if (!this.serviceId) {
        this.serServi.createService(this.form.value).subscribe(service => {
          if (service.id) {
            this.serServi.setNotification('Se ha creado correctamente el servicio!');
            this.router.navigate(['/']);
          }
        })
      } else {
        this.serServi.updateService(this.form.value,this.serviceId).subscribe(service => {
          if (service.id) {
            this.serServi.setNotification('Se ha editado correctamente el servicio!');
            this.router.navigate(['/']);
          }
        })
      }
    }
  }

  get f() {
    return this.form.controls;
  }
}
