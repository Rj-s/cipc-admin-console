import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

import { AnnualReturnsCustomActionButtons } from './annualreturns-applications.customactionbuttons.component';
import { ElasticSearchService } from '../../services'
import tempData from './tempData';
import { SEARCH_TYPE } from './search-type.enum';
import { ExportService } from '../../services/export.service';

@Component({
  selector: 'app-annualreturn-applications',
  templateUrl: './annualreturn-applications.component.html',
  styleUrls: ['./annualreturn-applications.component.css']
})
export class AnnualreturnApplicationsComponent implements OnInit {

  items = [];
  itemCount = 0;

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: false,
      custom: [
        {
          name: 'view',
          title: 'View ',
        },
        {
          name: 'edit',
          title: 'Edit ',
        },
        {
          name: 'delete',
          title: 'Delete ',
        },
        {
          name: 'duplicate',
          title: 'Duplicate ',
        },
      ],
    },
    columns: {
      id: {
        title: ' ',
        editable: false,
        filter: false,
        type: 'custom',
        isExport: false,
        renderComponent: AnnualReturnsCustomActionButtons,
      },
      companyName: {
        title: 'Company Name',
        isExport: true,
        editable: false
      },
      filerName: {
        title: 'Filer Name',
        isExport: true,
        editable: false
      },
      filerIdNumber: {
        title: 'Filer ID Number',
        isExport: true,
        editable: false
      },
      filerCellphoneNumber: {
        title: 'Filer Cellphone',
        isExport: true,
        editable: false
      },
      arYear: {
        title: 'AR Year',
        isExport: true,
        editable: false
      },
      arAmount: {
        title: 'AR Amount',
        isExport: true,
        editable: false
      },
      penaltyAmount: {
        title: 'Penalty Amount',
        isExport: true,
        editable: false
      },
      arStatus: {
        title: 'AR Status',
        isExport: true,
        editable: false
      },
      submittedDate: {
        title: 'Submitted Date',
        isExport: true,
        editable: false
      },
      paidDate: {
        title: 'Paid Date',
        isExport: true,
        editable: false
      },
      expiryDate: {
        title: 'Expiry Date',
        isExport: true,
        editable: false
      }
    }
  };
  source: any;

  constructor(private elasticSearchService: ElasticSearchService, private exportSvc: ExportService) {
    this.source = new LocalDataSource(tempData);
  }

  ngOnInit() {
    let test = this.elasticSearchService.search('annual-returns');
    console.log('test', test);
  }

  onCustom(event) {
    console.log('Custom event ', event)
  }

  search(searchType: SEARCH_TYPE) {
    let filterData = [];
    switch (searchType) {
      case SEARCH_TYPE.NEW:
        filterData = this.filterBySubmittedDate();
        break;
      case SEARCH_TYPE.PAID:
        filterData = this.filterByPaidDate();
        break;
      case SEARCH_TYPE.EXPIRED:
        filterData = this.filterByExpiryDate();
        break;
      case SEARCH_TYPE.ALL:
        filterData = tempData;
        break;
      default:
        break;
    }
    this.source = new LocalDataSource(filterData);
  }

  filterByPaidDate() {
    return tempData.filter((item: any) => {
      return item.paidDate !== '' && item.paidDate !== null;
    });
  }

  filterByExpiryDate() {
    return tempData.filter((item: any) => {
      return item.expiryDate !== '' && item.expiryDate !== null;
    });
  }

  filterBySubmittedDate() {
    return tempData.filter((item: any) => {
      return item.submittedDate !== '' && item.submittedDate !== null
        && this.daysDiffFromToday(item.submittedDate) < 30;
    });
  }

  daysDiffFromToday(date) {
    const diff = new Date().getTime() - Date.parse(date);
    return Math.floor(diff / 86400000);
  }

  export2Csv(): void {
    this.exportSvc.export2Csv(this.source, this.settings.columns);
  }
}
