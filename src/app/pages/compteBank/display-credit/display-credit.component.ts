import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-display-credit',
  templateUrl: './display-credit.component.html',
  styleUrls: ['./display-credit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DisplayCreditComponent implements OnInit {
  data: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.data);
  }

  clear() {
    this.activeModal.dismiss('cancel');
  }

}
