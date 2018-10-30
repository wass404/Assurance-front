import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CompteBankService } from '../compteBank.service';

@Component({
  selector: 'app-add-credit',
  templateUrl: './add-credit.component.html',
  styleUrls: ['./add-credit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddCreditComponent implements OnInit {
  idCompte: any;
  capital: string;
  date : any;
  souscripteur : string;
  allTypes: any
  constructor(public activeModal: NgbActiveModal, private compteService: CompteBankService) { }

  ngOnInit() {
    
  }
  

  addCredit(){
    const creditToAdd = {
      "assurance_has_Credit": null,
      "capital": this.capital,
      "compte": {
        "idCompte": this.idCompte
        },
      "date": this.date,
      "souscripteur": this.souscripteur
    }
    
    console.log(creditToAdd)
     this.compteService.addCredit(creditToAdd).subscribe(data =>{
      this.activeModal.close('success');
      this.compteService.testSubject.next('a new data from BOUTON');

     },error => {
      this.activeModal.close('fail');
     })
  }

  clear() {
    this.activeModal.dismiss('cancel');
  }

}
