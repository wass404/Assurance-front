import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CompteBankService } from '../compteBank.service';

@Component({
  selector: 'app-add-assurance',
  templateUrl: './add-assurance.component.html',
  styleUrls: ['./add-assurance.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddAssuranceComponent implements OnInit {

  typeAssurance: string;
  montant : string;
  idCredit: any;
  constructor(public activeModal: NgbActiveModal, private compteService: CompteBankService) { }

  ngOnInit() {
    
  }
  

  addAssurance(){
    const assuranceToAdd = {
      "montant": this.montant,
      "typeAssurance": this.typeAssurance
    }
    console.log(assuranceToAdd)
     this.compteService.addAssurance(assuranceToAdd).subscribe((data:any) =>{
       this.addAssuranceCredit(data.idLnAssurance)
      this.activeModal.close('success');
     },error => {
      this.activeModal.close('fail');
     })
  }

  addAssuranceCredit(idAssurance){
    const assuranceCreditToAdd = {
      "assurance": {
        "idLnAssurance": idAssurance
      },
      "credit": {
        "idCredit": this.idCredit
      },
      "dateSouscription": new Date(),
      "id": {
        "idAssurance": idAssurance,
        "idCredit": this.idCredit
      }
    }
    this.compteService.addAssuranceCredit(assuranceCreditToAdd).subscribe(data =>{
      this.activeModal.close('success');
      this.compteService.testSubject.next('a new data from BOUTON');

    },
    error => {
      this.activeModal.close('fail');

    })
  }

  clear() {
    this.activeModal.dismiss('cancel');
  }

}
