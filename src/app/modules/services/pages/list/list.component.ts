import { Component, OnInit } from "@angular/core";
import { IService } from "@core/models/service";
import { ServiceService } from "@core/services/service.service";
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  list: IService[];
  constructor(
    private serService: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };

    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.serService.services.subscribe(services => {
      this.list = services;
    });
    this.applyFilter();
  }

  private applyFilter() {

    this.route.queryParams.subscribe((params) => {
      this.serService.getServices(params['filter']);
    })
  }
}
