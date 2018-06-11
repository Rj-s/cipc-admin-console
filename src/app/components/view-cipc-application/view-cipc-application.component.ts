import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
//import { Globals } from '../../services';
//import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-view-cipc-application',
  templateUrl: './view-cipc-application.component.html',
  styleUrls: ['./view-cipc-application.component.css']
})
export class ViewCipcApplicationComponent implements OnInit {

  // Variables
  originRoute = '';
  applicationId = '';
  showResendInformationDialog: boolean = false;

  informationToResend = {
    director: false,
    incorporator: false,
    enterprise: false,
    performNameReservation: false,
    nameReservationProcessStarted: false,
    cipcWorkFlow: false,
    fixMissingPayment: false,
    regeneratePdf: false
  }

  // Methods
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    // Get the application reference number
    this.applicationId = this.route.snapshot.params['id'];
    this.originRoute = this.router.url.split('/')[2];
    // console.log('app', this.applicationId)
  }

  redirectBack() {
    const redirectTo = `/admin/${this.originRoute}`;
    this.router.navigate([redirectTo]);
  }

  resendInformation() {
    this.showResendInformationDialog = !this.showResendInformationDialog;
  }

  submitToCIPC(event: any) {
    event.preventDefault();
    console.log('details', this.informationToResend);

  }



}
