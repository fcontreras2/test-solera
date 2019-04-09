import { Component, OnInit } from "@angular/core";
import { ServiceService } from "@core/services/service.service";
import { ICategory } from "@core/models/category";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  public categories: ICategory[] = [];
  constructor(private serService: ServiceService) {}

  ngOnInit() {
    this.serService.allCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
