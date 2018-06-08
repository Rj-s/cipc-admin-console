import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

import { ViewCIPCApplicationButtonComponent } from './cipc-applications.view-application.component';


import tempData from './tempData';


@Component({
  selector: 'app-cipc-applications',
  templateUrl: './cipc-applications.component.html',
  styleUrls: ['./cipc-applications.component.css']
})
export class CipcApplicationsComponent implements OnInit {

  //tempData = [];

  items = [];
  itemCount = 0;

  settings = {
    actions:{
     add: false,
     edit: false,
     delete: false,
     position: false,
    },
     columns: {
       actions: {
         title: 'Actions',
         editable: false,
         filter: false
       },
       referenceNumber: {
         title: 'Reference Number',
         editable: false,
         type: 'custom',
         renderComponent: ViewCIPCApplicationButtonComponent,
       },
       ficaApproved: {
         title: 'FICA Approved By',
         editable: false
       },
       primaryContact : {
         title: 'Primary Contact',
         editable: false
       },
       cipcEnterpriseNumber: {
         title: 'CIPC Enterprise Number',
         editable: false
       },
       cipcReferenceNumber: {
         title: 'CIPC Reference Number',
         editable: false
       },
       nameReservationNumber: {
         title: 'Name Reservation Number',
         editable: false
       },
       cipcIncorporateNumber: {
         title: 'CIPC Incorporate Number',
         editable: false
       },
       cipcNameReservation: {
         title: 'CIPC Name Reservation',
         editable: false
       },
       onFailure: {
         title: 'On Failure?',
         editable: false
       },
       cipcApprovedName: {
         title: 'CIPC Approved Name',
         editable: false
       }
     }
   };
   source: any;

  
   constructor(
    private router: Router
  ) {
    this.source = new LocalDataSource(tempData);
  }

  ngOnInit() {
  }

  showApplication(event: any, referenceNumber: string){
    console.log('evt', event);
    console.log('ref', referenceNumber);
    let redirectTo = '/admin/cipc/view-cipc-application/' + referenceNumber;
    this.router.navigate([redirectTo])
  }
  onCustom(event) {
    console.log('Custom event ', event)
  }

}
