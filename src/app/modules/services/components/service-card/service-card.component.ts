import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() name:String;
  @Input() category:Number;
  @Input() description:String;
  @Input() id:Number;
  
  constructor() { }

  ngOnInit() {
  }

}
