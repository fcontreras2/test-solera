import { Component, OnInit } from '@angular/core';
import { ServiceService } from '@core/services/service.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  faSpinner = faSpinner;
  
  constructor(
    private s:ServiceService
  ) { }

  ngOnInit() {

  }

}
