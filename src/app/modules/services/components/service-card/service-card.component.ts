import { Component, OnInit, Input } from "@angular/core";
import { ServiceDeleteComponent } from "../service-delete/service-delete.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-service-card",
  templateUrl: "./service-card.component.html",
  styleUrls: ["./service-card.component.scss"]
})
export class ServiceCardComponent implements OnInit {
  @Input() name: String;
  @Input() category: Number;
  @Input() description: String;
  @Input() id: Number;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openModal() {
    const modalRef = this.modalService.open(ServiceDeleteComponent, {
      size: "sm"
    });

    modalRef.componentInstance.name = this.name;
    modalRef.componentInstance.category = this.category;
    modalRef.componentInstance.description = this.description;
    modalRef.componentInstance.id = this.id;
  }
}
