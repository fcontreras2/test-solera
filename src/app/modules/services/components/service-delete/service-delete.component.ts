import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ServiceService } from '@core/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service-delete',
  templateUrl: './service-delete.component.html',
  styleUrls: ['./service-delete.component.scss']
})
export class ServiceDeleteComponent implements OnInit {

  faSpinner = faSpinner;
  isDelete:Boolean = false;
  
  @Input() name:String;
  @Input() category:Number;
  @Input() description:String;
  @Input() id:Number;

  constructor(
    private serServ:ServiceService,
    private modalRef:NgbActiveModal,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  delete() {
    this.isDelete = true;
    this.serServ.deleteService(this.id).subscribe((data) => {
      if (data) {
        setTimeout(() => {
          this.serServ.setNotification('Se ha eliminado correctamente!');
          this.router.navigate(['/']);
          this.modalRef.close();
        },1500)
      }
    })
  }
}
