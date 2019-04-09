import { Component, OnInit } from "@angular/core";
import { ICategory } from "@core/models/category";
import { ServiceService } from "@core/services/service.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router"


@Component({
  selector: "app-service-form",
  templateUrl: "./service-form.component.html",
  styleUrls: ["./service-form.component.scss"]
})
export class ServiceFormComponent implements OnInit {
  categories: ICategory[] = [];
  form: FormGroup;
  submitted = false;
  method: String = 'POST';

  
  constructor(
    private serServi: ServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(15)]],
      category: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.serServi.categories.subscribe(categories => {
      this.categories = categories;
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.valid) {
      if (this.method === 'POST') {
        this.serServi.setService(this.form.value).subscribe(service => {
          if (service.id) {
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
