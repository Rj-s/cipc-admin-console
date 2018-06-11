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
  originRoute: string;
  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
    this.originRoute = this.router.url.split('/admin/')[1];
  }

  onClick() {
    //this.save.emit(this.rowData);
    console.log('rowData', this.rowData);
    // console.log('evt', event);
    console.log('ref', this.rowData.referenceNumber);
    const redirectTo = `/admin/${this.originRoute}/view-cipc-application/${this.rowData.referenceNumber}`;
    this.router.navigate([redirectTo]);
  }

}