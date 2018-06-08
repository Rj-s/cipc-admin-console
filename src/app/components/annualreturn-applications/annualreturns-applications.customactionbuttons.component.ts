import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

import { Router } from '@angular/router';

@Component({
    selector: 'button-view',
    template: `
    <a (click)="onClick($event,'add')"><span class="icon-applicationdoc"></span></a>
    <a (click)="onClick($event,'forward')">--></a>
    <a (click)="onClick($event,'view')"><span class='icon-search'></span></a>
  `,
})
export class AnnualReturnsCustomActionButtons implements ViewCell, OnInit {
    renderValue: string;

    @Input() value: string | number;
    @Input() rowData: any;

    @Output() save: EventEmitter<any> = new EventEmitter();

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.renderValue = this.value.toString().toUpperCase();
    }

    onClick(event: any, type: string) {
        //this.save.emit(this.rowData);
        console.log('rowData', this.rowData);

        console.log('evt', event);
        console.log('ref', type);
        //let redirectTo = '/admin/cipc/view-cipc-application/' + this.rowData.referenceNumber;
        //this.router.navigate([redirectTo])
    }

}