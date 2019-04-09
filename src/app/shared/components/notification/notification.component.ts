import { Component, OnInit } from '@angular/core';
import { ServiceService } from '@core/services/service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(
    private s:ServiceService
  ) { }

  ngOnInit() {
  }

}
