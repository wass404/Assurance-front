import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CompteBankService } from '../compteBank.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddAccountComponent implements OnInit {
  exPersonne: string;
  rib : string;
  typeCompte : any;
  allTypes: any
  constructor(public activeModal: NgbActiveModal, private compteService: CompteBankService) { }

  ngOnInit() {
    this.getTypes();
  }
  getTypes(){
    this.compteService.getTypeComptes().subscribe(data => {
      this.allTypes = data
    })
  }

  addAccount(){
    const accountToAdd = {
      "credit": null,
      "ex_personne": this.exPersonne,
      "rib": this.rib,
      "typeCompte": {
        "idTypeCompte": this.typeCompte
      }
    }
    console.log(accountToAdd)
     this.compteService.addAccount(accountToAdd).subscribe(data =>{
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
