import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompteBankComponent } from './compteBank.component';
import { RouterModule } from '@angular/router';
import { CompteBankService } from './compteBank.service';
import { HttpClientModule } from '@angular/common/http';
import { DxDataGridModule, DxPieChartModule } from 'devextreme-angular';
import { DisplayAssuranceComponent } from './display-assurance/display-assurance.component';
import { DisplayCreditComponent } from './display-credit/display-credit.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddCreditComponent } from './add-credit/add-credit.component';
import { AddAssuranceComponent } from './add-assurance/add-assurance.component';


export const routes = [
  { path: '', component: CompteBankComponent, pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DxDataGridModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),

  ],
  declarations: [CompteBankComponent,DisplayAssuranceComponent ,DisplayCreditComponent, AddAccountComponent, AddCreditComponent, AddAssuranceComponent ],
  providers: [CompteBankService],
  entryComponents: [
    DisplayAssuranceComponent,
    DisplayCreditComponent,
    AddAccountComponent,
    AddCreditComponent,
    AddAssuranceComponent
  ]
})
export class CompteBankModule { }
