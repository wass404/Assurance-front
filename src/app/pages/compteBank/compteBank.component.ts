import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { CompteBankService } from './compteBank.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DisplayAssuranceComponent } from './display-assurance/display-assurance.component';
import { DisplayCreditComponent } from './display-credit/display-credit.component';
import { DxDataGridComponent } from 'devextreme-angular';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddCreditComponent } from './add-credit/add-credit.component';
import { AddAssuranceComponent } from './add-assurance/add-assurance.component';

@Component({
  selector: 'app-compteBank',
  templateUrl: './compteBank.component.html',
  styleUrls: ['./compteBank.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompteBankComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  listComptes: any;
  idCompteSelectionné: any
  idCreditSelectionné: any;

  constructor(private compteService: CompteBankService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getComptes();
    this.compteService.testSubject.subscribe(
      (data)=>{
        this.getComptes();
      }
    )
  }

  getComptes() {
    this.compteService.getComptes().subscribe(data => {
      console.log(data);
      this.listComptes = data;
    })
  }

  openCredit(data) {
    console.log(data);
    const modalRef = this.modalService.open(DisplayCreditComponent, { size: 'lg', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.data = data;

  }

  openAssurance(data) {
    console.log(data);
    const modalRef = this.modalService.open(DisplayAssuranceComponent, { size: 'lg', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.data = data;

  }

  onToolbarPreparingCompte(e) {
    e.toolbarOptions.items.unshift({
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'refresh',
        onClick: this.refreshDataGrid.bind(this)
      }
    }, {
        location: 'after',
        widget: 'dxButton',
        options: {
          icon: 'add',
          onClick: this.addAccount.bind(this)
        }
      });
  }


  onToolbarPreparingCredit(e,id){
    console.log(id);
    this.idCompteSelectionné = id;
    e.toolbarOptions.items.unshift({
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'refresh',
        onClick: this.refreshDataGrid.bind(this)
      }
    }, {
        location: 'after',
        widget: 'dxButton',
        options: {
          icon: 'add',
          onClick: this.addCredit.bind(this)
        }
      });
  }

  onToolbarPreparingAssurance(e,id){
    console.log(id);
    this.idCreditSelectionné = id;
    e.toolbarOptions.items.unshift({
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'refresh',
        onClick: this.refreshDataGrid.bind(this)
      }
    }, {
        location: 'after',
        widget: 'dxButton',
        options: {
          icon: 'add',
          onClick: this.addAssurance.bind(this)
        }
      });
  }

  addAccount() {
    const modalRef = this.modalService.open(AddAccountComponent, { size: 'lg', backdrop: 'static', keyboard: false });
  }

  addCredit() {
    const modalRef = this.modalService.open(AddCreditComponent, { size: 'lg', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.idCompte = this.idCompteSelectionné;

  }

  addAssurance(){
    const modalRef = this.modalService.open(AddAssuranceComponent, { size: 'lg', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.idCredit = this.idCreditSelectionné;

  }



  refreshDataGrid() {
    console.log('aaaaaaaaaa')
    this.dataGrid.instance.refresh();
    this.getComptes();
  }
}
