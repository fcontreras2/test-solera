import { Component, OnInit } from '@angular/core';
import { ICategory } from '@core/models/category';
import { ServiceService } from '@core/services/service.service';

import {
  faEdit,
  faSave,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent implements OnInit {

  faEdit = faEdit;
  faSave = faSave;
  faTimes = faTimes;

  categories:ICategory[] = [];
  
  constructor(
    private serServi:ServiceService
  ) { }

  ngOnInit() {
    this.serServi.categories.subscribe(categories => {
      this.categories = categories;
    })
  }

}
