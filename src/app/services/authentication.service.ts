import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment'

export class LoginDetail {
    email: String;
    password: String;
    strategy: String;
    constructor(email: String, password: String) {
      this.email = email;
      this.password = password;
      this.strategy = 'local';
    }
  }

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) {
        this.token = 'testing';
    }

    private isAuthenticated = new BehaviorSubject<Boolean>(false);
    public token: string;

    private isLoggedIn = new BehaviorSubject<Boolean>(false);
    private isAdmin = new BehaviorSubject<Boolean>(false);
    private userId: null;
  
    loginError: String = '';
    redirectUrl: String;
  
    
    //testing var's
    private userClaim: string;
    private clientId: string;

    public getHeadersWToken(): Headers {
        return new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
    };

    public getHeaderWIBMXClient(): Headers {
        return new Headers({
            'Content-Typee': 'application/json',
            'x-ibm-client-id': '0ba6a401-85cf-4832-bf42-3db36a6591ce'
        });
    }

    public getUserJWTToken(): Promise<any> {
        let newUrl = environment.apiUrl.replace('{0}', this.userClaim);
        newUrl = newUrl.replace('{1}', this.clientId);

        return this.http.get(newUrl, { headers: this.getHeaderWIBMXClient() })
            .toPromise()
            .then(response => {
                this.token = response['_body'];

                //this.isAuthenticated.next(true);
                return response;
            })
            .catch(this.handleError)
    }

    public login(loginDetails: LoginDetail): Promise<any> {
        //var apiUrl = this.globals.apiUrl + this.globals.unidentifiedpartyApiUrl;
        // console.log('globalsAPI',apiUrl)
        const url = 'assets/questions.json';

        /*
             let newDetails = {
                 personIdentifier: loginDetails.idNumber
             }
 
             apiUrl = apiUrl + 'individual/' + loginDetails.idNumber;
         */
        let apiUrl = '';
        return this.http.get(apiUrl, { headers: this.getHeaderWIBMXClient() })
            .toPromise()
            .then(response => {
                console.log('auth response', response)
                //this.isAuthenticated.next(true);

                const body = response.json();
                this.token = body.accessToken;
                this.isLoggedIn.next(true);
                this.userId = body.user.id;
                if (!!body.user.isAdmin) {
                  this.isAdmin.next(true);
                }
                
                return response;
            })
            .catch(this.handleError)
    }
    
    public logout(): void {
        this.isLoggedIn.next(false);
        this.isAdmin.next(false);
        this.userId = null;
        this.token = null;
      }

    
      public IsUserAuthenticated() {
        return this.isLoggedIn.asObservable();
    }

    //testing 
    public quickAuth():void{
        this.isLoggedIn.next(true);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred fetching customers data', error);
        return Promise.reject(error.message || error);
    }

}