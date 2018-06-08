import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

import { Router } from '@angular/router';

@Component({
  selector: 'button-view',
  template: `
    <a (click)="onClick()">{{ renderValue }}</a>
  `,
})
export class ViewCIPCApplicationButtonComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(
      private router: Router
  ){ }

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    //this.save.emit(this.rowData);
    console.log('rowData', this.rowData);

    // console.log('evt', event);
     console.log('ref', this.rowData.referenceNumber);
     let redirectTo = '/admin/cipc/view-cipc-application/' + this.rowData.referenceNumber;
     this.router.navigate([redirectTo])
  }
  
}