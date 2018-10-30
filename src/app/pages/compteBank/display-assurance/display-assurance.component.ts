import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-display-assurance',
  templateUrl: './display-assurance.component.html',
  styleUrls: ['./display-assurance.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DisplayAssuranceComponent implements OnInit {
  data: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.data);
  }

  clear() {
    this.activeModal.dismiss('cancel');
  }

}
