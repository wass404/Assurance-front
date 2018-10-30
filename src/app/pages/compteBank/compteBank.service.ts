import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable()
export class CompteBankService {
    getComptesURL = environment.SERVER_API_URL_JAVA + '/comptes';
    saveComptesURL = environment.SERVER_API_URL_JAVA + '/saveCompte';
    getTypesURL = environment.SERVER_API_URL_JAVA + '/types';
    saveCreditURL = environment.SERVER_API_URL_JAVA + '/saveCredit';
    saveAssuranceURL = environment.SERVER_API_URL_JAVA + '/saveAssurance';
    saveAssuranceCreditURL = environment.SERVER_API_URL_JAVA + '/saveAssuranceCredit';
    testSubject = new Subject();

    constructor(private http: HttpClient) { }

    getComptes() {

        return this.http.get(this.getComptesURL, { responseType: 'json' }).map(res => res);
    }

    addAccount(compte:any){
        return this.http.post(this.saveComptesURL, compte).map(res => res)
    }

    getTypeComptes(){
        return this.http.get(this.getTypesURL, { responseType: 'json' }).map(res => res);

    }

    addCredit(credit:any){
        return this.http.post(this.saveCreditURL, credit).map(res => res)
    }

    addAssurance(assurance:any){
        return this.http.post(this.saveAssuranceURL, assurance).map(res => res)
    }

    addAssuranceCredit(assuranceCredit){
        return this.http.post(this.saveAssuranceCreditURL, assuranceCredit).map(res => res)
    }
}
